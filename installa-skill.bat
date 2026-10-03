@echo off
REM ============================================================
REM  INSTALLA-SKILL.BAT
REM  Installa (o aggiorna) le skill di Claude Code nella cartella
REM  globale delle skill:  %USERPROFILE%\.claude\skills\
REM
REM  Cosa fa:
REM   1. scarica da GitHub due archivi zip:
REM        - le skill ufficiali di GSAP (greensock/gsap-skills)
REM        - le skill di Three.js (cloudai-x/threejs-skills)
REM   2. li estrae in una cartella temporanea
REM   3. copia le skill scelte al loro posto (sostituendo le vecchie)
REM   4. scarica code-review (un solo file)
REM   4b. scarica la skill claude-council (parte solo a comando)
REM   4c. installa i plugin ponytail e i-have-adhd (se trova Claude Code)
REM   5. toglie le vecchie skill ormai fuse in ui-personal, e le
REM      eventuali copie locali delle skill di Ivan
REM
REM  NOTA: ui-personal, debug-personal e verifica-personal NON si
REM  installano qui. Si caricano una volta nell'account claude.ai
REM  (Impostazioni > Competenze > Aggiungi) e si sincronizzano da
REM  sole su tutti i PC. Una copia anche qui creerebbe doppioni.
REM
REM  - Funziona su Windows 10/11: curl e tar sono gia' inclusi
REM  - Non serve Node.js, Git o altro
REM  - Rilanciarlo = AGGIORNARE all'ultima versione su GitHub
REM ============================================================

REM --- Console in UTF-8, per mostrare bene i caratteri speciali
chcp 65001 >nul

REM --- Le variabili create qui spariscono alla fine dello script
setlocal EnableDelayedExpansion

REM --- Cartella delle skill. %USERPROFILE% e' la cartella
REM     dell'utente (es. C:\Users\bandi): funziona su ogni PC
set "DEST=%USERPROFILE%\.claude\skills"

REM --- Cartella temporanea di lavoro, cancellata alla fine
set "TMPDIR=%TEMP%\installa-skill-claude"

REM --- Contatori per il riepilogo finale
set /a OK=0
set /a ERRORI=0

echo.
echo Installo le skill in: %DEST%
echo.

REM --- Si riparte sempre da una cartella temporanea pulita
if exist "%TMPDIR%" rmdir /s /q "%TMPDIR%"
mkdir "%TMPDIR%"
if not exist "%DEST%" mkdir "%DEST%"


REM ============================================================
REM  1-2. SCARICO ED ESTRAGGO GLI ARCHIVI
REM  Formato:  call :archivio  <nome-breve>  <proprietario/repository>  <cartella da estrarre>
REM  GitHub offre ogni repository come zip all'indirizzo
REM  codeload.github.com/<proprietario>/<repo>/zip/refs/heads/main
REM  Lo zip contiene una cartella "<repo>-main" con tutto dentro.
REM  Si estrae SOLO la cartella delle skill: nella radice di alcuni
REM  repository ci sono "collegamenti simbolici" (es. CLAUDE.md che
REM  rimanda ad AGENTS.md) che Windows non sa creare senza permessi
REM  di amministratore, e che a noi non servono.
REM ============================================================
echo Scarico gli archivi...
call :archivio gsap   greensock/gsap-skills     gsap-skills-main/skills
call :archivio three  cloudai-x/threejs-skills  threejs-skills-main/skills
echo.


REM ============================================================
REM  3. COPIO LE SKILL
REM  Formato:  call :installa  <cartella-di-origine>  <nome-skill>
REM  Ogni skill viene prima cancellata e poi ricopiata intera:
REM  cosi' i file tolti da GitHub spariscono anche dal PC.
REM  Per escludere una skill: metti REM davanti alla sua riga.
REM ============================================================
echo Installo le skill...

REM ---------- GSAP, animazioni (ufficiali) ----------
REM Escluse di proposito: gsap-react e gsap-frameworks (React,
REM Vue, Svelte), perche' lavoriamo in HTML/CSS/JS puri
set "GSAP=%TMPDIR%\gsap\gsap-skills-main\skills"
call :installa "%GSAP%"  gsap-core
call :installa "%GSAP%"  gsap-timeline
call :installa "%GSAP%"  gsap-scrolltrigger
call :installa "%GSAP%"  gsap-plugins
call :installa "%GSAP%"  gsap-utils
call :installa "%GSAP%"  gsap-performance

REM ---------- Three.js, scene 3D ----------
set "THREE=%TMPDIR%\three\threejs-skills-main\skills"
call :installa "%THREE%"  threejs-fundamentals
call :installa "%THREE%"  threejs-geometry
call :installa "%THREE%"  threejs-materials
call :installa "%THREE%"  threejs-lighting
call :installa "%THREE%"  threejs-textures
call :installa "%THREE%"  threejs-animation
call :installa "%THREE%"  threejs-loaders
call :installa "%THREE%"  threejs-shaders
call :installa "%THREE%"  threejs-postprocessing
call :installa "%THREE%"  threejs-interaction
echo.


REM ============================================================
REM  4. CODE REVIEW (un solo file, scaricato direttamente)
REM ============================================================
echo Scarico code-review...
curl -fsSL --create-dirs -o "%DEST%\code-review\SKILL.md" "https://raw.githubusercontent.com/anthroos/claude-code-review-skill/main/SKILL.md"
if errorlevel 1 (
    echo   [ERRORE] code-review
    set /a ERRORI+=1
) else (
    echo   [OK]     code-review
    set /a OK+=1
)
echo.


REM ============================================================
REM  4b. CLAUDE COUNCIL (skill che parte SOLO a comando)
REM  Consiglio di sotto-agenti Claude che rispondono, si criticano
REM  a vicenda e arrivano a una sintesi (amgadelgamal/claude-council,
REM  licenza MIT). Si scaricano i 3 file e si aggiunge la riga
REM  disable-model-invocation: cosi' parte solo quando scrivi
REM  /claude-council, mai da sola. Costa molti token: usalo poco.
REM ============================================================
echo Scarico claude-council...
call :council
echo.


REM ============================================================
REM  4c. PLUGIN DI CLAUDE CODE (ponytail e i-have-adhd)
REM  Non sono semplici skill: contengono hook, quindi si installano
REM  col comando "claude plugin", a livello utente.
REM   - ponytail: meno codice, soluzioni piu' semplici
REM   - i-have-adhd: risposte con l'azione per prima. Resta SEMPRE
REM     attiva grazie al file vuoto .i-have-adhd-always. Per
REM     spegnerla per sempre: cancella quel file.
REM  Se il comando "claude" non e' nel PATH (capita con l'app
REM  desktop) si cerca l'eseguibile dentro l'app. Se non si trova,
REM  si stampano i comandi da dare a mano.
REM ============================================================
echo Installo i plugin...
set "CLAUDE="
where claude >nul 2>&1 && set "CLAUDE=claude"
if not defined CLAUDE (
    for /f "delims=" %%F in ('dir /b /s "%APPDATA%\Claude\claude-code\claude.exe" 2^>nul') do set "CLAUDE=%%F"
)
if defined CLAUDE (
    call :plugin DietrichGebert/ponytail ponytail@ponytail
    call :plugin ayghri/i-have-adhd i-have-adhd@i-have-adhd
    if not exist "%USERPROFILE%\.claude\.i-have-adhd-always" type nul > "%USERPROFILE%\.claude\.i-have-adhd-always"
) else (
    echo   [DA FARE A MANO] non trovo Claude Code. In Claude Code scrivi:
    echo     /plugin marketplace add DietrichGebert/ponytail
    echo     /plugin install ponytail@ponytail
    echo     /plugin marketplace add ayghri/i-have-adhd
    echo     /plugin install i-have-adhd@i-have-adhd
)
echo.

REM ============================================================
REM  5. TOLGO LE VECCHIE SKILL
REM  Taste, Web Design Guidelines e Frontend Design sono state
REM  fuse dentro ui-personal: tenerle creerebbe regole doppie.
REM  Le skill di Ivan stanno nell'account claude.ai: le copie
REM  locali (da versioni precedenti di questo script) si tolgono.
REM  Si toglie solo se la cartella esiste.
REM ============================================================
echo Tolgo le skill vecchie o doppie...
for %%S in (ui-personal debug-personal verifica-personal design-taste-frontend design-taste-frontend-v1 redesign-existing-projects high-end-visual-design minimalist-ui industrial-brutalist-ui gpt-taste stitch-design-taste web-design-guidelines frontend-design) do (
    if exist "%DEST%\%%S" (
        rmdir /s /q "%DEST%\%%S"
        echo   [TOLTA]  %%S
    )
)
echo.


REM ============================================================
REM  RIEPILOGO E PULIZIA
REM ============================================================
rmdir /s /q "%TMPDIR%"

echo ------------------------------------------------------------
echo  Skill installate: %OK%    Errori: %ERRORI%
echo ------------------------------------------------------------
if %ERRORI% GTR 0 echo  Controlla le righe [ERRORE] qui sopra.
echo  Riavvia Claude Code per fargli vedere le skill.
echo.

REM --- Tiene aperta la finestra finche' non premi un tasto
pause
endlocal
REM --- Fine dello script: senza questa riga Windows eseguirebbe
REM     anche le subroutine qui sotto
goto :eof


REM ============================================================
REM  SUBROUTINE :archivio
REM    %1 = nome breve della cartella temporanea (es. gsap)
REM    %2 = proprietario/repository su GitHub
REM    %3 = cartella dell'archivio da estrarre (il resto si ignora)
REM  Scarica lo zip e lo estrae con tar (incluso in Windows 10/11)
REM ============================================================
:archivio
curl -fsSL -o "%TMPDIR%\%~1.zip" "https://codeload.github.com/%~2/zip/refs/heads/main"
if errorlevel 1 (
    echo   [ERRORE] download di %~2
    set /a ERRORI+=1
    goto :eof
)
mkdir "%TMPDIR%\%~1"
REM tar -x = estrai, -f = da questo file, -C = in questa cartella,
REM e alla fine la sola cartella da estrarre
tar -xf "%TMPDIR%\%~1.zip" -C "%TMPDIR%\%~1" "%~3"
if errorlevel 1 (
    echo   [ERRORE] estrazione di %~2
    set /a ERRORI+=1
) else (
    echo   [OK]     %~2
)
goto :eof


REM ============================================================
REM  SUBROUTINE :installa
REM    %1 = cartella che contiene la skill (dentro l'archivio)
REM    %2 = nome della skill (= nome della cartella)
REM ============================================================
:installa
if not exist "%~1\%~2\SKILL.md" (
    echo   [ERRORE] %~2 non trovata nell'archivio
    set /a ERRORI+=1
    goto :eof
)
REM Cancella la versione vecchia, se c'e'
if exist "%DEST%\%~2" rmdir /s /q "%DEST%\%~2"
REM xcopy: /E sottocartelle (anche vuote), /I la destinazione e'
REM una cartella, /Y non chiede conferme, /Q non elenca i file
xcopy "%~1\%~2" "%DEST%\%~2" /E /I /Y /Q >nul
if errorlevel 1 (
    echo   [ERRORE] copia di %~2
    set /a ERRORI+=1
) else (
    echo   [OK]     %~2
    set /a OK+=1
)
goto :eof

REM ============================================================
REM  SUBROUTINE :council
REM  Scarica i 3 file di claude-council e li rende "solo a comando"
REM ============================================================
:council
set "CDIR=%DEST%\claude-council"
set "CBASE=https://raw.githubusercontent.com/amgadelgamal/claude-council/main"
set "CFAIL="
if exist "%CDIR%" rmdir /s /q "%CDIR%"
mkdir "%CDIR%"
for %%F in (SKILL.md council-workflow.js LICENSE) do (
    curl -fsSL -o "%CDIR%\%%F" "%CBASE%/%%F"
    if errorlevel 1 set "CFAIL=1"
)
if defined CFAIL (
    echo   [ERRORE] download di claude-council
    set /a ERRORI+=1
    goto :eof
)
REM Aggiunge "disable-model-invocation: true" sotto la riga "name:"
REM (UTF-8 senza BOM, altrimenti l'intestazione della skill si rompe)
powershell -NoProfile -Command "$f='%CDIR%\SKILL.md'; $l=[IO.File]::ReadAllLines($f) | ForEach-Object { $_; if($_ -eq 'name: claude-council'){'disable-model-invocation: true'} }; [IO.File]::WriteAllLines($f,$l,(New-Object Text.UTF8Encoding($false)))"
findstr /c:"disable-model-invocation: true" "%CDIR%\SKILL.md" >nul
if errorlevel 1 (
    echo   [ERRORE] claude-council: non sono riuscito a renderla solo a comando
    set /a ERRORI+=1
) else (
    echo   [OK]     claude-council
    set /a OK+=1
)
goto :eof


REM ============================================================
REM  SUBROUTINE :plugin
REM    %1 = proprietario/repository del marketplace su GitHub
REM    %2 = plugin@marketplace da installare
REM ============================================================
:plugin
"!CLAUDE!" plugin marketplace add %~1 >nul 2>&1
"!CLAUDE!" plugin install %~2 --scope user >nul 2>&1
if errorlevel 1 (
    echo   [ERRORE] %~2
    set /a ERRORI+=1
) else (
    echo   [OK]     %~2
    set /a OK+=1
)
goto :eof

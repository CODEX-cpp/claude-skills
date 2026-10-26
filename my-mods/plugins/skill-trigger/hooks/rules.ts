// Una riga per skill: { skill, re }. Le parole sono radici (es. "animazion" copre animazione/animazioni).
// Il testo della skill resta nel suo SKILL.md: qui si decide solo quando suggerirla.
// String.raw: i backslash (\b, \.) si scrivono una volta sola.
const w = (s: string) => new RegExp(`(?<![a-zà-ù])(?:${s})`, 'i')

export const RULES: { skill: string; re: RegExp }[] = [
  // --- tue skill (nell'account: prefisso anthropic-skills) ---
  { skill: 'anthropic-skills:ui-personal', re: w(String.raw`sito|siti\b|landing|portfolio|css|html|scss|sass|tailwind|bootstrap|interfaccia|ui\b|ux\b|layout|impaginazion|responsive|adattiv|front-?end|redesign|restyling|navbar|barra di navigazione|hero\b|pagina web|pagina html|homepage|home page|bottone|pulsant|card\b|modale|popup|pop-up|form\b|modulo di contatto|tabella|griglia|flexbox|font\b|tipografia|colori|palette|tema scuro|dark mode|modalità scura|gestionale|dashboard|componente|grafica|aspetto|estetic|spaziatur|margini|allinea|centra|contrasto|accessibilit|figma|mockup|wireframe|favicon|logo\b|banner|slider|carosello|accordion|tooltip|dropdown|menu a tendina|sidebar|menu laterale|footer|piè di pagina`) },
  { skill: 'anthropic-skills:debug-personal', re: w(String.raw`error|errore|errori|bug\b|difett|problem|guast|crash|traceback|eccezion|exception|stack ?trace|non funzion|non va\b|non vanno|non parte|non partono|non si avvi|non si apr|non si chiud|non carica|non salva|non risponde|non trova|non compare|non appare|non si vede|non si vedono|si blocca|bloccat|si pianta|piantat|si chiude da sol|rott[oa]|si rompe|smesso di funzion|ha smesso|sbagliat|strano|strana|anomal|inatteso|imprevist|lent[oa]|lentezza|va piano|si vede male|sparit|scompars|undefined|\bnull\b|\bnan\b|404|500\b|timeout|time-out|console|correggi|correggere|risolv|aggiusta|aggiustare|ripara|sistema\b|sistemami|sistemare|perché non|perche non|come mai non`) },
  { skill: 'anthropic-skills:verifica-personal', re: w(String.raw`verifica|verificare|controlla che|controllare che|assicurati|sei sicuro|sicuro che|prova a|provalo|testa|testalo|testare|funziona davvero|è finito|e finito|hai finito|è pronto|e pronto|lavoro completo|completato`) },

  // --- sicurezza (skill security-audit, copia di cloudflare/security-audit-skill in ~/.claude/skills) ---
  // Messa subito dopo le tue skill: col tetto di 4 suggerimenti non viene mai tagliata fuori.
  { skill: 'security-audit', re: w(String.raw`nis ?2|nis2|direttiva nis|cve\b|cve-|cwe\b|cvss|owasp|sicurezz|insicur|non sicur|poco sicur|mettere in sicur|metti in sicur|mettiamo in sicur|messa in sicur|security|insecure|hardening|blindar|irrobust|vulnerabil|vulnerab|vuln\b|fall[ae]\b|buco di|buchi di|bucat|exploit|sfruttabil|sfrutta la|zero-?day|0-?day|patch di sic|aggiornament[oi] di sic|attacc|hacker|hackerat|compromess|manomess|intrusion|intrus[oi]|violazion|violat|data breach|breach\b|incidente informatico|ransomware|malware|virus\b|trojan|webshell|web shell|backdoor|php2shell|shell remota|reverse shell|rootkit|phishing|sql ?injection|sqli\b|iniezion|injection|xss\b|cross-?site|csrf\b|ssrf\b|rce\b|esecuzione (di )?codice|esecuzione remota|remote code|command injection|path traversal|directory traversal|\blfi\b|\brfi\b|deserializz|xxe\b|open redirect|clickjacking|idor\b|privilege escalation|escalation|elevazione dei privilegi|bypass|aggirare|autenticazion|autorizzazion|controllo (degli )?accessi|credenzial|segreti|secret\b|chiavi? api|api key|token (esposto|rubat|trapelat)|password (in chiaro|debol|salvat)|hash (debol|md5)|\bmd5\b|sha-?1\b|salt\b|crittograf|cifratura|cifrare|\btls\b|\bssl\b|certificat|2fa|mfa|due fattori|brute ?force|forza bruta|esposto|esposti|esposta|esposte|esposizione|phpmyadmin|phpinfo|dump (pubblic|esposto)|backup esposti|directory listing|listing delle cartelle|\.env\b|upload (di file )?(non sicur|pericolos|arbitrar)|caricamento file (non sicur|pericolos)|pen ?test|pentest|penetration|red team|vulnerability assessment|\bva ?pt\b|threat model|modello delle minacce|superficie di attacco|trust boundary|confine di fiducia|audit|analisi di sicur|analisi delle vulnerab|scansione (di )?(sicurezza|vulnerab)|revisione di sicur|controllo di sicur|conformit|compliance|gdpr|\bdpo\b|data protection|iso ?27001|\bagid\b|\bacn\b|csirt`) },

  // --- GSAP (animazioni nel browser) ---
  { skill: 'gsap-core', re: w(String.raw`gsap|tween|easing|\bease\b|stagger|animazion|animare|anima\b|animato|transizion|fade|dissolvenz|rimbalz|effetto di entrata|effetto d.entrata|keyframe`) },
  { skill: 'gsap-scrolltrigger', re: w(String.raw`scrolltrigger|scroll|parallax|parallasse|scrub|scorrimento|allo scorrere|scorrendo|sticky|pinnat|fissa la sezione|si rivela|compare scorrendo`) },
  { skill: 'gsap-timeline', re: w(String.raw`timeline|sequenza|in sequenza|sequenziale|coreografia|uno dopo l.altro`) },
  { skill: 'gsap-plugins', re: w(String.raw`splittext|scrollsmoother|scrolltoplugin|\bflip\b|draggable|trascina|drag and drop|drag\b|morphsvg|drawsvg|disegna.*svg|svg.*animat|inertia|observer|customease|scrambletext|lettera per lettera|parola per parola|spezza il testo|scorrimento fluido|smooth scroll|momentum`) },
  { skill: 'gsap-utils', re: w(String.raw`gsap\.utils|clamp|maprange|normalizz|interpol|snap\b|aggancia ai valori|wrap\b|valore casuale|random`) },
  { skill: 'gsap-performance', re: w(String.raw`a scatti|scatta|jank|\bfps\b|fluidit|fluid[oa]|animazion[ei] (lent|pesant)|lag\b|will-change|ottimizza.*animaz|performance.*animaz|animaz.*performance`) },

  // --- Three.js (3D nel browser) ---
  { skill: 'threejs-fundamentals', re: w(String.raw`three\.?js|threejs|webgl|\b3d\b|tridimension|scena 3d|scena\b|telecamera|camera\b|renderer|canvas 3d|r3f|react three`) },
  { skill: 'threejs-geometry', re: w(String.raw`geometri|mesh\b|vertic|poligon|buffergeometry|instancing|istanz|forma 3d|cubo|sfera|cilindro|\btoro\b|particelle`) },
  { skill: 'threejs-materials', re: w(String.raw`materiale|materiali|\bpbr\b|metallic|vetro|trasparenz|riflessi|riflessione|rugosit|phong|lambert|standardmaterial|superficie lucida|opaco|lucido`) },
  { skill: 'threejs-lighting', re: w(String.raw`\bluce\b|\bluci\b|ombr[ae]\b|illuminazion|lampada|riflettore|spotlight|hdri|\bibl\b|ambient light|luce direzionale|luce ambientale`) },
  { skill: 'threejs-textures', re: w(String.raw`texture|\buv\b|mappatura|cubemap|bump|normal map|immagine sull.oggetto|immagine sul modello|envmap|mappa ambiente`) },
  { skill: 'threejs-shaders', re: w(String.raw`shader|glsl|fragment|vertex|uniform|effetto personalizzato|deforma i vertici|effetto acqua|effetto fuoco|distorsion`) },
  { skill: 'threejs-postprocessing', re: w(String.raw`post-?processing|post processing|bloom|profondità di campo|profondita di campo|\bdof\b|glow\b|alone luminoso|sfocatura|vignett|correzione colore|color grading|aberrazione`) },
  { skill: 'threejs-animation', re: w(String.raw`animazion[ei] 3d|scheletro|skeletal|morph|mixer|personaggio anim|clip di animazione|animation clip|oggetto che ruota|oggetto che si muove|ciclo di animazione`) },
  { skill: 'threejs-loaders', re: w(String.raw`\bgltf\b|\bglb\b|\bfbx\b|\bobj\b|draco|modello 3d|modelli 3d|carica.*modello|importa.*modello|loader|\bhdr\b`) },
  { skill: 'threejs-interaction', re: w(String.raw`raycast|clic sull.oggetto|click sull.oggetto|seleziona.*oggetto|orbitcontrols|orbit controls|controlli.*camera|ruota con il mouse|ruota con il dito|trascina.*oggetto|oggetto.*cliccabile`) },

  // --- revisione codice ---
  { skill: 'code-review', re: w(String.raw`code review|revisione|revisiona|rivedi|\breview\b|controlla il codice|controllo del codice|pull request|\bpr\b|\bdiff\b`) },  // audit e sicurezza ora li gestisce 'security-audit'
]

export const VERIFY =
  'Regola sempre attiva: prima di scrivere "fatto", "funziona", "risolto" o simili, esegui una verifica reale (test, comando, apertura del file) e riporta cosa hai visto. Se non puoi verificare, dillo apertamente. Per i dettagli usa la skill anthropic-skills:verifica-personal.'

// al massimo 4 suggerimenti per messaggio, nell'ordine della tabella, per non caricare troppe skill insieme
export const matches = (text: string) => RULES.filter(r => r.re.test(text)).map(r => r.skill).slice(0, 4)

let questions = [
{ "question": "Qual è il miglior consiglio che tu abbia mai ricevuto?", "category": "Qual è" },
{ "question": "Qual è la tua stagione preferita?", "category": "Qual è" },
{ "question": "Qual è la cosa che ti fa ridere di più?", "category": "Qual è" },
{ "question": "Qual è la tua canzone preferita?", "category": "Qual è" },
{ "question": "Qual è il luogo più bello che hai mai visitato?", "category": "Qual è" },
{ "question": "Qual è il tuo hobby preferito?", "category": "Qual è" },
{ "question": "Qual è il regalo più bello che ti sia mai stato fatto?", "category": "Qual è" },
{ "question": "Qual è la cosa più strana che hai mangiato?", "category": "Qual è" },
{ "question": "Qual è la tua paura più grande?", "category": "Qual è" },
{ "question": "Qual è l'attività che ti fa sentire bene?", "category": "Qual è" },
{ "question": "Qual è il tuo sogno più grande che vuoi realizzare?", "category": "Qual è" },
{ "question": "Qual è il momento più imbarazzante che ti è mai successo?", "category": "Qual è" },
{ "question": "Qual è il tuo libro preferito?", "category": "Qual è" },
{ "question": "Qual è il miglior viaggio che hai fatto nella tua vita?", "category": "Qual è" },
{ "question": "Qual è il tuo talento nascosto?", "category": "Qual è" },
{ "question": "Qual è l'oggetto che non potresti mai vivere senza?", "category": "Qual è" },
{ "question": "Qual è la cosa più romantica che hai mai fatto?", "category": "Qual è" },
{ "question": "Qual è la tua tradizione familiare preferita?", "category": "Qual è" },
{ "question": "Qual è la tua città preferita?", "category": "Qual è" },
{ "question": "Qual è il film che ti ha fatto piangere più di tutti?", "category": "Qual è" },
{ "question": "Qual è il più grande rischio che hai mai preso?", "category": "Qual è" },
{ "question": "Qual è il tuo sogno ricorrente?", "category": "Qual è" },
{ "question": "Qual è l'attività che ti rilassa di più dopo una lunga giornata?", "category": "Qual è" },
{ "question": "Qual è la tua più grande conquista nella vita?", "category": "Qual è" },
{ "question": "Qual è il cibo che mangi sempre in segreto?", "category": "Qual è" },
{ "question": "Qual è la tua serie TV preferita?", "category": "Qual è" },
{ "question": "Qual è la cosa più bizzarra che ti è successa in un ristorante?", "category": "Qual è" },
{ "question": "Qual è l'animale che più ti rappresenta?", "category": "Qual è" },
{ "question": "Qual è la cosa più strana che hai trovato online?", "category": "Qual è" },
{ "question": "Qual è il tuo piatto preferito per la colazione?", "category": "Qual è" },
{ "question": "Qual è il momento più divertente che ti è successo con i tuoi amici?", "category": "Qual è" },
{ "question": "Qual è l'errore più grande che hai mai fatto e cosa hai imparato da esso?", "category": "Qual è" },
{ "question": "Qual è la tua meta di viaggio dei sogni?", "category": "Qual è" },
{ "question": "Qual è la canzone che ti fa ballare ogni volta che la senti?", "category": "Qual è" },
{ "question": "Qual è il miglior consiglio che hai dato a qualcuno?", "category": "Qual è" },
{ "question": "Qual è la tua attività preferita da fare da solo/a?", "category": "Qual è" },
{ "question": "Qual è la cosa che ti fa sentire davvero felice?", "category": "Qual è" },
{ "question": "Qual è il posto dove ti senti più a casa?", "category": "Qual è" },
{ "question": "Qual è il tuo sogno professionale?", "category": "Qual è" },
{ "question": "Qual è il momento più felice della tua vita finora?", "category": "Qual è" },
{ "question": "Qual è il tuo cibo comfort per quando sei giù di morale?", "category": "Qual è" },
{ "question": "Qual è la tua più grande ispirazione nella vita?", "category": "Qual è" },
{ "question": "Qual è il posto più tranquillo che conosci?", "category": "Qual è" },
{ "question": "Qual è la tua abitudine quotidiana preferita?", "category": "Qual è" },
{ "question": "Qual è il posto più esotico che vorresti visitare?", "category": "Qual è" },
{ "question": "Qual è la cosa più folle che hai fatto in vacanza?", "category": "Qual è" },
{ "question": "Qual è la tua app preferita e perché?", "category": "Qual è" },
{ "question": "Qual è il tuo obiettivo principale per il prossimo anno?", "category": "Qual è" },
{ "question": "Qual è la tua attività preferita per rimanere in forma?", "category": "Qual è" },
{ "question": "Qual è il tuo ricordo più bello di quando eri bambino/a?", "category": "Qual è" },
{ "question": "Qual è la tua qualità che apprezzi di più in un amico?", "category": "Qual è" },
{ "question": "Qual è la tua serie TV che guarderesti senza mai stancarti?", "category": "Qual è" },
{ "question": "Qual è il miglior regalo che tu abbia mai fatto a qualcun altro?", "category": "Qual è" },
{ "question": "Qual è il momento più emozionante che hai vissuto finora?", "category": "Qual è" },
{ "question": "Qual è il talento che vorresti avere, ma che non hai?", "category": "Qual è" },
{ "question": "Qual è la parte più importante della tua giornata?", "category": "Qual è" },
{ "question": "Qual è il tuo posto preferito per rilassarti dopo una lunga giornata?", "category": "Qual è" },
{ "question": "Qual è la cosa che più ti fa sentire orgoglioso di te stesso/a?", "category": "Qual è" },
{ "question": "Qual è l'oggetto che ti fa sentire più nostalgico/a?", "category": "Qual è" },
{ "question": "Qual è la tua qualità che ti piacerebbe migliorare?", "category": "Qual è" },
{ "question": "Qual è il miglior film che hai visto negli ultimi mesi?", "category": "Qual è" },
{ "question": "Qual è la tua attività preferita per passare il tempo con gli amici?", "category": "Qual è" },
{ "question": "Qual è la cosa più coraggiosa che hai mai fatto?", "category": "Qual è" },
{ "question": "Qual è la tua tradizione festiva preferita?", "category": "Qual è" },
{ "question": "Qual è il consiglio che daresti al te stesso/a di 10 anni fa?", "category": "Qual è" },
{ "question": "Qual è il tuo posto segreto dove ti rifugi quando hai bisogno di pensare?", "category": "Qual è" }
{ "question": "Qual è il tuo colore preferito?", "category": "Qual è" },
{ "question": "Qual è il tuo piatto preferito?", "category": "Qual è" },
{ "question": "Qual è il tuo film preferito?", "category": "Qual è" }
{ "question": "Hai mai fatto qualcosa di davvero folle per amore?", "category": "Hai mai" },
{ "question": "Hai mai mentito per evitare una situazione imbarazzante?", "category": "Hai mai" },
{ "question": "Hai mai viaggiato da solo/a?", "category": "Hai mai" },
{ "question": "Hai mai fatto un'amicizia inaspettata in un posto inusuale?", "category": "Hai mai" },
{ "question": "Hai mai cantato a squarciagola sotto la doccia?", "category": "Hai mai" },
{ "question": "Hai mai avuto un incontro imbarazzante con una celebrità?", "category": "Hai mai" },
{ "question": "Hai mai rotto qualcosa di valore senza volerlo?", "category": "Hai mai" },
{ "question": "Hai mai partecipato a un reality show (o avresti voluto)?", "category": "Hai mai" },
{ "question": "Hai mai fatto uno scherzo epico a qualcuno?", "category": "Hai mai" },
{ "question": "Hai mai mangiato qualcosa che pensavi fosse disgustoso e ti è piaciuto?", "category": "Hai mai" },
{ "question": "Hai mai incontrato qualcuno online e poi incontrato di persona?", "category": "Hai mai" },
{ "question": "Hai mai fatto una scommessa folle che ti ha sorpreso?", "category": "Hai mai" },
{ "question": "Hai mai rubato qualcosa (anche accidentalmente)?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa che pensavi di non fare mai?", "category": "Hai mai" },
{ "question": "Hai mai fatto un viaggio improvvisato senza pianificare nulla?", "category": "Hai mai" },
{ "question": "Hai mai mentito su una cosa per far sembrare che fossi un esperto in qualcosa?", "category": "Hai mai" },
{ "question": "Hai mai cambiato completamente il tuo aspetto?", "category": "Hai mai" },
{ "question": "Hai mai avuto paura di parlare in pubblico?", "category": "Hai mai" },
{ "question": "Hai mai detto una bugia che ti è costata molto?", "category": "Hai mai" },
{ "question": "Hai mai scritto una lettera d'amore segreta?", "category": "Hai mai" },
{ "question": "Hai mai fatto un salto nel vuoto (bungee jumping, paracadutismo)?", "category": "Hai mai" },
{ "question": "Hai mai preso un rischio che ti ha davvero pagato?", "category": "Hai mai" },
{ "question": "Hai mai fatto una cosa pazza solo per impressionare qualcuno?", "category": "Hai mai" },
{ "question": "Hai mai partecipato a una festa in maschera?", "category": "Hai mai" },
{ "question": "Hai mai sentito una canzone che ti ha fatto piangere?", "category": "Hai mai" },
{ "question": "Hai mai preso una decisione impulsiva che si è rivelata positiva?", "category": "Hai mai" },
{ "question": "Hai mai dato una seconda possibilità a qualcuno che non se lo meritava?", "category": "Hai mai" },
{ "question": "Hai mai cambiato idea all'ultimo momento su una grande decisione?", "category": "Hai mai" },
{ "question": "Hai mai fatto un regalo sorprendente senza una ragione speciale?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa di imbarazzante davanti alla tua famiglia?", "category": "Hai mai" },
{ "question": "Hai mai ballato in pubblico senza vergogna?", "category": "Hai mai" },
{ "question": "Hai mai fatto un viaggio senza sapere dove saresti andato?", "category": "Hai mai" },
{ "question": "Hai mai avuto una cotta per un personaggio famoso?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa di pericoloso e poi ti sei pentito/a?", "category": "Hai mai" },
{ "question": "Hai mai partecipato a una protesta o manifestazione?", "category": "Hai mai" },
{ "question": "Hai mai visto un film che ti ha cambiato la vita?", "category": "Hai mai" },
{ "question": "Hai mai provato a cucinare qualcosa che è andato completamente storto?", "category": "Hai mai" },
{ "question": "Hai mai scritto un diario segreto?", "category": "Hai mai" },
{ "question": "Hai mai fatto una figuraccia davanti a un gruppo di persone?", "category": "Hai mai" },
{ "question": "Hai mai sperimentato qualcosa di completamente nuovo e inaspettato?", "category": "Hai mai" },
{ "question": "Hai mai dato un bacio sotto la pioggia?", "category": "Hai mai" },
{ "question": "Hai mai incontrato qualcuno per caso che ti ha cambiato la giornata?", "category": "Hai mai" },
{ "question": "Hai mai giocato a un videogioco per ore senza fermarti?", "category": "Hai mai" },
{ "question": "Hai mai fatto un viaggio che ti ha fatto cambiare prospettiva sulla vita?", "category": "Hai mai" },
{ "question": "Hai mai incontrato un tuo vecchio compagno di scuola dopo tanti anni?", "category": "Hai mai" },
{ "question": "Hai mai fatto un dispetto a un amico senza volerlo?", "category": "Hai mai" },
{ "question": "Hai mai imparato qualcosa da una persona completamente diversa da te?", "category": "Hai mai" },
{ "question": "Hai mai provato a parlare una lingua straniera senza riuscirci?", "category": "Hai mai" },
{ "question": "Hai mai preso una decisione importante senza pensarci troppo?", "category": "Hai mai" },
{ "question": "Hai mai fatto una cosa che ti ha fatto sentire incredibilmente orgoglioso/a?", "category": "Hai mai" },
{ "question": "Hai mai fatto una lunga passeggiata senza sapere dove ti avrebbe portato?", "category": "Hai mai" },
{ "question": "Hai mai incontrato qualcuno che ti ha sorpreso con la sua gentilezza?", "category": "Hai mai" },
{ "question": "Hai mai fatto una maratona di film o serie TV per un'intera giornata?", "category": "Hai mai" },
{ "question": "Hai mai detto \"ti amo\" senza essere davvero pronto/a?", "category": "Hai mai" },
{ "question": "Hai mai fatto una figura pessima durante un appuntamento?", "category": "Hai mai" },
{ "question": "Hai mai detto una cosa che hai subito rimpianto?", "category": "Hai mai" },
{ "question": "Hai mai aiutato uno sconosciuto in una situazione imbarazzante?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa di completamente imprevisto durante un viaggio?", "category": "Hai mai" },
{ "question": "Hai mai cantato in pubblico, magari a un karaoke?", "category": "Hai mai" },
{ "question": "Hai mai avuto un animale domestico che ti ha insegnato qualcosa di importante?", "category": "Hai mai" },
{ "question": "Hai mai fatto una sorpresa romantica a qualcuno?", "category": "Hai mai" },
{ "question": "Hai mai cambiato idea su qualcuno dopo averlo conosciuto meglio?", "category": "Hai mai" },
{ "question": "Hai mai visto una cosa che ti ha fatto saltare il cuore in gola?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa di davvero generoso senza aspettarti nulla in cambio?", "category": "Hai mai" },
{ "question": "Hai mai avuto una conversazione che ti ha davvero ispirato/a?", "category": "Hai mai" },
{ "question": "Hai mai provato a fare un'escursione in un luogo che ti sembrava impossibile da raggiungere?", "category": "Hai mai" },
{ "question": "Hai mai cambiato il tuo guardaroba per adattarti a un nuovo stile?", "category": "Hai mai" },
{ "question": "Hai mai partecipato a un gioco da tavolo fino all'alba?", "category": "Hai mai" },
{ "question": "Hai mai fatto qualcosa di strano durante il sonno?", "category": "Hai mai" }
{ "question": "Quando è l'ultima volta che hai fatto qualcosa di spontaneo?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che ti sei sentito/a davvero felice senza motivo particolare?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai imparato qualcosa di completamente nuovo?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che ti sei sentito/a nervoso/a per qualcosa che poi si è rivelato facile?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai avuto una conversazione davvero interessante con un estraneo?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai fatto una sorpresa a qualcuno?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che ti sei messo/a in una situazione imbarazzante per divertimento?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai detto \"sì\" a qualcosa di cui non eri sicuro/a?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai avuto un litigio con qualcuno e poi ti sei scusato/a?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai riso così tanto da non riuscire a smettere?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai cambiato idea su qualcosa di importante?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai fatto una cosa che ti spaventava ma ti ha fatto crescere?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che ti sei sentito/a veramente stanco/a e hai preso un giorno per te stesso/a?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che ti sei sentito/a completamente a tuo agio in un posto nuovo?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai fatto una gentilezza a qualcuno senza aspettarti nulla in cambio?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai provato qualcosa di completamente fuori dalla tua zona di comfort?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai ricevuto un complimento che ti ha fatto davvero piacere?", "category": "Ultima volta" },
{ "question": "Quando è l'ultima volta che hai fatto una grande risata con i tuoi amici per una ragione assurda?", "category": "Ultima volta" }
{ "question": "Quale caratteristica fisica ti fa impazzire in un partner?", "category": "Sessualità" },
{ "question": "Hai mai avuto un’avventura di una notte?", "category": "Sessualità" },
{ "question": "Hai mai pensato a qualcun altro mentre eri con il tuo partner?", "category": "Sessualità" },
{ "question": "Qual è la tua fantasia sessuale?", "category": "Sessualità" },
{ "question": "Sei mai stato beccato mentre facevi sesso o ti masturbavi?", "category": "Sessualità" },
{ "question": "Qual è il tuo tipo di biancheria intima preferito?", "category": "Sessualità" },
{ "question": "Hai mai provato il gioco di ruolo in camera da letto?", "category": "Sessualità" },
{ "question": "Descrivi la tua stranezza che ti eccita di più.", "category": "Sessualità" },
{ "question": "Qual è il luogo più audace in cui hai fatto sesso?", "category": "Sessualità" },
{ "question": "Hai mai finto un orgasmo?", "category": "Sessualità" },
{ "question": "Descrivi il tuo bacio più memorabile.", "category": "Sessualità" },
{ "question": "Qual è il tuo sito web per adulti preferito?", "category": "Sessualità" },
{ "question": "Hai mai fantasticato sul partner di un conoscente?", "category": "Sessualità" },
{ "question": "Hai mai fatto sexting?", "category": "Sessualità" },
{ "question": "Hai mai avuto una cotta sul posto di lavoro?", "category": "Sessualità" },
{ "question": "Hai mai sorpreso qualcuno fare sesso o masturbarsi?", "category": "Sessualità" },
{ "question": "Qual è il tuo preliminare preferito?", "category": "Sessualità" },
{ "question": "Hai mai provato l’intimità tantrica?", "category": "Sessualità" },
{ "question": "Hai mai inviato una foto nuda a qualcuno?", "category": "Sessualità" },
{ "question": "Hai mai fatto sesso in un luogo pubblico?", "category": "Sessualità" },
{ "question": "Qual è stata la tua esperienza sessuale più imbarazzante?", "category": "Sessualità" },
{ "question": "Preferisci fare sesso quando fa molto caldo o molto freddo?", "category": "Sessualità" },
{ "question": "Qual è il tuo posto preferito per una sveltina?", "category": "Sessualità" },
{ "question": "Hai mai usato cibo a letto?", "category": "Sessualità" },
{ "question": "Qual è il tuo sex toy preferito?", "category": "Sessualità" },
{ "question": "Hai una perversione o fetish?", "category": "Sessualità" },
{ "question": "Hai mai fatto una cosa a tre?", "category": "Sessualità" },
{ "question": "Hai mai avuto una scopamicizia?", "category": "Sessualità" },
{ "question": "Cosa ne pensi delle relazioni aperte?", "category": "Sessualità" },
{ "question": "Hai mai legato o bendato il partner?", "category": "Sessualità" },
{ "question": "Hai mai fatto sesso con uno sconosciuto?", "category": "Sessualità" },
{ "question": "Hai mai fatto una videochat hot?", "category": "Sessualità" },
{ "question": "Qual è la cosa che ti dà più fastidio a letto?", "category": "Sessualità" },
{ "question": "Hai mai pensato di provare il BDSM?", "category": "Sessualità" },
{ "question": "Preferiresti fare una cosa a tre con due uomini o due donne?", "category": "Sessualità" },
{ "question": "Qual è la tua parte del corpo che preferisci?", "category": "Sessualità" },
{ "question": "Hai mai girato un video hot?", "category": "Sessualità" },
{ "question": "Hai mai fatto sesso anale?", "category": "Sessualità" },
{ "question": "Hai mai fatto sesso orale?", "category": "Sessualità" },
{ "question": "Hai mai avuto dubbi sulla tua sessualità?", "category": "Sessualità" },
{ "question": "Hai concretizzato qualche tua fantasia sessuale? Se si quale?", "category": "Sessualità" },
{ "question": "Ti si è mai rotto un preservativo?", "category": "Sessualità" },
{ "question": "Che voto daresti alle tue abilità a letto?", "category": "Sessualità" },
{ "question": "A che età hai fatto sesso la prima volta?", "category": "Sessualità" },
{ "question": "A che età hai dato il primo bacio?", "category": "Sessualità" },
{ "question": "Invieresti foto intime per soldi?", "category": "Sessualità" },
{ "question": "Sei mai uscito senza mutande?", "category": "Sessualità" },
{ "question": "Da quanto tempo non fai sesso?", "category": "Sessualità" },
{ "question": "Quando ti sei masturbato l'ultima volta?", "category": "Sessualità" },
{ "question": "Pensi che le dimensioni siano importanti?", "category": "Sessualità" },
{ "question": "Ti depili le parti intime?", "category": "Sessualità" },
{ "question": "Quanti cm è lungo il tuo pene?", "category": "Sessualità" },
{ "question": "Qual è il numero massimo di volte che hai fatto sesso in un giorno?", "category": "Sessualità" },
{ "question": "Preferisci dominare o essere dominato?", "category": "Sessualità" },
{ "question": "Ti sei mai registrato mentre facevi sesso?", "category": "Sessualità" },
{ "question": "Faresti sesso con uno sconosciuto per 1000€?", "category": "Sessualità" },
{ "question": "Qual è la tua posizione preferita?", "category": "Sessualità" },
{ "question": "Qual è la tua zona erogena più sensibile?", "category": "Sessualità" },
{ "question": "Hai mai assaggiato lo sperma?", "category": "Sessualità" },
{ "question": "Hai mai fatto sesso in un bosco o su un prato?", "category": "Sessualità" },
{ "question": "Cos'hai provato la prima volta che hai fatto sesso orale?", "category": "Sessualità" },
{ "question": "Cos'hai provato la prima volta che hai ricevuto sesso orale?", "category": "Sessualità" },
{ "question": "Preferisci fare sesso con un pene lungo o con un pene largo?", "category": "Sessualità" }
];

let currentQuestionIndex = 0;
let scores = { him: 0, her: 0 };
const goalScore = 10;  // Punteggio per vincere

// Funzione per mescolare le domande
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]]; // Scambia le domande
  }
}

// Avvia il gioco
function startGame() {
  const nameHim = document.getElementById('name-him').value || "Lui";
  const nameHer = document.getElementById('name-her').value || "Lei";

  // Aggiorna le etichette con i nomi personalizzati
  document.getElementById('label-him').innerText = nameHim;
  document.getElementById('label-her').innerText = nameHer;

  // Nasconde il form dei nomi e mostra il contenuto del gioco
  document.getElementById('name-input').style.display = "none";
  document.getElementById('game-content').style.display = "block";

  // Mescola le domande prima di iniziare il gioco
  shuffleQuestions();

  // Carica la prima domanda
  nextQuestion();
}

function updateScore(player, amount) {
  scores[player] += amount;
  document.getElementById(`score-${player}`).innerText = scores[player];
  checkForWinner(player);
}

function checkForWinner(player) {
  if (scores[player] >= goalScore) {
    document.getElementById('question-box').innerHTML = 
      `<h2 class="winner-message">${document.getElementById(`label-${player}`).innerText} vince!</h2>`;
    disableButtons();
  }
}


function disableButtons() {
  document.querySelectorAll('.score-btn').forEach(button => button.disabled = true);
  document.querySelector('button[onclick="nextQuestion()"]').disabled = true;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('category').innerText = `Categoria: ${questionData.category}`;
    document.getElementById('question').innerText = questionData.question;
    currentQuestionIndex++;
  } else {
    document.getElementById('question').innerText = "Gioco completato!";
    document.getElementById('category').innerText = "";
  }
}

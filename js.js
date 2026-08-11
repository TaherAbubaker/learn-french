// ── DATA ──
const vocab = [
  { fr: 'Bonjour', en: 'Hello / Good day', emoji: '👋', ex: 'Bonjour! Comment ça va?', cat: 'greetings' },
  { fr: 'Bonsoir', en: 'Good evening', emoji: '🌙', ex: 'Bonsoir madame!', cat: 'greetings' },
  { fr: 'Bonne nuit', en: 'Good night', emoji: '😴', ex: 'Bonne nuit, dors bien!', cat: 'greetings' },
  { fr: 'Salut', en: 'Hi / Bye (casual)', emoji: '✌️', ex: 'Salut, comment tu vas?', cat: 'greetings' },
  { fr: 'Au revoir', en: 'Goodbye', emoji: '👋', ex: 'Au revoir, à bientôt!', cat: 'greetings' },
  { fr: 'À bientôt', en: 'See you soon', emoji: '🤞', ex: 'À bientôt!', cat: 'greetings' },
  { fr: 'Enchanté(e)', en: 'Nice to meet you', emoji: '🤝', ex: 'Enchanté de faire votre connaissance.', cat: 'greetings' },
  { fr: 'Comment ça va?', en: 'How are you?', emoji: '😊', ex: 'Comment ça va? Bien merci!', cat: 'greetings' },
  { fr: 'Ça va bien', en: "I'm doing well", emoji: '😄', ex: 'Ça va bien, merci!', cat: 'greetings' },
  { fr: 'Comme ci comme ça', en: 'So-so', emoji: '🤷', ex: 'Comme ci comme ça, pas terrible.', cat: 'greetings' },
  { fr: 'Un / Une', en: 'One', emoji: '1️⃣', ex: "J'ai un chat.", cat: 'numbers' },
  { fr: 'Deux', en: 'Two', emoji: '2️⃣', ex: 'Il y a deux livres.', cat: 'numbers' },
  { fr: 'Trois', en: 'Three', emoji: '3️⃣', ex: 'Trois amis.', cat: 'numbers' },
  { fr: 'Quatre', en: 'Four', emoji: '4️⃣', ex: 'Quatre jours.', cat: 'numbers' },
  { fr: 'Cinq', en: 'Five', emoji: '5️⃣', ex: 'Cinq élèves.', cat: 'numbers' },
  { fr: 'Dix', en: 'Ten', emoji: '🔟', ex: "J'ai dix ans.", cat: 'numbers' },
  { fr: 'Vingt', en: 'Twenty', emoji: '🔢', ex: 'Vingt euros.', cat: 'numbers' },
  { fr: 'Cent', en: 'One hundred', emoji: '💯', ex: 'Cent points!', cat: 'numbers' },
  { fr: 'Être', en: 'To be', emoji: '💫', ex: "Je suis étudiant(e).", cat: 'verbs' },
  { fr: 'Avoir', en: 'To have', emoji: '🤲', ex: "J'ai un stylo.", cat: 'verbs' },
  { fr: 'Parler', en: 'To speak', emoji: '🗣️', ex: 'Je parle français.', cat: 'verbs' },
  { fr: "S'appeler", en: 'To be called / named', emoji: '🏷️', ex: "Je m'appelle Marie.", cat: 'verbs' },
  { fr: 'Habiter', en: 'To live (somewhere)', emoji: '🏠', ex: "J'habite à Paris.", cat: 'verbs' },
  { fr: 'Aimer', en: 'To like / love', emoji: '❤️', ex: "J'aime le français.", cat: 'verbs' },
  { fr: 'Aller', en: 'To go', emoji: '🚶', ex: "Je vais à l'école.", cat: 'verbs' },
  { fr: 'Vouloir', en: 'To want', emoji: '🙏', ex: 'Je veux étudier.', cat: 'verbs' },
  { fr: 'Pouvoir', en: 'To be able to / can', emoji: '💪', ex: 'Je peux parler français.', cat: 'verbs' },
  { fr: 'Faire', en: 'To do / make', emoji: '🛠️', ex: 'Je fais mes devoirs.', cat: 'verbs' },
  { fr: 'Lundi', en: 'Monday', emoji: '😑', ex: 'Le cours est lundi.', cat: 'time' },
  { fr: 'Mardi', en: 'Tuesday', emoji: '📅', ex: 'Mardi matin.', cat: 'time' },
  { fr: 'Mercredi', en: 'Wednesday', emoji: '📅', ex: 'Mercredi après-midi.', cat: 'time' },
  { fr: 'Jeudi', en: 'Thursday', emoji: '📅', ex: 'Jeudi soir.', cat: 'time' },
  { fr: 'Vendredi', en: 'Friday', emoji: '🎉', ex: 'Vendredi! Enfin!', cat: 'time' },
  { fr: 'Samedi', en: 'Saturday', emoji: '😊', ex: 'Samedi et dimanche.', cat: 'time' },
  { fr: 'Dimanche', en: 'Sunday', emoji: '☀️', ex: 'Le dimanche je me repose.', cat: 'time' },
  { fr: "Aujourd'hui", en: 'Today', emoji: '📆', ex: "Aujourd'hui c'est lundi.", cat: 'time' },
  { fr: 'Demain', en: 'Tomorrow', emoji: '➡️', ex: 'À demain!', cat: 'time' },
  { fr: 'Hier', en: 'Yesterday', emoji: '⬅️', ex: "Hier j'ai étudié.", cat: 'time' },
  { fr: "Je / J'", en: 'I', emoji: '👤', ex: 'Je parle français.', cat: 'pronouns' },
  { fr: 'Tu', en: 'You (informal)', emoji: '👥', ex: 'Tu es sympa.', cat: 'pronouns' },
  { fr: 'Il / Elle', en: 'He / She', emoji: '👤', ex: 'Il est étudiant.', cat: 'pronouns' },
  { fr: 'Nous', en: 'We', emoji: '👨‍👩‍👧', ex: 'Nous aimons la France.', cat: 'pronouns' },
  { fr: 'Vous', en: 'You (formal/plural)', emoji: '👔', ex: 'Vous parlez bien.', cat: 'pronouns' },
  { fr: 'Ils / Elles', en: 'They (m/f)', emoji: '👥', ex: 'Ils sont français.', cat: 'pronouns' },
  { fr: 'Le / La / Les', en: 'The (m/f/plural)', emoji: '📌', ex: 'Le livre, la table, les élèves.', cat: 'pronouns' },
  { fr: 'Un / Une / Des', en: 'A / Some', emoji: '➕', ex: 'Un homme, une femme, des enfants.', cat: 'pronouns' },
  { fr: "S'il vous plaît", en: 'Please (formal)', emoji: '🙏', ex: "S'il vous plaît, répétez.", cat: 'phrases' },
  { fr: 'Merci', en: 'Thank you', emoji: '😊', ex: 'Merci beaucoup!', cat: 'phrases' },
  { fr: 'De rien', en: "You're welcome", emoji: '🤗', ex: 'Merci! De rien!', cat: 'phrases' },
  { fr: 'Excusez-moi', en: 'Excuse me (formal)', emoji: '🙋', ex: 'Excusez-moi, où est la gare?', cat: 'phrases' },
  { fr: 'Je ne comprends pas', en: "I don't understand", emoji: '😕', ex: 'Désolé, je ne comprends pas.', cat: 'phrases' },
  { fr: 'Pouvez-vous répéter?', en: 'Can you repeat?', emoji: '🔁', ex: "Pouvez-vous répéter, s'il vous plaît?", cat: 'phrases' },
  { fr: 'Où est...?', en: 'Where is...?', emoji: '📍', ex: 'Où est la bibliothèque?', cat: 'phrases' },
  { fr: 'Quel âge avez-vous?', en: 'How old are you?', emoji: '🎂', ex: "Quel âge avez-vous? J'ai 20 ans.", cat: 'phrases' },
  { fr: "D'où venez-vous?", en: 'Where are you from?', emoji: '🌍', ex: 'Je viens de Palestine.', cat: 'phrases' },
  { fr: "Je m'appelle...", en: 'My name is...', emoji: '🏷️', ex: "Je m'appelle Marie.", cat: 'phrases' },
  // ── FREN 103 additions ──
  { fr: 'Grand(e)', en: 'Big / Tall', emoji: '📏', ex: 'Il est grand.', cat: 'adjectives' },
  { fr: 'Petit(e)', en: 'Small / Short', emoji: '🤏', ex: 'Elle est petite.', cat: 'adjectives' },
  { fr: 'Beau / Belle', en: 'Beautiful / Handsome', emoji: '😍', ex: 'Tu es belle.', cat: 'adjectives' },
  { fr: 'Joli(e)', en: 'Pretty', emoji: '🌸', ex: 'Une jolie fleur.', cat: 'adjectives' },
  { fr: 'Content(e)', en: 'Happy', emoji: '😊', ex: 'Je suis content(e).', cat: 'adjectives' },
  { fr: 'Triste', en: 'Sad', emoji: '😢', ex: 'Il est triste.', cat: 'adjectives' },
  { fr: 'Fatigué(e)', en: 'Tired', emoji: '😴', ex: 'Je suis fatigué(e).', cat: 'adjectives' },
  { fr: 'Intelligent(e)', en: 'Smart', emoji: '🧠', ex: 'Elle est intelligente.', cat: 'adjectives' },
  { fr: 'Gentil(le)', en: 'Kind / Nice', emoji: '🤗', ex: 'Il est gentil.', cat: 'adjectives' },
  { fr: 'Difficile', en: 'Difficult', emoji: '😩', ex: "L'examen est difficile.", cat: 'adjectives' },
  { fr: 'Facile', en: 'Easy', emoji: '✅', ex: 'Ce cours est facile.', cat: 'adjectives' },
  { fr: 'Nouveau / Nouvelle', en: 'New', emoji: '✨', ex: 'Un nouveau livre.', cat: 'adjectives' },
  { fr: 'Vieux / Vieille', en: 'Old', emoji: '👴', ex: 'Une vieille maison.', cat: 'adjectives' },
  { fr: 'Rapide', en: 'Fast', emoji: '⚡', ex: 'Une voiture rapide.', cat: 'adjectives' },
  { fr: 'Lent(e)', en: 'Slow', emoji: '🐢', ex: 'Un train lent.', cat: 'adjectives' },

  { fr: 'La famille', en: 'The family', emoji: '👨‍👩‍👧‍👦', ex: 'J\'aime ma famille.', cat: 'family' },
  { fr: 'La mère', en: 'Mother', emoji: '👩', ex: 'Ma mère est gentille.', cat: 'family' },
  { fr: 'Le père', en: 'Father', emoji: '👨', ex: 'Mon père travaille.', cat: 'family' },
  { fr: 'La sœur', en: 'Sister', emoji: '👧', ex: "J'ai une sœur.", cat: 'family' },
  { fr: 'Le frère', en: 'Brother', emoji: '👦', ex: 'Mon frère étudie.', cat: 'family' },
  { fr: 'Les parents', en: 'Parents', emoji: '👪', ex: 'Mes parents habitent ici.', cat: 'family' },
  { fr: 'Le fils', en: 'Son', emoji: '👦', ex: 'Leur fils est étudiant.', cat: 'family' },
  { fr: 'La fille', en: 'Daughter / Girl', emoji: '👧', ex: 'Leur fille est intelligente.', cat: 'family' },
  { fr: 'Les grands-parents', en: 'Grandparents', emoji: '👴👵', ex: 'Mes grands-parents sont âgés.', cat: 'family' },
  { fr: "L'ami / L'amie", en: 'Friend', emoji: '🧑‍🤝‍🧑', ex: "C'est mon ami.", cat: 'family' },

  { fr: 'Le pain', en: 'Bread', emoji: '🥖', ex: "J'achète du pain.", cat: 'food' },
  { fr: 'Le fromage', en: 'Cheese', emoji: '🧀', ex: "J'aime le fromage.", cat: 'food' },
  { fr: "L'eau", en: 'Water', emoji: '💧', ex: "Je bois de l'eau.", cat: 'food' },
  { fr: 'Le café', en: 'Coffee', emoji: '☕', ex: 'Un café, s\'il vous plaît.', cat: 'food' },
  { fr: 'Le thé', en: 'Tea', emoji: '🍵', ex: 'Je prends du thé.', cat: 'food' },
  { fr: 'La pomme', en: 'Apple', emoji: '🍎', ex: 'Une pomme rouge.', cat: 'food' },
  { fr: 'Le poulet', en: 'Chicken', emoji: '🍗', ex: 'Je mange du poulet.', cat: 'food' },
  { fr: 'La soupe', en: 'Soup', emoji: '🍲', ex: 'La soupe est chaude.', cat: 'food' },
  { fr: 'Le petit-déjeuner', en: 'Breakfast', emoji: '🍳', ex: 'Je prends mon petit-déjeuner.', cat: 'food' },
  { fr: 'Le déjeuner', en: 'Lunch', emoji: '🥗', ex: 'Le déjeuner est à midi.', cat: 'food' },
  { fr: 'Le dîner', en: 'Dinner', emoji: '🍽️', ex: 'Le dîner est prêt.', cat: 'food' },
  { fr: "J'ai faim", en: "I'm hungry", emoji: '🍽️', ex: "J'ai faim, allons manger.", cat: 'food' },
  { fr: "J'ai soif", en: "I'm thirsty", emoji: '🥤', ex: "J'ai soif, je veux de l'eau.", cat: 'food' },

  { fr: 'Rouge', en: 'Red', emoji: '🔴', ex: 'Une pomme rouge.', cat: 'colors' },
  { fr: 'Bleu(e)', en: 'Blue', emoji: '🔵', ex: 'Le ciel est bleu.', cat: 'colors' },
  { fr: 'Vert(e)', en: 'Green', emoji: '🟢', ex: 'L\'herbe est verte.', cat: 'colors' },
  { fr: 'Jaune', en: 'Yellow', emoji: '🟡', ex: 'Le soleil est jaune.', cat: 'colors' },
  { fr: 'Noir(e)', en: 'Black', emoji: '⚫', ex: 'Un chat noir.', cat: 'colors' },
  { fr: 'Blanc(he)', en: 'White', emoji: '⚪', ex: 'La neige est blanche.', cat: 'colors' },
  { fr: 'Violet(te)', en: 'Purple', emoji: '🟣', ex: 'Une fleur violette.', cat: 'colors' },
  { fr: 'Orange', en: 'Orange', emoji: '🟠', ex: 'Une orange orange 😅', cat: 'colors' },
  { fr: 'Rose', en: 'Pink', emoji: '💗', ex: 'Une robe rose.', cat: 'colors' },
  { fr: 'Marron', en: 'Brown', emoji: '🟤', ex: 'Des yeux marron.', cat: 'colors' },

  { fr: 'Il fait beau', en: "It's nice out", emoji: '☀️', ex: "Aujourd'hui il fait beau.", cat: 'weather' },
  { fr: 'Il pleut', en: "It's raining", emoji: '🌧️', ex: 'Il pleut ce matin.', cat: 'weather' },
  { fr: 'Il neige', en: "It's snowing", emoji: '❄️', ex: "Il neige en hiver.", cat: 'weather' },
  { fr: 'Il fait chaud', en: "It's hot", emoji: '🔥', ex: 'En été il fait chaud.', cat: 'weather' },
  { fr: 'Il fait froid', en: "It's cold", emoji: '🥶', ex: 'En hiver il fait froid.', cat: 'weather' },
  { fr: 'Le soleil', en: 'The sun', emoji: '☀️', ex: 'Le soleil brille.', cat: 'weather' },
  { fr: 'La pluie', en: 'The rain', emoji: '🌧️', ex: "J'aime la pluie.", cat: 'weather' },
  { fr: 'Le vent', en: 'The wind', emoji: '💨', ex: 'Il y a du vent.', cat: 'weather' },

  { fr: 'Le stylo', en: 'The pen', emoji: '🖊️', ex: "J'ai un stylo.", cat: 'classroom' },
  { fr: 'Le cahier', en: 'The notebook', emoji: '📓', ex: 'Mon cahier est plein.', cat: 'classroom' },
  { fr: 'Le livre', en: 'The book', emoji: '📖', ex: 'Je lis un livre.', cat: 'classroom' },
  { fr: 'La salle de classe', en: 'The classroom', emoji: '🏫', ex: 'La salle de classe est grande.', cat: 'classroom' },
  { fr: "Le professeur / la prof", en: 'The teacher', emoji: '🧑‍🏫', ex: 'Le professeur explique.', cat: 'classroom' },
  { fr: "L'élève / l'étudiant(e)", en: 'The student', emoji: '🎓', ex: "L'étudiant écoute.", cat: 'classroom' },
  { fr: 'Le devoir', en: 'The homework', emoji: '📝', ex: "Je fais mes devoirs.", cat: 'classroom' },
  { fr: "L'examen", en: 'The exam', emoji: '📄', ex: "L'examen est demain.", cat: 'classroom' },
  { fr: 'La question', en: 'The question', emoji: '❓', ex: "J'ai une question.", cat: 'classroom' },
  { fr: 'La réponse', en: 'The answer', emoji: '💬', ex: 'Voici la réponse.', cat: 'classroom' },

  { fr: 'Qui?', en: 'Who?', emoji: '❓', ex: 'Qui est là?', cat: 'questions' },
  { fr: 'Quoi?', en: 'What?', emoji: '❓', ex: "Tu veux quoi?", cat: 'questions' },
  { fr: 'Quand?', en: 'When?', emoji: '⏰', ex: "Quand arrives-tu?", cat: 'questions' },
  { fr: 'Pourquoi?', en: 'Why?', emoji: '🤔', ex: 'Pourquoi tu ris?', cat: 'questions' },
  { fr: 'Comment?', en: 'How?', emoji: '❓', ex: 'Comment ça marche?', cat: 'questions' },
  { fr: 'Combien?', en: 'How much/many?', emoji: '🔢', ex: 'Combien ça coûte?', cat: 'questions' },
  { fr: 'Quel / Quelle?', en: 'Which?', emoji: '❓', ex: 'Quelle heure est-il?', cat: 'questions' },

  { fr: 'Comprendre', en: 'To understand', emoji: '💡', ex: 'Je comprends bien.', cat: 'verbs' },
  { fr: 'Écouter', en: 'To listen', emoji: '👂', ex: "J'écoute de la musique.", cat: 'verbs' },
  { fr: 'Regarder', en: 'To watch / look at', emoji: '👀', ex: 'Je regarde un film.', cat: 'verbs' },
  { fr: 'Manger', en: 'To eat', emoji: '🍽️', ex: 'Je mange une pomme.', cat: 'verbs' },
  { fr: 'Boire', en: 'To drink', emoji: '🥤', ex: 'Je bois de l\'eau.', cat: 'verbs' },
  { fr: 'Dormir', en: 'To sleep', emoji: '😴', ex: 'Je dors bien.', cat: 'verbs' },
  { fr: 'Travailler', en: 'To work', emoji: '💼', ex: 'Je travaille dur.', cat: 'verbs' },
  { fr: 'Étudier', en: 'To study', emoji: '📚', ex: "J'étudie le français.", cat: 'verbs' },
  { fr: 'Écrire', en: 'To write', emoji: '✍️', ex: "J'écris une lettre.", cat: 'verbs' },
  { fr: 'Lire', en: 'To read', emoji: '📖', ex: 'Je lis un livre.', cat: 'verbs' },
];


// frog cosmetics per level
const frogCosmetics = [
  { emoji: '🐸', label: 'plain frog', desc: 'humble beginnings.' },
  { emoji: '🐸', hat: '🧣', label: 'scarf frog', desc: 'staying warm while studying 🧣' },
  { emoji: '🐸', hat: '👓', label: 'glasses frog', desc: 'intellectual era 👓' },
  { emoji: '🐸', hat: '🎩', label: 'fancy frog', desc: 'très chic 🎩' },
  { emoji: '🐸', hat: '🪖', label: 'warrior frog', desc: 'in study battle mode 🪖' },
  { emoji: '🐸', hat: '👑', label: 'crown frog', desc: 'royalty. obviously.' },
  { emoji: '🐸', hat: '🎓', label: 'graduation frog', desc: 'french degree loading... 🎓' },
  { emoji: '🐸', hat: '🌟', label: 'star frog', desc: 'literally glowing 🌟' },
  { emoji: '🐸', hat: '🏆', label: 'champion frog', desc: 'CHAMPION 🏆' },
  { emoji: '🐸', hat: '🎖️', label: 'legend frog', desc: 'LEGEND STATUS UNLOCKED 🎖️' },
];

// unlockMessages / BABY_PIC removed — this was a personal feature for a gift edition of
// this app. If you want to re-enable the "messages" tab, define an `unlockMessages` array
// here (see git history / earlier version for the format) and un-comment the messages
// section in index.html and the renderMessages() references below.
const unlockMessages = [];

// ── STATE ──
let xp = 0;
let unlockedMessages = []; // stays local-only, not synced — fine as-is
const xpPerLevel = 100;

function getLevel() { return Math.floor(xp / xpPerLevel) + 1; }
function getLevelProgress() { return (xp % xpPerLevel) / xpPerLevel * 100; }

function saveState() {
  localStorage.setItem('fsh_xp', xp);
  localStorage.setItem('fsh_unlocked', JSON.stringify(unlockedMessages));
}

function updatePetUI() {
  const level = getLevel();
  const cosIdx = Math.min(level - 1, frogCosmetics.length - 1);
  const cos = frogCosmetics[cosIdx];
  const frogEl = document.getElementById('frog');
  frogEl.textContent = cos.hat ? cos.emoji + cos.hat : cos.emoji;
  document.getElementById('xp-bar').style.width = getLevelProgress() + '%';
  document.getElementById('xp-label').textContent = 'LV ' + level + ' — ' + (xp % xpPerLevel) + ' XP';
}

// ── SECTIONS ──
function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (id === 'flashcards') renderCategories();
  if (id === 'quiz') initQuiz();
  if (id === 'room') initRoom();
  if (id === 'notes') initNotesApp();
  if (id === 'messages') renderMessages();
}

(async () => {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    document.getElementById('auth-gate').style.display = 'none';
    await loadUserXP();
  }
})();

// ── AUTHENTICATION ──
function switchAuthBox(id) {
  if (id === "login") {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
  if (id === "register") {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
  }
}

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const authError = document.getElementById("auth-error");
  authError.textContent = "";

  if (email === "" || password === "") {
    authError.textContent = "Please fill in both fields.";
    return;
  }

  if (password.length < 6) {
    authError.textContent = "Password must be at least 6 characters.";
    return;
  }

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    authError.textContent = error.message;
  } else {
    document.getElementById('auth-gate').style.display = 'none';
    await loadUserXP();
  }

});

document.getElementById("register-btn").addEventListener("click", async () => {
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const name = document.getElementById("register-name").value.trim();

  const authError = document.getElementById("auth-error");
  authError.textContent = "";

  if (email === "" || password === "" || name === "") {
    authError.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 6) {
    authError.textContent = "Password must be at least 6 characters.";
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    authError.textContent = error.message;
    return;
  }

  const { error: profileError } = await supabaseClient
    .from("profiles")
    .update({ username: name })
    .eq("id", data.user.id);

  if (profileError) {
    authError.textContent = profileError.message;
    return;
  }

  if (data.session) {
    document.getElementById('auth-gate').style.display = 'none';
  } else {
    authError.style.color = "green";
    authError.textContent = "Account created! Check your email to confirm before logging in.";
  }

});

document.getElementById("logout-btn").addEventListener("click" , async ()=>{
  const {error} = await supabaseClient.auth.signOut();
  if(error){
    console.log(error)
  }else{
    document.getElementById("auth-gate").style.display = "flix";
    window.location.reload();

  }
});

// ── XP + REWARDS ──

async function loadUserXP() {
  const { data: { user } } = await supabaseClient.auth.getUser();

  const { data, error } = await supabaseClient
    .from("user_xp")
    .select("xp")
    .eq("user_id", user.id)
    .maybeSingle(); // returns null instead of throwing if no row exists yet

  if (error) {
    console.log("Error loading XP:", error);
    return;
  }

  xp = data ? data.xp : 0;
  updatePetUI();
}

async function saveState() {
  const { data: { user } } = await supabaseClient.auth.getUser();

  const { error } = await supabaseClient
    .from("user_xp")
    .update({ xp: xp })
    .eq("user_id", user.id);

  if (error) console.log("Error saving XP:", error);
}

function gainXP(amount) {
  const prevLevel = getLevel();
  xp += amount;
  const newLevel = getLevel();
  saveState();
  updatePetUI();

  const toast = document.getElementById('xp-toast');
  toast.textContent = '+' + amount + ' XP!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);

  const frog = document.getElementById('frog');
  frog.classList.add('pet-happy');
  setTimeout(() => frog.classList.remove('pet-happy'), 500);

  if (newLevel > prevLevel) {
    setTimeout(() => showLevelUp(newLevel), 400);
  }
}

function showLevelUp(level) {
  const cos = frogCosmetics[Math.min(level - 1, frogCosmetics.length - 1)];
  const msg = unlockMessages.find(m => m.level === level);
  const hasNewMsg = msg && !unlockedMessages.includes(level);

  if (!unlockedMessages.includes(level) && msg) {
    unlockedMessages.push(level);
    saveState();
  }

  const cosDisplay = cos.hat ? cos.emoji + cos.hat : cos.emoji;
  document.getElementById('reward-frog-display').textContent = cosDisplay;
  document.getElementById('reward-title').textContent = '🎉 level ' + level + '!';
  document.getElementById('reward-cos-label').textContent = cos.label + ' — ' + cos.desc;
  document.getElementById('reward-msg-preview').textContent = hasNewMsg
    ? '💌 new message unlocked! check the messages tab.'
    : 'keep going! 🐸';
  document.getElementById('reward-modal').classList.add('show');
}

function closeReward() {
  document.getElementById('reward-modal').classList.remove('show');
}

// ── PET BUBBLE ──
const petPhrases = [
  "you're doing great 💪",
  "keep studying, we believe in you!",
];
let petIdx = 0;
function togglePetBubble() {
  const b = document.getElementById('pet-bubble');
  b.textContent = petPhrases[petIdx % petPhrases.length];
  b.classList.toggle('show');
  petIdx++;
}
setTimeout(() => {
  const b = document.getElementById('pet-bubble');
  b.textContent = petPhrases[0];
  b.classList.add('show');
  setTimeout(() => b.classList.remove('show'), 4000);
}, 3000);

// ── FLASHCARDS ──
const cats = ['all', 'greetings', 'numbers', 'verbs', 'time', 'pronouns', 'phrases', 'adjectives', 'family', 'food', 'colors', 'weather', 'classroom', 'questions'];
let currentCat = 'all';
let filteredCards = [...vocab];
let cardIndex = 0;

function renderCategories() {
  const wrap = document.getElementById('cat-btns');
  wrap.innerHTML = cats.map(c =>
    '<button class="cat-btn ' + (c === currentCat ? 'active' : '') + '" onclick="setCategory(\'' + c + '\')">' + c + '</button>'
  ).join('');
}
function setCategory(cat) {
  currentCat = cat;
  filteredCards = cat === 'all' ? [...vocab] : vocab.filter(v => v.cat === cat);
  cardIndex = 0;
  document.getElementById('flashcard').classList.remove('flipped');
  renderCategories();
  renderCard();
}
function renderCard() {
  const card = filteredCards[cardIndex];
  document.getElementById('fc-emoji').textContent = card.emoji;
  document.getElementById('fc-emoji-back').textContent = card.emoji;
  document.getElementById('fc-word').textContent = card.fr;
  document.getElementById('fc-translation').textContent = card.en;
  document.getElementById('fc-example').textContent = card.ex;
  document.getElementById('fc-progress').textContent = 'card ' + (cardIndex + 1) + ' of ' + filteredCards.length;
  document.getElementById('flashcard').classList.remove('flipped');
}
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
function rateCard(correct) {
  if (correct) gainXP(10);
  cardIndex = (cardIndex + 1) % filteredCards.length;
  setTimeout(renderCard, 200);
}
renderCard();

// ── SMART NOTES ──
// ── NOTES APP (multi-note, autosave, smart translations) ──
let notesData = JSON.parse(localStorage.getItem('fsh_notes') || '[]');
let currentNoteId = null;
let noteSaveTimeout = null;

function uid() { return 'n' + Date.now() + Math.random().toString(36).slice(2, 7); }
function saveNotesData() { localStorage.setItem('fsh_notes', JSON.stringify(notesData)); }

function createNewNote() {
  const note = { id: uid(), title: '', content: '', updated: Date.now() };
  notesData.unshift(note);
  saveNotesData();
  currentNoteId = note.id;
  renderNotesList();
  loadNoteIntoEditor(note);
  document.getElementById('note-title').focus();
}

function renderNotesList(filter) {
  const wrap = document.getElementById('notes-list');
  if (!wrap) return;
  let list = [...notesData].sort((a, b) => b.updated - a.updated);
  if (filter && filter.trim()) {
    const q = filter.toLowerCase();
    list = list.filter(n => (n.title + ' ' + n.content).toLowerCase().includes(q));
  }
  if (!list.length) {
    wrap.innerHTML = '<div class="notes-empty">no notes yet 🐸<br>tap "+ new note" to start!</div>';
    return;
  }
  wrap.innerHTML = list.map(n => {
    const title = n.title.trim() || 'untitled note';
    const preview = n.content.trim().slice(0, 40) || 'empty note...';
    const date = new Date(n.updated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return '<div class="note-item ' + (n.id === currentNoteId ? 'active' : '') + '" onclick="selectNote(\'' + n.id + '\')">' +
      '<div class="note-item-title">' + escapeHtml(title) + '</div>' +
      '<div class="note-item-preview">' + escapeHtml(preview) + '</div>' +
      '<div class="note-item-date">' + date + '</div>' +
      '</div>';
  }).join('');
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function selectNote(id) {
  const note = notesData.find(n => n.id === id);
  if (!note) return;
  currentNoteId = id;
  loadNoteIntoEditor(note);
  renderNotesList(document.getElementById('notes-search').value);
}

function loadNoteIntoEditor(note) {
  document.getElementById('note-title').value = note.title;
  document.getElementById('notes-area').value = note.content;
  updateNoteMeta(note);
  detectWords(note.content);
}

function updateNoteMeta(note) {
  const words = note.content.trim().split(/\s+/).filter(Boolean).length;
  const meta = document.getElementById('note-meta');
  const timeAgo = note.updated ? 'saved ' + timeAgoLabel(note.updated) : '';
  meta.textContent = words + ' word' + (words === 1 ? '' : 's') + (timeAgo ? ' · ' + timeAgo : '');
}

function timeAgoLabel(ts) {
  const diff = Date.now() - ts;
  if (diff < 10000) return 'just now';
  if (diff < 60000) return Math.floor(diff / 1000) + 's ago';
  if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function onNoteEdit() {
  if (!currentNoteId) createNewNote();
  const note = notesData.find(n => n.id === currentNoteId);
  if (!note) return;
  note.title = document.getElementById('note-title').value;
  note.content = document.getElementById('notes-area').value;
  note.updated = Date.now();
  updateNoteMeta(note);
  detectWords(note.content);

  clearTimeout(noteSaveTimeout);
  noteSaveTimeout = setTimeout(() => {
    saveNotesData();
    renderNotesList(document.getElementById('notes-search').value);
  }, 500);
}

function deleteCurrentNote() {
  if (!currentNoteId) return;
  if (!confirm('delete this note? 🐸')) return;
  notesData = notesData.filter(n => n.id !== currentNoteId);
  saveNotesData();
  currentNoteId = null;
  document.getElementById('note-title').value = '';
  document.getElementById('notes-area').value = '';
  document.getElementById('word-pills').innerHTML = '';
  document.getElementById('note-meta').textContent = '0 words';
  renderNotesList(document.getElementById('notes-search').value);
  if (notesData.length) selectNote([...notesData].sort((a, b) => b.updated - a.updated)[0].id);
}

const noteTranslations = {};
vocab.forEach(v => {
  noteTranslations[v.fr.toLowerCase()] = v.en;
  noteTranslations[v.en.toLowerCase()] = v.fr;
});

function detectWords(text) {
  const words = text.split(/[\s,\.!?;:]+/).filter(w => w.length > 2);
  const found = {};
  words.forEach(w => {
    const key = w.toLowerCase().replace(/['']/g, "'");
    if (noteTranslations[key]) found[w] = noteTranslations[key];
  });
  const wrap = document.getElementById('word-pills');
  if (!Object.keys(found).length) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = Object.entries(found).map(([w, t]) =>
    '<div class="word-pill">' + escapeHtml(w) + '<div class="pill-tooltip">→ ' + escapeHtml(t) + '</div></div>'
  ).join('');
}

function initNotesApp() {
  renderNotesList();
  if (notesData.length) {
    selectNote([...notesData].sort((a, b) => b.updated - a.updated)[0].id);
  } else {
    createNewNote();
  }
}

// ── DICTIONARY ──
function searchDict(q) {
  const res = document.getElementById('dict-results');
  if (!q.trim()) {
    res.innerHTML = '<p style="font-size:0.85rem;color:var(--muted);text-align:center;padding:2rem 0">type a word to search 🐸</p>';
    return;
  }
  const matches = vocab.filter(v =>
    v.fr.toLowerCase().includes(q.toLowerCase()) ||
    v.en.toLowerCase().includes(q.toLowerCase())
  );
  if (!matches.length) {
    res.innerHTML = '<p style="font-size:0.85rem;color:var(--muted);text-align:center;padding:2rem 0">no results try another word 🐸</p>';
    return;
  }
  res.innerHTML = matches.map(m =>
    '<div class="dict-card">' +
    '<div class="dict-fr">' + m.fr + '</div>' +
    '<div class="dict-en">→ ' + m.en + ' ' + m.emoji + '</div>' +
    '<div class="dict-ex">"' + m.ex + '"</div>' +
    '<button class="dict-speak" onclick="speak(\'' + m.fr.replace(/'/g, "\'") + '\')">🔊 pronounce</button>' +
    '</div>'
  ).join('');
}
function speak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR'; u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
}

// ── QUIZ ──
let quizScore = 0, quizTotal = 0, quizAnswered = false;
function initQuiz() {
  quizScore = 0; quizTotal = 0;
  document.getElementById('quiz-score').textContent = 'score: 0 / 0';
  nextQuiz();
}
const conjugations = [
  { verb: 'être', pronoun: 'je', form: 'suis' },
  { verb: 'être', pronoun: 'tu', form: 'es' },
  { verb: 'être', pronoun: 'il/elle', form: 'est' },
  { verb: 'être', pronoun: 'nous', form: 'sommes' },
  { verb: 'être', pronoun: 'vous', form: 'êtes' },
  { verb: 'être', pronoun: 'ils/elles', form: 'sont' },
  { verb: 'avoir', pronoun: "j'", form: 'ai' },
  { verb: 'avoir', pronoun: 'tu', form: 'as' },
  { verb: 'avoir', pronoun: 'il/elle', form: 'a' },
  { verb: 'avoir', pronoun: 'nous', form: 'avons' },
  { verb: 'avoir', pronoun: 'vous', form: 'avez' },
  { verb: 'avoir', pronoun: 'ils/elles', form: 'ont' },
];

function nextQuiz() {
  quizAnswered = false;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('quiz-next').style.display = 'none';

  const mode = Math.random() < 0.75 ? 'translate' : 'conjugate';

  if (mode === 'conjugate') {
    const c = conjugations[Math.floor(Math.random() * conjugations.length)];
    document.getElementById('quiz-type').textContent = 'conjugate ' + c.verb;
    document.getElementById('quiz-q').textContent = c.pronoun + ' ___ (' + c.verb + ')';
    const opts = [c.form];
    const pool = conjugations.filter(x => x.verb === c.verb && x.form !== c.form).map(x => x.form);
    while (opts.length < 4 && pool.length) {
      const idx = Math.floor(Math.random() * pool.length);
      const val = pool.splice(idx, 1)[0];
      if (!opts.includes(val)) opts.push(val);
    }
    // fallback filler if not enough options
    const fillers = ['parle', 'vais', 'fais', 'peux'];
    while (opts.length < 4) {
      const f = fillers[Math.floor(Math.random() * fillers.length)];
      if (!opts.includes(f)) opts.push(f);
    }
    opts.sort(() => Math.random() - 0.5);
    document.getElementById('quiz-opts').innerHTML = opts.map(o =>
      '<button class="quiz-opt" onclick="checkAnswer(this,' + (o === c.form) + ',\'' + c.form + '\')">' + o + '</button>'
    ).join('');
  } else {
    const correct = vocab[Math.floor(Math.random() * vocab.length)];
    const toEn = Math.random() > 0.5;
    document.getElementById('quiz-type').textContent = toEn ? 'translate to english' : 'translate to french';
    document.getElementById('quiz-q').textContent = toEn ? correct.fr : correct.en;
    const opts = [correct];
    while (opts.length < 4) {
      const r = vocab[Math.floor(Math.random() * vocab.length)];
      if (!opts.find(o => o.fr === r.fr)) opts.push(r);
    }
    opts.sort(() => Math.random() - 0.5);
    document.getElementById('quiz-opts').innerHTML = opts.map(o => {
      const label = toEn ? o.en : o.fr;
      const isRight = toEn ? o.fr === correct.fr : o.en === correct.en;
      return '<button class="quiz-opt" onclick="checkAnswer(this,' + isRight + ',\'' + (toEn ? correct.en : correct.fr).replace(/'/g, "\'") + '\')">' + label + '</button>';
    }).join('');
  }

  quizTotal++;
  document.getElementById('quiz-score').textContent = 'score: ' + quizScore + ' / ' + (quizTotal - 1);
}
function checkAnswer(btn, correct, rightAnswer) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  if (correct) {
    btn.classList.add('correct');
    quizScore++;
    gainXP(15);
    const msgs = ['parfait! 🌟', 'très bien! 🐸', 'correct! wanna bet you ace this? 😏', 'oui oui! 🎉'];
    const fb = document.getElementById('quiz-feedback');
    fb.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    fb.className = 'quiz-feedback correct-fb';
    fb.style.display = 'block';
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.textContent === rightAnswer) b.classList.add('correct');
    });
    const fb = document.getElementById('quiz-feedback');
    fb.textContent = 'not quite the answer is: ' + rightAnswer + ' 🐸 you got it next time!';
    fb.className = 'quiz-feedback wrong-fb';
    fb.style.display = 'block';
  }
  document.getElementById('quiz-score').textContent = 'score: ' + quizScore + ' / ' + quizTotal;
  document.getElementById('quiz-next').style.display = 'inline-block';
}

// ── MESSAGES ──
function renderMessages() {
  const wrap = document.getElementById('messages-list');
  const currentLevel = getLevel();
  wrap.innerHTML = unlockMessages.map(m => {
    const unlocked = unlockedMessages.includes(m.level) || currentLevel >= m.level;
    if (unlocked) {
      return '<div class="msg-card unlocked' + (m.isLast ? ' msg-last' : '') + '">' +
        '<div class="msg-card-header">' +
        '<span class="msg-level-badge">' + m.title + '</span>' +
        '</div>' +
        '<div class="msg-body">' + m.text.replace(/\n/g, '<br>') + '</div>' +
        (m.hasPhoto ? `<img src="${m.photo}" class="msg-photo" alt="unlocked photo">` : '') +
        '</div>';
    } else {
      return '<div class="msg-card locked">' +
        '<div class="msg-lock-icon">🔒</div>' +
        '<div class="msg-lock-text">reach level ' + m.level + ' to unlock</div>' +
        '<div class="msg-lock-xp">need ' + ((m.level - currentLevel) * xpPerLevel) + ' more XP</div>' +
        '</div>';
    }
  }).join('');
}

// ── STUDY ROOM ──
let pomodoroInterval = null;
let pomodoroTime = 25 * 60;
let pomodoroRunning = false;
let isBreak = false;
let sessionCount = 0;

function initRoom() {
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(pomodoroTime / 60).toString().padStart(2, '0');
  const secs = (pomodoroTime % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = mins + ':' + secs;
  document.getElementById('timer-label').textContent = isBreak ? '☕ break time!' : '📚 focus time';
}

function toggleTimer() {
  if (pomodoroRunning) {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    document.getElementById('timer-btn').textContent = '▶ resume';
    setFrogMood('idle');
  } else {
    pomodoroRunning = true;
    document.getElementById('timer-btn').textContent = '⏸ pause';
    setFrogMood(isBreak ? 'break' : 'study');
    pomodoroInterval = setInterval(() => {
      pomodoroTime--;
      updateTimerDisplay();
      if (pomodoroTime <= 0) {
        clearInterval(pomodoroInterval);
        pomodoroRunning = false;
        if (!isBreak) {
          sessionCount++;
          gainXP(20);
          isBreak = true;
          pomodoroTime = 5 * 60;
          setFrogMood('celebrate');
          showRoomBubble("YAYYY break time!! tu l'as fait! 🎉 go drink water pretty eyes");
          document.getElementById('timer-btn').textContent = '▶ start break';
        } else {
          isBreak = false;
          pomodoroTime = 25 * 60;
          setFrogMood('idle');
          showRoomBubble("okay back to work silly 🐸 wanna bet u ace this session too?");
          document.getElementById('timer-btn').textContent = '▶ start session';
        }
        updateTimerDisplay();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(pomodoroInterval);
  pomodoroRunning = false;
  isBreak = false;
  pomodoroTime = 25 * 60;
  updateTimerDisplay();
  document.getElementById('timer-btn').textContent = '▶ start';
  setFrogMood('idle');
}

const frogMoods = {
  idle: { anim: 'petBob', speech: '' },
  study: { anim: 'frogType', speech: '📖' },
  break: { anim: 'petBob', speech: '☕' },
  celebrate: { anim: 'petBounce', speech: '🎉' },
};

function setFrogMood(mood) {
  const roomFrog = document.getElementById('room-frog');
  roomFrog.style.animation = 'none';
  setTimeout(() => { roomFrog.style.animation = ''; roomFrog.classList.remove('frog-study', 'frog-break', 'frog-celebrate'); roomFrog.classList.add('frog-' + mood); }, 10);
}

function showRoomBubble(text) {
  const b = document.getElementById('room-bubble');
  b.textContent = text;
  b.style.opacity = '1';
  b.style.transform = 'translateY(0)';
  setTimeout(() => { b.style.opacity = '0'; b.style.transform = 'translateY(8px)'; }, 5000);
}

// music
let musicPlaying = false;

function toggleMusic() {
  const btn = document.getElementById('music-btn');
  const audio = document.getElementById('local-audio');

  musicPlaying = !musicPlaying;

  if (musicPlaying) {
    audio.play();
    btn.textContent = '🎵 music on';
    btn.classList.add('active');
  } else {
    audio.pause();
    btn.textContent = '🎵 music off';
    btn.classList.remove('active');
  }
}
// room frog messages
const roomFrogLines = [
  "you're doing great, stay focused! ",
  "25 mins, you got this!",
];
let roomLineIdx = 0;
setInterval(() => {
  if (pomodoroRunning && !isBreak) {
    showRoomBubble(roomFrogLines[roomLineIdx % roomFrogLines.length]);
    roomLineIdx++;
  }
}, 90000);


// ── AI CHAT (Groq via Netlify function) — DISABLED BY DEFAULT ──
// This whole feature is commented out in index.html (see the "CHAT" section comment
// block) so it costs nothing and can't be abused until you deliberately re-enable it.
// To bring it back: un-comment the chat section in index.html, fill in your own
// personality in SYSTEM_PROMPT below, and make sure netlify/functions/chat.js has a
// valid API key configured in your environment variables.
//
// RATE LIMITING: sendChat() below caps usage to CHAT_DAILY_LIMIT messages per
// browser (tracked via localStorage, resets at local midnight) so a public link
// can't run up API costs even if someone finds/enables the chat tab.

const CHAT_DAILY_LIMIT = 30;

const SYSTEM_PROMPT = `You are a friendly, encouraging French tutor for a student using this study app.

CORE PERSONALITY:
- Warm, patient, and genuinely encouraging — never robotic or overly formal
- Clear and concise explanations, correct French grammar and vocabulary
- Light, natural tone — a few emojis are fine, but don't overdo it
- Keep responses short and focused, like a helpful text message, not an essay

WHAT YOU HELP WITH:
- Intro-level French: greetings, être/avoir, articles, pronouns, numbers, days,
  common phrases, negation, question formation, adjective agreement
- Quizzing the student and giving quick feedback
- Explaining grammar in plain, simple terms with examples

VOICE RULES:
- Be encouraging when the student gets something right
- Be patient and clear when they're confused — offer a different way to explain it
- Keep it conversational, not textbook-dry
- Never break character as a tutor; you are not a general-purpose assistant`;

function getChatUsageKey() {
  const today = new Date().toISOString().slice(0, 10);
  return 'fsh_chat_count_' + today;
}

function getChatUsage() {
  return parseInt(localStorage.getItem(getChatUsageKey()) || '0');
}

function incrementChatUsage() {
  localStorage.setItem(getChatUsageKey(), String(getChatUsage() + 1));
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const msgs = document.getElementById('chat-messages');
  const sendBtn = document.getElementById('chat-send');
  const text = input.value.trim();
  if (!text) return;

  if (getChatUsage() >= CHAT_DAILY_LIMIT) {
    input.value = '';
    const limitMsg = document.createElement('div');
    limitMsg.className = 'msg bot';
    limitMsg.textContent = "you've hit today's chat limit (" + CHAT_DAILY_LIMIT + " messages) — come back tomorrow, or keep studying with flashcards and quizzes in the meantime! 🐸";
    msgs.appendChild(limitMsg);
    msgs.scrollTop = msgs.scrollHeight;
    return;
  }

  input.value = '';
  sendBtn.disabled = true;

  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  msgs.scrollTop = msgs.scrollHeight;

  const typing = document.createElement('div');
  typing.className = 'msg bot typing';
  typing.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  const history = [];
  msgs.querySelectorAll('.msg:not(.typing)').forEach(m => {
    history.push({ role: m.classList.contains('user') ? 'user' : 'assistant', content: m.textContent });
  });

  try {
    const resp = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ system: SYSTEM_PROMPT, messages: history })
    });

    const data = await resp.json();
    const reply = data.reply || "sorry, something went wrong — try again in a moment 🐸";
    typing.remove();
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = reply;
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
    incrementChatUsage();
    gainXP(5);
  } catch (e) {
    typing.remove();
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = "couldn't connect right now — try again in a bit 🐸";
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }
  sendBtn.disabled = false;
  input.focus();
}

function sendPromptChat(text) {
  document.getElementById('chat-input').value = text;
  sendChat();
}

// init
updatePetUI();
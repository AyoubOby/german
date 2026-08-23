const QUIZ_LENGTH = 25;

const ui = {
    en: {
        t1: "Städte und Verkehrsmittel", t2: "Master vocabulary of cities and transport!",
        t3: "1. Wortschatz (Vocabulary)", t3s: "Article colors show grammatical gender at a glance.",
        t4: "2. Wichtige Sätze (Useful Sentences)", t5: "Translation",
        t6: "3. Interactive Quiz (25 Random Qs)",
        v1: "- Train station", v2: "- Airport", v3: "- Street", v4: "- Train", v5: "- Bus", v6: "- Car",
        v7: "- Hotel", v8: "- Bus stop", v9: "- Ticket counter", v10: "- Subway", v11: "- Bicycle", v12: "- Taxi",
        v13: "- Left", v14: "- Right", v15: "- Straight ahead", v16: "- Here", v17: "- There",
        v18: "- Ticket", v19: "- Timetable", v20: "- Platform", v21: "- Delay", v22: "- On time", v23: "- Passenger",
        s1: "Where is the train station?", s2: "I am going by train.", s3: "How much does the ticket cost?",
        s4: "Where can I buy a ticket?", s5: "The train is delayed.", s6: "When does the next bus leave?",
        s7: "I want to go to the airport.", s8: "Where is the nearest bus stop?",
        s9: "Go straight ahead and then left.", s10: "Excuse me, where is the ticket counter?",
        fin: "Quiz Finished! 🎉", sc: "Score:", rst: "Restart", nxt: "Next Question",
        tryAgain: "You scored less than 50%. Try again!"
    },
    ar: {
        t1: "Städte und Verkehrsmittel", t2: "أتقن مفردات المدن ووسائل النقل بالألمانية!",
        t3: "1. Wortschatz (المفردات)", t3s: "ألوان أداة التعريف تبيّن جنس الكلمة (مذكر/مؤنث/محايد).",
        t4: "2. Wichtige Sätze (جمل مهمة)", t5: "الترجمة",
        t6: "3. الإختبار (25 سؤال عشوائي)",
        v1: "- محطة القطار", v2: "- المطار", v3: "- الشارع", v4: "- القطار", v5: "- الحافلة", v6: "- السيارة",
        v7: "- الفندق", v8: "- موقف الحافلة", v9: "- شباك التذاكر", v10: "- المترو", v11: "- الدراجة الهوائية", v12: "- سيارة الأجرة",
        v13: "- يسار", v14: "- يمين", v15: "- إلى الأمام مباشرة", v16: "- هنا", v17: "- هناك",
        v18: "- التذكرة", v19: "- جدول المواعيد", v20: "- الرصيف", v21: "- التأخير", v22: "- في الوقت المحدد", v23: "- المسافر",
        s1: "أين تقع محطة القطار؟", s2: "أنا أسافر بالقطار.", s3: "كم تكلف تذكرة السفر؟",
        s4: "أين يمكنني شراء تذكرة؟", s5: "القطار متأخر.", s6: "متى تنطلق الحافلة القادمة؟",
        s7: "أريد الذهاب إلى المطار.", s8: "أين أقرب موقف حافلة؟",
        s9: "امشِ إلى الأمام ثم اتجه يسارًا.", s10: "عفوًا، أين شباك التذاكر؟",
        fin: "إنتهى الإختبار! 🎉", sc: "النتيجة:", rst: "إعادة الإختبار", nxt: "السؤال التالي",
        tryAgain: "أخذت أقل من 50%. لازم تعاود الإختبار!"
    },
    de: {
        t1: "Städte und Verkehrsmittel", t2: "Lerne den Wortschatz über Städte und Verkehrsmittel!",
        t3: "1. Wortschatz", t3s: "Die Artikelfarben zeigen das grammatische Geschlecht.",
        t4: "2. Wichtige Sätze", t5: "Bedeutung",
        t6: "3. Quiz (25 Qs)",
        v1: "", v2: "", v3: "", v4: "", v5: "", v6: "", v7: "", v8: "", v9: "", v10: "", v11: "", v12: "",
        v13: "", v14: "", v15: "", v16: "", v17: "", v18: "", v19: "", v20: "", v21: "", v22: "", v23: "",
        s1: "Wo ist der Bahnhof?", s2: "Ich fahre mit dem Zug.", s3: "Wie viel kostet die Fahrkarte?",
        s4: "Wo kann ich ein Ticket kaufen?", s5: "Der Zug hat Verspätung.", s6: "Wann fährt der nächste Bus?",
        s7: "Ich möchte zum Flughafen.", s8: "Wo ist die nächste Haltestelle?",
        s9: "Gehen Sie geradeaus und dann links.", s10: "Entschuldigung, wo ist der Schalter?",
        fin: "Quiz beendet! 🎉", sc: "Ergebnis:", rst: "Neu starten", nxt: "Nächste Frage",
        tryAgain: "Weniger als 50% richtig. Versuch es noch einmal!"
    }
};

const words = [
    { de: "Der Zug", en: "The train", ar: "القطار", o_de: ["Der Bus", "Das Auto"], o_en: ["The bus", "The car"] },
    { de: "Der Bahnhof", en: "The train station", ar: "محطة القطار", o_de: ["Das Hotel", "Der Flughafen"], o_en: ["The hotel", "The airport"] },
    { de: "Der Flughafen", en: "The airport", ar: "المطار", o_de: ["Die Straße", "Die Haltestelle"], o_en: ["The street", "The bus stop"] },
    { de: "Die U-Bahn", en: "The subway", ar: "المترو", o_de: ["Das Fahrrad", "Das Schiff"], o_en: ["The bicycle", "The ship"] },
    { de: "Die S-Bahn", en: "The suburban train", ar: "قطار الضواحي", o_de: ["Das Taxi", "Der LKW"], o_en: ["The taxi", "The truck"] },
    { de: "Die Straße", en: "The street", ar: "الشارع", o_de: ["Das Hotel", "Der Park"], o_en: ["The hotel", "The park"] },
    { de: "Das Fahrrad", en: "The bicycle", ar: "الدراجة الهوائية", o_de: ["Das Auto", "Der Bus"], o_en: ["The car", "The bus"] },
    { de: "Das Ticket", en: "The ticket", ar: "التذكرة", o_de: ["Der Pass", "Die Karte"], o_en: ["The passport", "The card"] },
    { de: "Das Auto", en: "The car", ar: "السيارة", o_de: ["Der Zug", "Das Flugzeug"], o_en: ["The train", "The airplane"] },
    { de: "Die Haltestelle", en: "The bus stop", ar: "موقف الحافلة", o_de: ["Der Bahnhof", "Die Straße"], o_en: ["The station", "The street"] },
    { de: "Das Hotel", en: "The hotel", ar: "الفندق", o_de: ["Der Flughafen", "Der Bahnhof"], o_en: ["The airport", "The station"] },
    { de: "Der Fahrplan", en: "The timetable", ar: "جدول المواعيد", o_de: ["Die Karte", "Das Ticket"], o_en: ["The map", "The ticket"] },
    { de: "Der Passagier", en: "The passenger", ar: "المسافر", o_de: ["Der Fahrer", "Der Pilot"], o_en: ["The driver", "The pilot"] },
    { de: "Das Gleis", en: "The platform", ar: "رصيف القطار", o_de: ["Der Schalter", "Der Ausgang"], o_en: ["The counter", "The exit"] },
    { de: "Der Schalter", en: "The ticket counter", ar: "شباك التذاكر", o_de: ["Das Gleis", "Die Haltestelle"], o_en: ["The track", "The bus stop"] },
    { de: "Die Verspätung", en: "The delay", ar: "التأخير", o_de: ["Die Pünktlichkeit", "Die Ankunft"], o_en: ["The punctuality", "The arrival"] },
    { de: "Das Taxi", en: "The taxi", ar: "سيارة الأجرة", o_de: ["Der Bus", "Das Auto"], o_en: ["The bus", "The car"] },
    { de: "pünktlich", en: "on time", ar: "في الوقت المحدد", o_de: ["spät", "schnell"], o_en: ["late", "fast"] },
    { de: "links", en: "left", ar: "يسار", o_de: ["rechts", "geradeaus"], o_en: ["right", "straight ahead"] },
    { de: "rechts", en: "right", ar: "يمين", o_de: ["links", "zurück"], o_en: ["left", "back"] },
    { de: "geradeaus", en: "straight ahead", ar: "إلى الأمام مباشرة", o_de: ["links", "rechts"], o_en: ["left", "right"] },
    { de: "hier", en: "here", ar: "هنا", o_de: ["dort", "dorthin"], o_en: ["there", "over there"] },
    { de: "dort", en: "there", ar: "هناك", o_de: ["hier", "hierher"], o_en: ["here", "over here"] },
    { de: "kostet", en: "costs", ar: "يكلف", o_de: ["kommt an", "fährt ab"], o_en: ["arrives", "departs"] },
    { de: "einsteigen", en: "to get on", ar: "يركب", o_de: ["aussteigen", "umsteigen"], o_en: ["to get off", "to change trains"] },
    { de: "aussteigen", en: "to get off", ar: "ينزل", o_de: ["einsteigen", "umsteigen"], o_en: ["to get on", "to change trains"] },
    { de: "umsteigen", en: "to change trains", ar: "يغير المركبة", o_de: ["einsteigen", "aussteigen"], o_en: ["to get on", "to get off"] },
    { de: "mit dem Bus", en: "by bus", ar: "بالحافلة", o_de: ["mit den Bus", "mit der Bus"], o_en: ["by car", "by train"] },
    { de: "mit der U-Bahn", en: "by subway", ar: "بالمترو", o_de: ["mit dem U-Bahn", "mit den U-Bahn"], o_en: ["by bicycle", "by foot"] },
    { de: "mit dem Auto", en: "by car", ar: "بالسيارة", o_de: ["mit der Auto", "mit den Auto"], o_en: ["by plane", "by bus"] },
    { de: "zum Flughafen", en: "to the airport", ar: "إلى المطار", o_de: ["zu Flughafen", "nach Flughafen"], o_en: ["to the city", "to the hotel"] },
    { de: "zur Haltestelle", en: "to the bus stop", ar: "إلى موقف الحافلة", o_de: ["zum Haltestelle", "nach Haltestelle"], o_en: ["to the counter", "to the track"] },
    { de: "Wo kann ich ein Ticket kaufen?", en: "Where can I buy a ticket?", ar: "أين يمكنني شراء تذكرة؟", o_de: ["Wo ist das Auto?", "Wie viel kostet das Ticket?"], o_en: ["Where is the car?", "How much does the ticket cost?"] },
    { de: "Der Zug hat Verspätung.", en: "The train is delayed.", ar: "القطار متأخر.", o_de: ["Der Zug kommt pünktlich.", "Der Zug fährt ab."], o_en: ["The train arrives on time.", "The train departs."] },
    { de: "Wie viel kostet die Fahrkarte?", en: "How much does the ticket cost?", ar: "كم ثمن تذكرة السفر؟", o_de: ["Wo ist der Schalter?", "Wann fährt der Zug?"], o_en: ["Where is the counter?", "When does the train leave?"] },
    { de: "Wann fährt der nächste Bus?", en: "When does the next bus leave?", ar: "متى تنطلق الحافلة القادمة؟", o_de: ["Wann kommt der Zug an?", "Wo ist der Bus?"], o_en: ["When does the train arrive?", "Where is the bus?"] },
    { de: "Ich möchte zum Flughafen.", en: "I want to go to the airport.", ar: "أريد الذهاب إلى المطار.", o_de: ["Ich möchte zum Bahnhof.", "Ich fahre zum Hotel."], o_en: ["I want to go to the train station.", "I am going to the hotel."] },
    { de: "Wo ist die nächste Haltestelle?", en: "Where is the nearest bus stop?", ar: "أين أقرب موقف حافلة؟", o_de: ["Wo ist der nächste Bahnhof?", "Wo ist das Hotel?"], o_en: ["Where is the nearest train station?", "Where is the hotel?"] },
    { de: "Entschuldigung, wo ist der Schalter?", en: "Excuse me, where is the ticket counter?", ar: "عفوًا، أين شباك التذاكر؟", o_de: ["Entschuldigung, wo ist das Gleis?", "Entschuldigung, wo ist der Ausgang?"], o_en: ["Excuse me, where is the platform?", "Excuse me, where is the exit?"] }
];

let lang = "en", cur = 0, score = 0, quizQuestions = [];
const qTxt = document.getElementById("q-txt"), opts = document.getElementById("opts"), nBtn = document.getElementById("next-btn"), res = document.getElementById("res"), progressFill = document.getElementById("progress-fill");

function chLang(l) {
    lang = l;
    document.body.className = (l === 'ar') ? 'rtl' : '';
    for (let id in ui[l]) {
        let el = document.getElementById(id);
        if (el) el.innerText = ui[l][id];
    }
    startQuiz();
}

function generateQuestions() {
    let shuffledWords = [...words].sort(() => Math.random() - 0.5).slice(0, QUIZ_LENGTH);
    quizQuestions = shuffledWords.map((w) => {
        let qText = "", correctAns = "", choices = [];
        let isSentence = w.de.includes(" ") && !w.de.startsWith("Der") && !w.de.startsWith("Die") && !w.de.startsWith("Das");

        if (lang === "de") {
            qText = isSentence ? `Was bedeutet "${w.de}" auf Englisch?` : `Was bedeutet das Wort "${w.de}"?`;
            correctAns = w.en; choices = [...w.o_en, correctAns];
        } else if (lang === "en") {
            qText = isSentence ? `Translate to German: "${w.en}"` : `What is the German for "${w.en}"?`;
            correctAns = w.de; choices = [...w.o_de, correctAns];
        } else if (lang === "ar") {
            qText = isSentence ? `ترجم إلى الألمانية: "${w.ar}"` : `ما هو المعنى الألماني لـ "${w.ar}"؟`;
            correctAns = w.de; choices = [...w.o_de, correctAns];
        }
        choices.sort(() => Math.random() - 0.5);
        return { q: qText, o: choices, c: choices.indexOf(correctAns) };
    });
}

function startQuiz() {
    cur = 0; score = 0;
    nBtn.style.display = "none"; res.style.display = "none";
    nBtn.onclick = nextQ;
    generateQuestions();
    showQ();
}

function updateProgress() {
    progressFill.style.width = `${(cur / quizQuestions.length) * 100}%`;
}

function showQ() {
    opts.innerHTML = ""; nBtn.style.display = "none"; nBtn.innerText = ui[lang].nxt;
    updateProgress();
    let current = quizQuestions[cur];
    qTxt.innerText = `${cur + 1}/${quizQuestions.length}: ${current.q}`;
    current.o.forEach((o, i) => {
        let b = document.createElement("button");
        b.innerText = o;
        b.onclick = () => {
            opts.querySelectorAll("button").forEach(btn => btn.disabled = true);
            if (i === current.c) { b.style.background = "#10b981"; b.style.color = "white"; b.style.borderColor = "#10b981"; score++; }
            else { b.style.background = "#ef4444"; b.style.color = "white"; b.style.borderColor = "#ef4444"; opts.children[current.c].style.background = "#10b981"; opts.children[current.c].style.color = "white"; opts.children[current.c].style.borderColor = "#10b981"; }
            nBtn.style.display = "inline-block";
        };
        opts.appendChild(b);
    });
}

function nextQ() {
    cur++;
    if (cur < quizQuestions.length) {
        showQ();
    } else {
        opts.innerHTML = ""; res.style.display = "block";
        progressFill.style.width = "100%";
        let pct = Math.round((score / quizQuestions.length) * 100);
        if (pct < 50) {
            qTxt.innerText = ui[lang].tryAgain;
            res.innerText = `${ui[lang].sc} ${score}/${quizQuestions.length} (${pct}%)`;
            res.style.color = "#ef4444";
        } else {
            qTxt.innerText = ui[lang].fin;
            res.innerText = `${ui[lang].sc} ${score}/${quizQuestions.length} (${pct}%)`;
            res.style.color = "#10b981";
        }
        nBtn.innerText = ui[lang].rst; nBtn.onclick = startQuiz;
    }
}

startQuiz();

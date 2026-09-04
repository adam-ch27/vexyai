import type { LanguageCode } from "./i18n";

export const infoTopics = ["support", "about", "faq", "help", "privacy", "terms"] as const;
export type InfoTopic = (typeof infoTopics)[number];

export type InfoPage = {
  title: string;
  lead: string;
  sections: { heading: string; body: string }[];
};

type Pages = Record<InfoTopic, InfoPage>;

export const contactEmail = "hello@studywise.ai";

const ar: Pages = {
  support: {
    title: "الدعم والتواصل",
    lead: "فريقنا موجود لمساعدتك في أي مشكلة تقنية أو سؤال حول استخدام StudyWise.",
    sections: [
      { heading: "مشاكل في التوليد", body: "إذا توقف التوليد أو ظهرت رسالة خطأ، جرّب إعادة المحاولة من زر «إعادة التوليد». إن تكرر الأمر أرسل لنا نص الدرس والوقت التقريبي." },
      { heading: "الملفات والصوت", body: "ندعم رفع ملفات PDF والصور والنصوص حتى 5 ميجابايت، إضافة إلى التسجيل الصوتي المباشر داخل صفحة المحادثة." },
      { heading: "طلب ميزة", body: "نستقبل اقتراحاتك حول لغات أو صيغ مراجعة جديدة، ونضيف الأكثر طلبًا أولًا." },
    ],
  },
  about: {
    title: "معلومات عنا",
    lead: "StudyWise AI أداة مذاكرة تحوّل أي درس إلى ملخص أو بطاقات أو خريطة ذهنية بست لغات.",
    sections: [
      { heading: "لماذا بدأنا", body: "لأن أغلب وقت المذاكرة يضيع في إعادة ترتيب المعلومات بدل فهمها. نحن نتكفل بالترتيب وأنت تتكفل بالفهم." },
      { heading: "كيف نعمل", body: "نحلّل النص الذي ترسله فقط، ولا نضيف معلومات من خارجه، حتى تبقى المراجعة أمينة لمصدرك الدراسي." },
      { heading: "اللغات", body: "العربية والفرنسية والإنجليزية والألمانية والإسبانية والبرتغالية، مع دعم كامل لاتجاه الكتابة." },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    lead: "إجابات سريعة عن أكثر ما يُسأل عنه.",
    sections: [
      { heading: "هل أحتاج حسابًا؟", body: "لا. يمكنك استخدام كل الميزات مباشرة، وتُحفظ محادثاتك محليًا على جهازك." },
      { heading: "هل يمكن تغيير الصيغة بعد الإرسال؟", body: "نعم، بعد ظهور النتيجة تجد أزرارًا لتحويل الدرس نفسه إلى ملخص أو بطاقات أو خريطة ذهنية." },
      { heading: "هل تُحفظ دروسي على خوادمكم؟", body: "لا نخزّن دروسك؛ يُرسل النص للمعالجة ثم تُعرض النتيجة وتُحفظ على جهازك فقط." },
    ],
  },
  help: {
    title: "مركز المساعدة",
    lead: "دليل سريع لاستخدام StudyWise بأفضل شكل.",
    sections: [
      { heading: "١. اختر الصيغة", body: "ملخص للمراجعة السريعة، بطاقات لاختبار الذاكرة، خريطة ذهنية لربط الأفكار." },
      { heading: "٢. أرسل الدرس", body: "الصق النص أو ارفع ملف PDF أو صورة، أو سجّل صوتك وسنحوّله إلى نص تلقائيًا." },
      { heading: "٣. تابع المذاكرة", body: "استخدم أزرار المتابعة لاختبار نفسك أو استخراج المصطلحات أو تبسيط الشرح." },
    ],
  },
  privacy: {
    title: "سياسة الخصوصية",
    lead: "خصوصيتك أساس التصميم، لا إضافة لاحقة.",
    sections: [
      { heading: "ما نجمعه", body: "لا نطلب اسمًا ولا بريدًا للاستخدام. لا توجد حسابات ولا ملفات تتبع إعلانية." },
      { heading: "أين تُحفظ محادثاتك", body: "في متصفحك عبر التخزين المحلي، ويمكنك حذفها كلها من صفحة «حسابي»." },
      { heading: "المعالجة", body: "يُرسل نص الدرس أو الملف إلى مزود الذكاء الاصطناعي لغرض التوليد فقط، ولا يُستخدم لتدريب نماذج." },
    ],
  },
  terms: {
    title: "شروط الاستخدام",
    lead: "قواعد بسيطة تحمي الجميع.",
    sections: [
      { heading: "الاستخدام المسموح", body: "StudyWise أداة تعليمية للاستخدام الشخصي والدراسي. لا ترفع محتوى غير قانوني أو لا تملك حقوقه." },
      { heading: "دقة النتائج", body: "النتائج مولّدة آليًا وقد تحتوي أخطاء؛ راجعها قبل الاعتماد عليها في امتحان أو بحث." },
      { heading: "التوفر", body: "قد تتوقف الخدمة مؤقتًا للصيانة أو بسبب حدود الاستخدام لدى مزود الذكاء الاصطناعي." },
    ],
  },
};

const en: Pages = {
  support: {
    title: "Support",
    lead: "We're here for any technical issue or question about using StudyWise.",
    sections: [
      { heading: "Generation issues", body: "If a result fails, use the Regenerate button. If it keeps failing, send us the lesson text and roughly when it happened." },
      { heading: "Files and audio", body: "We support PDF, image and text uploads up to 5 MB, plus live voice recording inside the chat page." },
      { heading: "Feature requests", body: "Tell us which languages or review formats you need; the most requested ones ship first." },
    ],
  },
  about: {
    title: "About us",
    lead: "StudyWise AI turns any lesson into a summary, flashcards or a mind map, in six languages.",
    sections: [
      { heading: "Why we started", body: "Most study time is lost reorganising information instead of understanding it. We handle the structure, you handle the learning." },
      { heading: "How we work", body: "We only use the text you send and never invent facts, so your review stays faithful to your source." },
      { heading: "Languages", body: "Arabic, French, English, German, Spanish and Portuguese, with full text-direction support." },
    ],
  },
  faq: {
    title: "FAQ",
    lead: "Quick answers to the most common questions.",
    sections: [
      { heading: "Do I need an account?", body: "No. Every feature works right away and your chats are stored locally on your device." },
      { heading: "Can I switch format after sending?", body: "Yes. Once a result appears you can turn the same lesson into a summary, flashcards or a mind map." },
      { heading: "Are my lessons stored on your servers?", body: "No. Text is processed to produce the result, then kept only in your browser." },
    ],
  },
  help: {
    title: "Help center",
    lead: "A quick guide to getting the most out of StudyWise.",
    sections: [
      { heading: "1. Pick a format", body: "Summary for fast review, flashcards to test recall, mind map to connect ideas." },
      { heading: "2. Send the lesson", body: "Paste text, upload a PDF or image, or record your voice and we transcribe it automatically." },
      { heading: "3. Keep studying", body: "Use the follow-up buttons to quiz yourself, extract key terms or simplify the explanation." },
    ],
  },
  privacy: {
    title: "Privacy policy",
    lead: "Privacy is part of the design, not an afterthought.",
    sections: [
      { heading: "What we collect", body: "No name, no email, no accounts and no advertising trackers." },
      { heading: "Where chats live", body: "In your browser's local storage. You can erase everything from the Account page." },
      { heading: "Processing", body: "Your lesson is sent to the AI provider only to generate the result and is not used to train models." },
    ],
  },
  terms: {
    title: "Terms of use",
    lead: "Simple rules that protect everyone.",
    sections: [
      { heading: "Allowed use", body: "StudyWise is an educational tool for personal study. Don't upload illegal content or material you don't own." },
      { heading: "Accuracy", body: "Results are generated automatically and may contain mistakes; review them before relying on them." },
      { heading: "Availability", body: "Service may pause for maintenance or because of AI provider usage limits." },
    ],
  },
};

const fr: Pages = {
  support: {
    title: "Assistance",
    lead: "Nous sommes là pour tout problème technique ou question sur StudyWise.",
    sections: [
      { heading: "Problèmes de génération", body: "Si un résultat échoue, utilisez le bouton Régénérer. Si cela persiste, envoyez-nous le texte de la leçon." },
      { heading: "Fichiers et audio", body: "PDF, images et texte jusqu'à 5 Mo, plus l'enregistrement vocal directement dans la page de conversation." },
      { heading: "Demande de fonctionnalité", body: "Dites-nous quelles langues ou quels formats vous manquent : les plus demandés arrivent en premier." },
    ],
  },
  about: {
    title: "À propos",
    lead: "StudyWise AI transforme n'importe quelle leçon en résumé, cartes mémoire ou carte mentale, en six langues.",
    sections: [
      { heading: "Pourquoi", body: "Trop de temps est perdu à réorganiser l'information au lieu de la comprendre. Nous structurons, vous apprenez." },
      { heading: "Comment", body: "Nous n'utilisons que le texte envoyé, sans inventer de faits, pour rester fidèles à votre source." },
      { heading: "Langues", body: "Arabe, français, anglais, allemand, espagnol et portugais, avec gestion complète du sens d'écriture." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    lead: "Des réponses rapides aux questions les plus courantes.",
    sections: [
      { heading: "Faut-il un compte ?", body: "Non. Tout fonctionne immédiatement et vos conversations restent sur votre appareil." },
      { heading: "Changer de format après l'envoi ?", body: "Oui, après un résultat vous pouvez convertir la même leçon en résumé, cartes ou carte mentale." },
      { heading: "Mes leçons sont-elles stockées ?", body: "Non. Le texte sert uniquement à générer le résultat, conservé ensuite dans votre navigateur." },
    ],
  },
  help: {
    title: "Centre d'aide",
    lead: "Un guide rapide pour bien utiliser StudyWise.",
    sections: [
      { heading: "1. Choisir un format", body: "Résumé pour réviser vite, cartes pour tester la mémoire, carte mentale pour relier les idées." },
      { heading: "2. Envoyer la leçon", body: "Collez le texte, importez un PDF ou une image, ou enregistrez votre voix : nous la transcrivons." },
      { heading: "3. Continuer", body: "Utilisez les boutons de suivi pour vous tester, extraire les termes ou simplifier l'explication." },
    ],
  },
  privacy: {
    title: "Confidentialité",
    lead: "La confidentialité fait partie de la conception.",
    sections: [
      { heading: "Ce que nous collectons", body: "Aucun nom, aucun e-mail, aucun compte, aucun traceur publicitaire." },
      { heading: "Où sont vos conversations", body: "Dans le stockage local de votre navigateur. Vous pouvez tout effacer depuis la page Mon compte." },
      { heading: "Traitement", body: "Votre leçon est envoyée au fournisseur d'IA uniquement pour générer le résultat." },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    lead: "Des règles simples qui protègent tout le monde.",
    sections: [
      { heading: "Usage autorisé", body: "Outil éducatif à usage personnel. N'importez pas de contenu illégal ou dont vous n'avez pas les droits." },
      { heading: "Exactitude", body: "Les résultats sont générés automatiquement et peuvent contenir des erreurs : vérifiez-les." },
      { heading: "Disponibilité", body: "Le service peut être interrompu pour maintenance ou limites d'usage du fournisseur d'IA." },
    ],
  },
};

const de: Pages = {
  support: {
    title: "Support",
    lead: "Wir helfen bei technischen Problemen und Fragen zu StudyWise.",
    sections: [
      { heading: "Probleme beim Erstellen", body: "Schlägt ein Ergebnis fehl, nutze «Neu erstellen». Bleibt es dabei, schick uns den Lektionstext." },
      { heading: "Dateien und Audio", body: "PDF, Bilder und Text bis 5 MB sowie Sprachaufnahme direkt im Chat." },
      { heading: "Wunsch einreichen", body: "Sag uns, welche Sprachen oder Formate dir fehlen — die häufigsten kommen zuerst." },
    ],
  },
  about: {
    title: "Über uns",
    lead: "StudyWise AI verwandelt jede Lektion in Zusammenfassung, Lernkarten oder Mindmap — in sechs Sprachen.",
    sections: [
      { heading: "Warum", body: "Lernzeit geht meist fürs Sortieren drauf statt fürs Verstehen. Wir sortieren, du lernst." },
      { heading: "Wie", body: "Wir nutzen nur deinen Text und erfinden nichts dazu, damit alles quellentreu bleibt." },
      { heading: "Sprachen", body: "Arabisch, Französisch, Englisch, Deutsch, Spanisch und Portugiesisch mit voller Schreibrichtung." },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    lead: "Kurze Antworten auf die häufigsten Fragen.",
    sections: [
      { heading: "Brauche ich ein Konto?", body: "Nein. Alles funktioniert sofort, Chats bleiben lokal auf deinem Gerät." },
      { heading: "Format nachträglich wechseln?", body: "Ja, nach dem Ergebnis kannst du dieselbe Lektion in ein anderes Format umwandeln." },
      { heading: "Werden Lektionen gespeichert?", body: "Nein, der Text dient nur der Erstellung und bleibt danach in deinem Browser." },
    ],
  },
  help: {
    title: "Hilfecenter",
    lead: "Kurzanleitung für den besten Start.",
    sections: [
      { heading: "1. Format wählen", body: "Zusammenfassung zum schnellen Wiederholen, Karten zum Abfragen, Mindmap zum Verknüpfen." },
      { heading: "2. Lektion senden", body: "Text einfügen, PDF oder Bild hochladen oder Stimme aufnehmen — wir transkribieren automatisch." },
      { heading: "3. Weiterlernen", body: "Mit den Folgeaktionen testen, Begriffe extrahieren oder einfacher erklären lassen." },
    ],
  },
  privacy: {
    title: "Datenschutz",
    lead: "Datenschutz ist Teil des Designs.",
    sections: [
      { heading: "Was wir erheben", body: "Kein Name, keine E-Mail, keine Konten, keine Werbetracker." },
      { heading: "Wo Chats liegen", body: "Im lokalen Speicher deines Browsers; löschbar über die Kontoseite." },
      { heading: "Verarbeitung", body: "Deine Lektion geht nur zur Erstellung an den KI-Anbieter, nicht ins Modelltraining." },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen",
    lead: "Einfache Regeln zum Schutz aller.",
    sections: [
      { heading: "Erlaubte Nutzung", body: "Lernwerkzeug für den persönlichen Gebrauch. Keine illegalen oder fremden Inhalte hochladen." },
      { heading: "Genauigkeit", body: "Ergebnisse werden automatisch erzeugt und können Fehler enthalten — bitte prüfen." },
      { heading: "Verfügbarkeit", body: "Der Dienst kann wegen Wartung oder Anbieter-Limits pausieren." },
    ],
  },
};

const es: Pages = {
  support: {
    title: "Soporte",
    lead: "Estamos aquí para cualquier problema técnico o duda sobre StudyWise.",
    sections: [
      { heading: "Problemas de generación", body: "Si un resultado falla, usa el botón Regenerar. Si continúa, envíanos el texto de la lección." },
      { heading: "Archivos y audio", body: "PDF, imágenes y texto hasta 5 MB, además de grabación de voz dentro del chat." },
      { heading: "Sugerencias", body: "Cuéntanos qué idiomas o formatos necesitas: los más pedidos llegan primero." },
    ],
  },
  about: {
    title: "Sobre nosotros",
    lead: "StudyWise AI convierte cualquier lección en resumen, tarjetas o mapa mental, en seis idiomas.",
    sections: [
      { heading: "Por qué", body: "Se pierde mucho tiempo reorganizando información en lugar de entenderla. Nosotros ordenamos, tú aprendes." },
      { heading: "Cómo", body: "Solo usamos el texto que envías, sin inventar datos, para respetar tu fuente." },
      { heading: "Idiomas", body: "Árabe, francés, inglés, alemán, español y portugués, con soporte completo de dirección de escritura." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    lead: "Respuestas rápidas a lo más consultado.",
    sections: [
      { heading: "¿Necesito cuenta?", body: "No. Todo funciona de inmediato y tus conversaciones se guardan en tu dispositivo." },
      { heading: "¿Puedo cambiar de formato?", body: "Sí, tras el resultado puedes convertir la misma lección a otro formato." },
      { heading: "¿Guardan mis lecciones?", body: "No. El texto solo se procesa para generar el resultado, que queda en tu navegador." },
    ],
  },
  help: {
    title: "Centro de ayuda",
    lead: "Guía rápida para aprovechar StudyWise.",
    sections: [
      { heading: "1. Elige formato", body: "Resumen para repasar rápido, tarjetas para memorizar, mapa mental para conectar ideas." },
      { heading: "2. Envía la lección", body: "Pega texto, sube un PDF o imagen, o graba tu voz y la transcribimos." },
      { heading: "3. Sigue estudiando", body: "Usa los botones de seguimiento para evaluarte, extraer términos o simplificar." },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    lead: "La privacidad forma parte del diseño.",
    sections: [
      { heading: "Qué recogemos", body: "Ni nombre, ni correo, ni cuentas, ni rastreadores publicitarios." },
      { heading: "Dónde se guardan los chats", body: "En el almacenamiento local del navegador; puedes borrarlos desde Mi cuenta." },
      { heading: "Procesamiento", body: "La lección se envía al proveedor de IA solo para generar el resultado." },
    ],
  },
  terms: {
    title: "Términos de uso",
    lead: "Reglas simples que protegen a todos.",
    sections: [
      { heading: "Uso permitido", body: "Herramienta educativa de uso personal. No subas contenido ilegal o ajeno." },
      { heading: "Exactitud", body: "Los resultados son automáticos y pueden contener errores; revísalos." },
      { heading: "Disponibilidad", body: "El servicio puede pausarse por mantenimiento o límites del proveedor de IA." },
    ],
  },
};

const pt: Pages = {
  support: {
    title: "Suporte",
    lead: "Estamos aqui para qualquer problema técnico ou dúvida sobre o StudyWise.",
    sections: [
      { heading: "Problemas de geração", body: "Se um resultado falhar, use o botão Gerar novamente. Se persistir, envie-nos o texto da lição." },
      { heading: "Arquivos e áudio", body: "PDF, imagens e texto até 5 MB, além de gravação de voz dentro do chat." },
      { heading: "Sugestões", body: "Diga quais idiomas ou formatos faltam: os mais pedidos vêm primeiro." },
    ],
  },
  about: {
    title: "Sobre nós",
    lead: "O StudyWise AI transforma qualquer lição em resumo, cartões ou mapa mental, em seis idiomas.",
    sections: [
      { heading: "Por quê", body: "Perde-se tempo demais reorganizando informação em vez de entendê-la. Nós organizamos, você aprende." },
      { heading: "Como", body: "Usamos apenas o texto enviado, sem inventar fatos, mantendo fidelidade à sua fonte." },
      { heading: "Idiomas", body: "Árabe, francês, inglês, alemão, espanhol e português, com suporte completo de direção de escrita." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    lead: "Respostas rápidas às dúvidas mais comuns.",
    sections: [
      { heading: "Preciso de conta?", body: "Não. Tudo funciona de imediato e suas conversas ficam no seu dispositivo." },
      { heading: "Posso mudar de formato depois?", body: "Sim, após o resultado você pode converter a mesma lição em outro formato." },
      { heading: "Vocês guardam minhas lições?", body: "Não. O texto é processado apenas para gerar o resultado, que fica no seu navegador." },
    ],
  },
  help: {
    title: "Central de ajuda",
    lead: "Guia rápido para aproveitar o StudyWise.",
    sections: [
      { heading: "1. Escolha o formato", body: "Resumo para revisar rápido, cartões para memorizar, mapa mental para conectar ideias." },
      { heading: "2. Envie a lição", body: "Cole o texto, envie um PDF ou imagem, ou grave sua voz e nós transcrevemos." },
      { heading: "3. Continue estudando", body: "Use os botões de acompanhamento para se testar, extrair termos ou simplificar." },
    ],
  },
  privacy: {
    title: "Política de privacidade",
    lead: "Privacidade faz parte do projeto.",
    sections: [
      { heading: "O que coletamos", body: "Sem nome, sem e-mail, sem contas e sem rastreadores de publicidade." },
      { heading: "Onde ficam as conversas", body: "No armazenamento local do navegador; apague tudo pela página Minha conta." },
      { heading: "Processamento", body: "A lição vai ao provedor de IA apenas para gerar o resultado." },
    ],
  },
  terms: {
    title: "Termos de uso",
    lead: "Regras simples que protegem todos.",
    sections: [
      { heading: "Uso permitido", body: "Ferramenta educacional de uso pessoal. Não envie conteúdo ilegal ou de terceiros." },
      { heading: "Precisão", body: "Os resultados são automáticos e podem conter erros; revise antes de usar." },
      { heading: "Disponibilidade", body: "O serviço pode pausar por manutenção ou limites do provedor de IA." },
    ],
  },
};

export const sitePages: Record<LanguageCode, Pages> = { ar, fr, en, de, es, pt };

export function infoPage(language: LanguageCode, topic: InfoTopic) {
  return sitePages[language]?.[topic] ?? sitePages.ar[topic];
}

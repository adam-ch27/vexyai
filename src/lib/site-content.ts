import type { LanguageCode } from "./i18n";

export const infoTopics = ["support", "about", "faq", "help", "privacy", "terms"] as const;
export type InfoTopic = (typeof infoTopics)[number];

export type InfoPage = {
  title: string;
  lead: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
};

type Pages = Record<InfoTopic, InfoPage>;

export const contactEmail = "hello@studywise.ai";
export const authorName = "Adam Cheouati";

const ar: Pages = {
  support: {
    title: "الدعم والتواصل",
    lead: "فريق StudyWise موجود لمساعدتك في أي مشكلة تقنية أو سؤال حول طريقة الاستخدام، ونحرص أن يصلك رد واضح وسريع.",
    highlights: ["رد خلال 24 ساعة", "دعم بست لغات", "بدون حساب ولا اشتراك"],
    sections: [
      { heading: "مشاكل في التوليد", body: "إذا توقف التوليد أو ظهرت رسالة خطأ، جرّب زر «إعادة التوليد» أولًا؛ فأغلب الأخطاء مؤقتة وتنتج عن ضغط على الخدمة. إن تكرر الأمر أرسل لنا نص الدرس والوقت التقريبي واللغة التي كنت تستخدمها." },
      { heading: "الملفات والصوت", body: "ندعم رفع ملفات PDF والصور والنصوص حتى 5 ميجابايت، إضافة إلى التسجيل الصوتي المباشر داخل صفحة المحادثة. إن كان الملف ممسوحًا ضوئيًا بجودة منخفضة فقد يخرج النص ناقصًا؛ صوّر الصفحة في إضاءة جيدة لنتيجة أدق." },
      { heading: "جودة النتائج", body: "كلما كان النص المُرسل مرتبًا وكاملًا، كانت الملخصات والبطاقات أدق. تجنّب إرسال جزء مبتور من الدرس، وأضف عنوان الفصل إن أمكن ليعرف المساعد سياق الموضوع." },
      { heading: "طلب ميزة", body: "نستقبل اقتراحاتك حول لغات جديدة أو صيغ مراجعة إضافية مثل الجداول الزمنية أو التمارين المتدرّجة، ونضيف الأكثر طلبًا أولًا." },
      { heading: "الإبلاغ عن خطأ في المحتوى", body: "إن لاحظت معلومة غير دقيقة في نتيجة مولّدة، أرسل لنا لقطة الشاشة ونص الدرس؛ نستخدم هذه البلاغات لتحسين التعليمات الموجهة للنموذج." },
    ],
  },
  about: {
    title: "معلومات عنا",
    lead: "StudyWise AI أداة مذاكرة تحوّل أي درس إلى ملخص أو بطاقات أو خريطة ذهنية بست لغات، بتصميم هادئ يركّز على الفهم لا على الزخرفة.",
    highlights: ["ست لغات", "ثلاث صيغ مراجعة", "خصوصية أولًا"],
    sections: [
      { heading: "لماذا بدأنا", body: "لأن أغلب وقت المذاكرة يضيع في إعادة ترتيب المعلومات بدل فهمها: تلخيص يدوي، بحث عن الفكرة الأساسية، إعادة كتابة. نحن نتكفل بالترتيب وأنت تتكفل بالفهم." },
      { heading: "كيف نعمل", body: "نحلّل النص الذي ترسله فقط، ولا نضيف معلومات من خارجه، حتى تبقى المراجعة أمينة لمصدرك الدراسي ولا تفاجئك معلومة ليست في المنهج." },
      { heading: "الصيغ الثلاث", body: "الملخص لالتقاط الصورة الكاملة بسرعة، البطاقات لاختبار الاسترجاع النشط، والخريطة الذهنية لرؤية العلاقات بين الأفكار. ويمكنك التنقل بين الصيغ الثلاث لنفس الدرس بضغطة واحدة." },
      { heading: "اللغات", body: "العربية والفرنسية والإنجليزية والألمانية والإسبانية والبرتغالية، مع دعم كامل لاتجاه الكتابة من اليمين ومن اليسار." },
      { heading: "من يقف خلف الأداة", body: `تصميم وتطوير ${authorName}. المشروع يتطوّر باستمرار بناءً على ملاحظات الطلاب الذين يستخدمونه يوميًا.` },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    lead: "إجابات سريعة عن أكثر ما يُسأل عنه قبل الاستخدام وأثناءه.",
    highlights: ["بلا تسجيل دخول", "مجاني للاستخدام الدراسي", "يعمل على الهاتف"],
    sections: [
      { heading: "هل أحتاج حسابًا؟", body: "لا. يمكنك استخدام كل الميزات مباشرة، وتُحفظ محادثاتك محليًا على جهازك. تسجيل الدخول قادم لاحقًا لمن يريد مزامنة محادثاته بين الأجهزة." },
      { heading: "هل يمكن تغيير الصيغة بعد الإرسال؟", body: "نعم، بعد ظهور النتيجة تجد أزرارًا لتحويل الدرس نفسه إلى ملخص أو بطاقات أو خريطة ذهنية دون إعادة كتابة النص." },
      { heading: "هل تُحفظ دروسي على خوادمكم؟", body: "لا نخزّن دروسك؛ يُرسل النص للمعالجة ثم تُعرض النتيجة وتُحفظ على جهازك فقط." },
      { heading: "ما أطول درس يمكن إرساله؟", body: "يمكنك إرسال نص طويل يصل إلى عدة آلاف من الكلمات. إن كان الدرس ضخمًا، قسّمه إلى فصول لتحصل على ملخص أدق لكل جزء." },
      { heading: "هل النتائج مناسبة للامتحان؟", body: "هي أداة مراجعة ممتازة، لكنها مولّدة آليًا؛ راجعها مقابل كتابك المدرسي قبل الاعتماد عليها نهائيًا." },
      { heading: "لماذا اختفت محادثاتي؟", body: "لأنها محفوظة في متصفحك؛ إن مسحت بيانات المتصفح أو استخدمت جهازًا آخر فلن تظهر. صفحة «حسابي» تعرض كل ما هو محفوظ حاليًا." },
    ],
  },
  help: {
    title: "مركز المساعدة",
    lead: "دليل سريع لاستخدام StudyWise بأفضل شكل، من أول درس حتى المراجعة النهائية.",
    highlights: ["ثلاث خطوات فقط", "نص أو ملف أو صوت", "اقتراحات متابعة ذكية"],
    sections: [
      { heading: "١. اختر الصيغة", body: "ملخص للمراجعة السريعة، بطاقات لاختبار الذاكرة، خريطة ذهنية لربط الأفكار. اختيار الصيغة يوجّه المساعد نحو الشكل الذي يناسب هدفك." },
      { heading: "٢. أرسل الدرس", body: "الصق النص أو ارفع ملف PDF أو صورة، أو سجّل صوتك وسنحوّله إلى نص تلقائيًا. زر الإرسال موجود في طرف صندوق الكتابة." },
      { heading: "٣. تابع المذاكرة", body: "استخدم أزرار الاقتراحات فوق صندوق الإرسال لاختبار نفسك أو استخراج المصطلحات أو تبسيط الشرح، وهي تتغيّر في كل مرة لتقترح زوايا جديدة." },
      { heading: "صورة الخريطة الذهنية", body: "بعد توليد خريطة ذهنية يمكنك إنشاء صورة ملوّنة منها بأسلوب الرسوم التعليمية، ثم تحميلها واستخدامها في مراجعتك أو مشاركتها مع زملائك." },
      { heading: "سجل المحادثات", body: "افتح الشريط الجانبي من الزر أعلى الصفحة للعودة إلى أي محادثة سابقة أو حذفها أو بدء محادثة جديدة." },
      { heading: "نصائح للحصول على أفضل نتيجة", body: "أرسل الدرس كاملًا لا مقاطع متفرقة، حدّد اللغة التي تريد النتيجة بها من قائمة اللغات، واستخدم «إعادة التوليد» إذا أردت صياغة مختلفة." },
    ],
  },
  privacy: {
    title: "سياسة الخصوصية",
    lead: "خصوصيتك أساس التصميم، لا إضافة لاحقة: لا حسابات، لا إعلانات، ولا ملفات تتبع.",
    highlights: ["بلا حسابات", "بلا تتبع إعلاني", "تخزين محلي فقط"],
    sections: [
      { heading: "ما نجمعه", body: "لا نطلب اسمًا ولا بريدًا للاستخدام. لا توجد حسابات ولا ملفات تتبع إعلانية ولا بيع لأي بيانات." },
      { heading: "أين تُحفظ محادثاتك", body: "في متصفحك عبر التخزين المحلي على جهازك، ويمكنك حذفها كلها بضغطة واحدة من صفحة «حسابي»." },
      { heading: "المعالجة", body: "يُرسل نص الدرس أو الملف إلى مزود الذكاء الاصطناعي لغرض التوليد فقط، ولا يُستخدم لتدريب نماذج، ولا يُحتفظ به لدينا بعد عرض النتيجة." },
      { heading: "الصوت والصور", body: "التسجيل الصوتي يُحوّل إلى نص ثم يُتخلص من الملف الصوتي مباشرة. الصور وملفات PDF تُعالج لاستخراج النص فقط." },
      { heading: "حقوقك", body: "بما أن كل شيء محفوظ على جهازك، فأنت المتحكم الكامل: يمكنك حذف محادثة واحدة أو مسح السجل بالكامل في أي لحظة دون طلب منا." },
    ],
  },
  terms: {
    title: "شروط الاستخدام",
    lead: "قواعد بسيطة وواضحة تحمي الجميع وتضمن بقاء الخدمة مفيدة للطلاب.",
    highlights: ["استخدام دراسي", "احترام حقوق النشر", "نتائج تحتاج مراجعة"],
    sections: [
      { heading: "الاستخدام المسموح", body: "StudyWise أداة تعليمية للاستخدام الشخصي والدراسي. لا ترفع محتوى غير قانوني أو لا تملك حقوقه." },
      { heading: "دقة النتائج", body: "النتائج مولّدة آليًا وقد تحتوي أخطاء؛ راجعها قبل الاعتماد عليها في امتحان أو بحث. الأداة مساعد مراجعة لا بديل عن المنهج أو المعلم." },
      { heading: "النزاهة الأكاديمية", body: "استخدم النتائج للفهم والمراجعة، لا لتقديمها كعمل شخصي حيث تمنع مؤسستك ذلك." },
      { heading: "التوفر", body: "قد تتوقف الخدمة مؤقتًا للصيانة أو بسبب حدود الاستخدام لدى مزود الذكاء الاصطناعي، ونعمل على استعادتها بأسرع وقت." },
      { heading: "التعديلات", body: "قد نحدّث هذه الشروط مع تطور الأداة، وسيظهر أي تغيير مهم في هذه الصفحة." },
    ],
  },
};

const en: Pages = {
  support: {
    title: "Support",
    lead: "We're here for any technical issue or question about using StudyWise, and we aim for a clear answer fast.",
    highlights: ["Reply within 24h", "Support in six languages", "No account needed"],
    sections: [
      { heading: "Generation issues", body: "If a result fails, use the Regenerate button first — most errors are temporary. If it keeps failing, send us the lesson text, the language you used and roughly when it happened." },
      { heading: "Files and audio", body: "We support PDF, image and text uploads up to 5 MB, plus live voice recording inside the chat page. Low-quality scans may produce partial text, so shoot the page in good light." },
      { heading: "Result quality", body: "The tidier and more complete your text, the sharper the summary or cards. Avoid truncated fragments and include the chapter title when you can." },
      { heading: "Feature requests", body: "Tell us which languages or review formats you need — timelines, graded exercises, anything — and the most requested ones ship first." },
      { heading: "Reporting a content error", body: "If a generated result looks inaccurate, send the screenshot and the source text. We use those reports to improve the instructions we give the model." },
    ],
  },
  about: {
    title: "About us",
    lead: "StudyWise AI turns any lesson into a summary, flashcards or a mind map, in six languages, with a calm design built around understanding.",
    highlights: ["Six languages", "Three review formats", "Privacy first"],
    sections: [
      { heading: "Why we started", body: "Most study time is lost reorganising information instead of understanding it: manual summarising, hunting for the main idea, rewriting. We handle the structure, you handle the learning." },
      { heading: "How we work", body: "We only use the text you send and never invent facts, so your review stays faithful to your source and never surprises you with off-syllabus material." },
      { heading: "The three formats", body: "Summary for the full picture fast, flashcards for active recall, mind map to see how ideas connect — and you can switch between all three for the same lesson in one click." },
      { heading: "Languages", body: "Arabic, French, English, German, Spanish and Portuguese, with full right-to-left and left-to-right support." },
      { heading: "Who is behind it", body: `Designed and built by ${authorName}, and improved continuously from the feedback of students who use it every day.` },
    ],
  },
  faq: {
    title: "FAQ",
    lead: "Quick answers to the most common questions, before and during use.",
    highlights: ["No sign-in", "Free for study use", "Works on mobile"],
    sections: [
      { heading: "Do I need an account?", body: "No. Every feature works right away and your chats are stored locally on your device. Sign-in is coming later for anyone who wants to sync across devices." },
      { heading: "Can I switch format after sending?", body: "Yes. Once a result appears you can turn the same lesson into a summary, flashcards or a mind map without retyping anything." },
      { heading: "Are my lessons stored on your servers?", body: "No. Text is processed to produce the result, then kept only in your browser." },
      { heading: "How long can a lesson be?", body: "Several thousand words work fine. For a very large chapter, split it into parts to get a sharper result for each one." },
      { heading: "Can I rely on results for an exam?", body: "They're an excellent revision aid, but they're generated automatically — check them against your textbook before relying on them." },
      { heading: "Why did my chats disappear?", body: "They live in your browser. Clearing browser data or switching devices removes them. The Account page shows everything currently saved." },
    ],
  },
  help: {
    title: "Help center",
    lead: "A quick guide to getting the most out of StudyWise, from your first lesson to final revision.",
    highlights: ["Three steps", "Text, file or voice", "Smart follow-ups"],
    sections: [
      { heading: "1. Pick a format", body: "Summary for fast review, flashcards to test recall, mind map to connect ideas. The format steers the assistant toward the shape that fits your goal." },
      { heading: "2. Send the lesson", body: "Paste text, upload a PDF or image, or record your voice and we transcribe it automatically. The send button sits at the end of the writing box." },
      { heading: "3. Keep studying", body: "Use the suggestion buttons above the send box to quiz yourself, extract key terms or simplify the explanation — they change each time to offer fresh angles." },
      { heading: "Mind map image", body: "After a mind map is generated you can create a colourful illustrated version of it, then download it for your notes or share it with classmates." },
      { heading: "Chat history", body: "Open the side panel from the button at the top of the page to return to a past conversation, delete it, or start a new one." },
      { heading: "Tips for better results", body: "Send the full lesson rather than scattered fragments, choose your output language from the language menu, and use Regenerate for a different phrasing." },
    ],
  },
  privacy: {
    title: "Privacy policy",
    lead: "Privacy is part of the design, not an afterthought: no accounts, no ads, no trackers.",
    highlights: ["No accounts", "No ad tracking", "Local storage only"],
    sections: [
      { heading: "What we collect", body: "No name, no email, no accounts, no advertising trackers, and no data sold to anyone." },
      { heading: "Where chats live", body: "In your browser's local storage on your device. You can erase everything with one tap from the Account page." },
      { heading: "Processing", body: "Your lesson is sent to the AI provider only to generate the result, is not used to train models, and is not kept by us afterwards." },
      { heading: "Audio and images", body: "Voice recordings are transcribed and the audio is discarded immediately. Images and PDFs are processed only to extract their text." },
      { heading: "Your rights", body: "Because everything is on your device, you are fully in control: delete a single chat or wipe the whole history at any moment, no request needed." },
    ],
  },
  terms: {
    title: "Terms of use",
    lead: "Simple, clear rules that protect everyone and keep the service useful for students.",
    highlights: ["Study use", "Respect copyright", "Always review results"],
    sections: [
      { heading: "Allowed use", body: "StudyWise is an educational tool for personal study. Don't upload illegal content or material you don't own." },
      { heading: "Accuracy", body: "Results are generated automatically and may contain mistakes; review them before relying on them. This is a revision aid, not a replacement for your course or teacher." },
      { heading: "Academic integrity", body: "Use results to understand and revise, not to submit as your own work where your institution forbids it." },
      { heading: "Availability", body: "Service may pause for maintenance or because of AI provider usage limits; we restore it as quickly as we can." },
      { heading: "Changes", body: "These terms may be updated as the tool evolves, and any meaningful change will appear on this page." },
    ],
  },
};

const fr: Pages = {
  support: {
    title: "Assistance",
    lead: "Nous sommes là pour tout problème technique ou question sur StudyWise, avec une réponse claire et rapide.",
    highlights: ["Réponse sous 24 h", "Six langues", "Sans compte"],
    sections: [
      { heading: "Problèmes de génération", body: "Si un résultat échoue, utilisez d'abord le bouton Régénérer : la plupart des erreurs sont temporaires. Si cela persiste, envoyez-nous le texte de la leçon et la langue utilisée." },
      { heading: "Fichiers et audio", body: "PDF, images et texte jusqu'à 5 Mo, plus l'enregistrement vocal directement dans la page de conversation. Un scan de faible qualité peut donner un texte incomplet." },
      { heading: "Qualité des résultats", body: "Plus votre texte est complet et ordonné, plus le résumé et les cartes sont précis. Évitez les fragments tronqués et ajoutez le titre du chapitre." },
      { heading: "Demande de fonctionnalité", body: "Dites-nous quelles langues ou quels formats vous manquent : les plus demandés arrivent en premier." },
      { heading: "Signaler une erreur de contenu", body: "Si un résultat semble inexact, envoyez la capture et le texte source ; ces retours améliorent les consignes données au modèle." },
    ],
  },
  about: {
    title: "À propos",
    lead: "StudyWise AI transforme n'importe quelle leçon en résumé, cartes mémoire ou carte mentale, en six langues, avec un design calme centré sur la compréhension.",
    highlights: ["Six langues", "Trois formats", "Confidentialité d'abord"],
    sections: [
      { heading: "Pourquoi", body: "Trop de temps est perdu à réorganiser l'information au lieu de la comprendre : résumer à la main, chercher l'idée principale, réécrire. Nous structurons, vous apprenez." },
      { heading: "Comment", body: "Nous n'utilisons que le texte envoyé, sans inventer de faits, pour rester fidèles à votre source et ne jamais sortir du programme." },
      { heading: "Les trois formats", body: "Le résumé pour la vue d'ensemble, les cartes pour la mémorisation active, la carte mentale pour relier les idées — et vous passez de l'un à l'autre en un clic." },
      { heading: "Langues", body: "Arabe, français, anglais, allemand, espagnol et portugais, avec gestion complète du sens d'écriture." },
      { heading: "Qui est derrière", body: `Conçu et développé par ${authorName}, et amélioré en continu grâce aux retours des étudiants.` },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    lead: "Des réponses rapides aux questions les plus courantes.",
    highlights: ["Sans connexion", "Gratuit pour étudier", "Fonctionne sur mobile"],
    sections: [
      { heading: "Faut-il un compte ?", body: "Non. Tout fonctionne immédiatement et vos conversations restent sur votre appareil. La connexion arrivera pour synchroniser entre appareils." },
      { heading: "Changer de format après l'envoi ?", body: "Oui, après un résultat vous pouvez convertir la même leçon en résumé, cartes ou carte mentale sans rien retaper." },
      { heading: "Mes leçons sont-elles stockées ?", body: "Non. Le texte sert uniquement à générer le résultat, conservé ensuite dans votre navigateur." },
      { heading: "Quelle longueur maximale ?", body: "Plusieurs milliers de mots passent sans souci. Pour un très gros chapitre, découpez-le en parties." },
      { heading: "Puis-je m'y fier pour un examen ?", body: "C'est une excellente aide à la révision, mais générée automatiquement : vérifiez avec votre manuel." },
      { heading: "Pourquoi mes conversations ont disparu ?", body: "Elles vivent dans votre navigateur : effacer ses données ou changer d'appareil les supprime." },
    ],
  },
  help: {
    title: "Centre d'aide",
    lead: "Un guide rapide pour bien utiliser StudyWise, de la première leçon à la révision finale.",
    highlights: ["Trois étapes", "Texte, fichier ou voix", "Suggestions variées"],
    sections: [
      { heading: "1. Choisir un format", body: "Résumé pour réviser vite, cartes pour tester la mémoire, carte mentale pour relier les idées." },
      { heading: "2. Envoyer la leçon", body: "Collez le texte, importez un PDF ou une image, ou enregistrez votre voix : nous la transcrivons. Le bouton d'envoi est au bout de la zone de saisie." },
      { heading: "3. Continuer", body: "Utilisez les suggestions au-dessus de la zone d'envoi pour vous tester, extraire les termes ou simplifier : elles changent à chaque fois." },
      { heading: "Image de la carte mentale", body: "Après une carte mentale, générez-en une version illustrée en couleurs, puis téléchargez-la pour vos fiches." },
      { heading: "Historique", body: "Ouvrez le panneau latéral depuis le bouton en haut de la page pour retrouver, supprimer ou démarrer une conversation." },
      { heading: "Conseils", body: "Envoyez la leçon entière, choisissez la langue de sortie dans le menu, et utilisez Régénérer pour une autre formulation." },
    ],
  },
  privacy: {
    title: "Confidentialité",
    lead: "La confidentialité fait partie de la conception : pas de compte, pas de publicité, pas de traceurs.",
    highlights: ["Aucun compte", "Aucun traceur", "Stockage local"],
    sections: [
      { heading: "Ce que nous collectons", body: "Aucun nom, aucun e-mail, aucun compte, aucun traceur publicitaire, aucune revente de données." },
      { heading: "Où sont vos conversations", body: "Dans le stockage local de votre navigateur. Vous pouvez tout effacer depuis la page Mon compte." },
      { heading: "Traitement", body: "Votre leçon est envoyée au fournisseur d'IA uniquement pour générer le résultat, jamais pour entraîner des modèles." },
      { heading: "Audio et images", body: "Les enregistrements sont transcrits puis supprimés. Images et PDF servent uniquement à extraire le texte." },
      { heading: "Vos droits", body: "Tout étant sur votre appareil, vous gardez le contrôle total : supprimez une conversation ou tout l'historique quand vous voulez." },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    lead: "Des règles simples qui protègent tout le monde.",
    highlights: ["Usage scolaire", "Respect des droits", "Vérifiez les résultats"],
    sections: [
      { heading: "Usage autorisé", body: "Outil éducatif à usage personnel. N'importez pas de contenu illégal ou dont vous n'avez pas les droits." },
      { heading: "Exactitude", body: "Les résultats sont générés automatiquement et peuvent contenir des erreurs : vérifiez-les. L'outil complète le cours, il ne le remplace pas." },
      { heading: "Intégrité académique", body: "Utilisez les résultats pour comprendre et réviser, pas pour les rendre comme travail personnel si votre établissement l'interdit." },
      { heading: "Disponibilité", body: "Le service peut être interrompu pour maintenance ou limites d'usage du fournisseur d'IA." },
      { heading: "Modifications", body: "Ces conditions peuvent évoluer ; tout changement important apparaîtra sur cette page." },
    ],
  },
};

const de: Pages = {
  support: {
    title: "Support",
    lead: "Wir helfen bei technischen Problemen und Fragen zu StudyWise — klar und schnell.",
    highlights: ["Antwort in 24 Std.", "Sechs Sprachen", "Ohne Konto"],
    sections: [
      { heading: "Probleme beim Erstellen", body: "Schlägt ein Ergebnis fehl, nutze zuerst «Neu erstellen» — die meisten Fehler sind vorübergehend. Bleibt es dabei, schick uns den Lektionstext und die Sprache." },
      { heading: "Dateien und Audio", body: "PDF, Bilder und Text bis 5 MB sowie Sprachaufnahme direkt im Chat. Schlechte Scans liefern nur Teiltexte." },
      { heading: "Qualität der Ergebnisse", body: "Je vollständiger und geordneter dein Text, desto präziser Zusammenfassung und Karten. Vermeide abgeschnittene Ausschnitte." },
      { heading: "Wunsch einreichen", body: "Sag uns, welche Sprachen oder Formate dir fehlen — die häufigsten kommen zuerst." },
      { heading: "Inhaltsfehler melden", body: "Wirkt ein Ergebnis ungenau, schick Screenshot und Quelltext; das verbessert die Anweisungen an das Modell." },
    ],
  },
  about: {
    title: "Über uns",
    lead: "StudyWise AI verwandelt jede Lektion in Zusammenfassung, Lernkarten oder Mindmap — in sechs Sprachen, mit ruhigem Design fürs Verstehen.",
    highlights: ["Sechs Sprachen", "Drei Formate", "Datenschutz zuerst"],
    sections: [
      { heading: "Warum", body: "Lernzeit geht meist fürs Sortieren drauf statt fürs Verstehen: zusammenfassen, Kernidee suchen, neu schreiben. Wir sortieren, du lernst." },
      { heading: "Wie", body: "Wir nutzen nur deinen Text und erfinden nichts dazu, damit alles quellentreu bleibt." },
      { heading: "Die drei Formate", body: "Zusammenfassung für den Überblick, Karten fürs aktive Abrufen, Mindmap für Zusammenhänge — mit einem Klick wechselbar." },
      { heading: "Sprachen", body: "Arabisch, Französisch, Englisch, Deutsch, Spanisch und Portugiesisch mit voller Schreibrichtung." },
      { heading: "Wer dahintersteht", body: `Entworfen und entwickelt von ${authorName}, laufend verbessert durch das Feedback von Lernenden.` },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    lead: "Kurze Antworten auf die häufigsten Fragen.",
    highlights: ["Ohne Anmeldung", "Kostenlos zum Lernen", "Mobil nutzbar"],
    sections: [
      { heading: "Brauche ich ein Konto?", body: "Nein. Alles funktioniert sofort, Chats bleiben lokal auf deinem Gerät. Eine Anmeldung folgt für die Synchronisierung." },
      { heading: "Format nachträglich wechseln?", body: "Ja, nach dem Ergebnis kannst du dieselbe Lektion in ein anderes Format umwandeln." },
      { heading: "Werden Lektionen gespeichert?", body: "Nein, der Text dient nur der Erstellung und bleibt danach in deinem Browser." },
      { heading: "Wie lang darf eine Lektion sein?", body: "Mehrere tausend Wörter sind kein Problem. Sehr große Kapitel besser aufteilen." },
      { heading: "Kann ich mich für Prüfungen darauf verlassen?", body: "Als Lernhilfe ja, aber prüfe die Ergebnisse gegen dein Lehrbuch." },
      { heading: "Warum sind meine Chats weg?", body: "Sie liegen im Browser: Browserdaten löschen oder Gerätewechsel entfernt sie." },
    ],
  },
  help: {
    title: "Hilfecenter",
    lead: "Kurzanleitung für den besten Start — von der ersten Lektion bis zur Prüfungsvorbereitung.",
    highlights: ["Drei Schritte", "Text, Datei oder Stimme", "Wechselnde Vorschläge"],
    sections: [
      { heading: "1. Format wählen", body: "Zusammenfassung zum schnellen Wiederholen, Karten zum Abfragen, Mindmap zum Verknüpfen." },
      { heading: "2. Lektion senden", body: "Text einfügen, PDF oder Bild hochladen oder Stimme aufnehmen — wir transkribieren automatisch." },
      { heading: "3. Weiterlernen", body: "Nutze die Vorschläge über dem Sendefeld: testen, Begriffe extrahieren, einfacher erklären — sie wechseln jedes Mal." },
      { heading: "Mindmap-Bild", body: "Nach einer Mindmap kannst du eine farbige, illustrierte Version erzeugen und herunterladen." },
      { heading: "Chatverlauf", body: "Öffne die Seitenleiste über den Button oben, um frühere Chats zu öffnen, zu löschen oder neu zu starten." },
      { heading: "Tipps", body: "Sende die ganze Lektion, wähle die Zielsprache im Menü und nutze «Neu erstellen» für eine andere Formulierung." },
    ],
  },
  privacy: {
    title: "Datenschutz",
    lead: "Datenschutz ist Teil des Designs: keine Konten, keine Werbung, keine Tracker.",
    highlights: ["Keine Konten", "Kein Tracking", "Nur lokal"],
    sections: [
      { heading: "Was wir erheben", body: "Kein Name, keine E-Mail, keine Konten, keine Werbetracker, kein Datenverkauf." },
      { heading: "Wo Chats liegen", body: "Im lokalen Speicher deines Browsers; löschbar über die Kontoseite." },
      { heading: "Verarbeitung", body: "Deine Lektion geht nur zur Erstellung an den KI-Anbieter, nicht ins Modelltraining." },
      { heading: "Audio und Bilder", body: "Aufnahmen werden transkribiert und danach verworfen; Bilder und PDFs dienen nur der Textextraktion." },
      { heading: "Deine Rechte", body: "Alles liegt auf deinem Gerät — du löschst einzelne Chats oder den ganzen Verlauf jederzeit selbst." },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen",
    lead: "Einfache Regeln zum Schutz aller.",
    highlights: ["Lernzwecke", "Urheberrecht beachten", "Ergebnisse prüfen"],
    sections: [
      { heading: "Erlaubte Nutzung", body: "Lernwerkzeug für den persönlichen Gebrauch. Keine illegalen oder fremden Inhalte hochladen." },
      { heading: "Genauigkeit", body: "Ergebnisse werden automatisch erzeugt und können Fehler enthalten — bitte prüfen." },
      { heading: "Wissenschaftliche Redlichkeit", body: "Nutze Ergebnisse zum Verstehen und Wiederholen, nicht als eigene Abgabe, wo dies untersagt ist." },
      { heading: "Verfügbarkeit", body: "Der Dienst kann wegen Wartung oder Anbieter-Limits pausieren." },
      { heading: "Änderungen", body: "Diese Bedingungen können sich weiterentwickeln; wichtige Änderungen erscheinen hier." },
    ],
  },
};

const es: Pages = {
  support: {
    title: "Soporte",
    lead: "Estamos aquí para cualquier problema técnico o duda sobre StudyWise, con respuestas claras y rápidas.",
    highlights: ["Respuesta en 24 h", "Seis idiomas", "Sin cuenta"],
    sections: [
      { heading: "Problemas de generación", body: "Si un resultado falla, usa primero el botón Regenerar: la mayoría de errores son temporales. Si continúa, envíanos el texto y el idioma usado." },
      { heading: "Archivos y audio", body: "PDF, imágenes y texto hasta 5 MB, además de grabación de voz dentro del chat. Un escaneo de baja calidad puede dar texto incompleto." },
      { heading: "Calidad de resultados", body: "Cuanto más completo y ordenado sea el texto, más precisos serán el resumen y las tarjetas." },
      { heading: "Sugerencias", body: "Cuéntanos qué idiomas o formatos necesitas: los más pedidos llegan primero." },
      { heading: "Informar de un error", body: "Si un resultado parece inexacto, envía la captura y el texto original; así mejoramos las instrucciones del modelo." },
    ],
  },
  about: {
    title: "Sobre nosotros",
    lead: "StudyWise AI convierte cualquier lección en resumen, tarjetas o mapa mental, en seis idiomas, con un diseño tranquilo centrado en comprender.",
    highlights: ["Seis idiomas", "Tres formatos", "Privacidad primero"],
    sections: [
      { heading: "Por qué", body: "Se pierde mucho tiempo reorganizando información en lugar de entenderla. Nosotros ordenamos, tú aprendes." },
      { heading: "Cómo", body: "Solo usamos el texto que envías, sin inventar datos, para respetar tu fuente." },
      { heading: "Los tres formatos", body: "Resumen para la visión general, tarjetas para el recuerdo activo, mapa mental para conectar ideas: cambia entre ellos con un clic." },
      { heading: "Idiomas", body: "Árabe, francés, inglés, alemán, español y portugués, con soporte completo de dirección de escritura." },
      { heading: "Quién está detrás", body: `Diseñado y desarrollado por ${authorName}, y mejorado con los comentarios de quienes lo usan a diario.` },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    lead: "Respuestas rápidas a lo más consultado.",
    highlights: ["Sin registro", "Gratis para estudiar", "Funciona en el móvil"],
    sections: [
      { heading: "¿Necesito cuenta?", body: "No. Todo funciona de inmediato y tus conversaciones se guardan en tu dispositivo." },
      { heading: "¿Puedo cambiar de formato?", body: "Sí, tras el resultado puedes convertir la misma lección a otro formato." },
      { heading: "¿Guardan mis lecciones?", body: "No. El texto solo se procesa para generar el resultado, que queda en tu navegador." },
      { heading: "¿Cuál es la longitud máxima?", body: "Varios miles de palabras funcionan bien; divide los capítulos muy largos." },
      { heading: "¿Puedo confiar para un examen?", body: "Es una gran ayuda de repaso, pero contrasta siempre con tu libro." },
      { heading: "¿Por qué desaparecieron mis chats?", body: "Viven en tu navegador: borrar datos o cambiar de dispositivo los elimina." },
    ],
  },
  help: {
    title: "Centro de ayuda",
    lead: "Guía rápida para aprovechar StudyWise, desde la primera lección hasta el repaso final.",
    highlights: ["Tres pasos", "Texto, archivo o voz", "Sugerencias variadas"],
    sections: [
      { heading: "1. Elige formato", body: "Resumen para repasar rápido, tarjetas para memorizar, mapa mental para conectar ideas." },
      { heading: "2. Envía la lección", body: "Pega texto, sube un PDF o imagen, o graba tu voz y la transcribimos. El botón de enviar está al final del cuadro." },
      { heading: "3. Sigue estudiando", body: "Usa las sugerencias sobre el cuadro de envío para evaluarte, extraer términos o simplificar: cambian cada vez." },
      { heading: "Imagen del mapa mental", body: "Tras generar un mapa mental puedes crear una versión ilustrada a color y descargarla." },
      { heading: "Historial", body: "Abre el panel lateral con el botón superior para volver a una conversación, borrarla o crear una nueva." },
      { heading: "Consejos", body: "Envía la lección completa, elige el idioma de salida y usa Regenerar para otra redacción." },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    lead: "La privacidad forma parte del diseño: sin cuentas, sin anuncios, sin rastreadores.",
    highlights: ["Sin cuentas", "Sin rastreo", "Solo almacenamiento local"],
    sections: [
      { heading: "Qué recogemos", body: "Ni nombre, ni correo, ni cuentas, ni rastreadores publicitarios, ni venta de datos." },
      { heading: "Dónde se guardan los chats", body: "En el almacenamiento local del navegador; puedes borrarlos desde Mi cuenta." },
      { heading: "Procesamiento", body: "La lección se envía al proveedor de IA solo para generar el resultado, nunca para entrenar modelos." },
      { heading: "Audio e imágenes", body: "Las grabaciones se transcriben y se descartan; imágenes y PDF solo se usan para extraer texto." },
      { heading: "Tus derechos", body: "Todo está en tu dispositivo: borra una conversación o el historial completo cuando quieras." },
    ],
  },
  terms: {
    title: "Términos de uso",
    lead: "Reglas simples que protegen a todos.",
    highlights: ["Uso educativo", "Respeta los derechos", "Revisa los resultados"],
    sections: [
      { heading: "Uso permitido", body: "Herramienta educativa de uso personal. No subas contenido ilegal o ajeno." },
      { heading: "Exactitud", body: "Los resultados son automáticos y pueden contener errores; revísalos." },
      { heading: "Integridad académica", body: "Usa los resultados para entender y repasar, no para entregarlos como trabajo propio si tu centro lo prohíbe." },
      { heading: "Disponibilidad", body: "El servicio puede pausarse por mantenimiento o límites del proveedor de IA." },
      { heading: "Cambios", body: "Estos términos pueden actualizarse; los cambios importantes aparecerán aquí." },
    ],
  },
};

const pt: Pages = {
  support: {
    title: "Suporte",
    lead: "Estamos aqui para qualquer problema técnico ou dúvida sobre o StudyWise, com respostas claras e rápidas.",
    highlights: ["Resposta em 24 h", "Seis idiomas", "Sem conta"],
    sections: [
      { heading: "Problemas de geração", body: "Se um resultado falhar, use primeiro o botão Gerar novamente: a maioria dos erros é temporária. Se persistir, envie o texto e o idioma usado." },
      { heading: "Arquivos e áudio", body: "PDF, imagens e texto até 5 MB, além de gravação de voz dentro do chat. Digitalizações ruins geram texto incompleto." },
      { heading: "Qualidade dos resultados", body: "Quanto mais completo e organizado o texto, mais preciso o resumo e os cartões." },
      { heading: "Sugestões", body: "Diga quais idiomas ou formatos faltam: os mais pedidos vêm primeiro." },
      { heading: "Relatar erro de conteúdo", body: "Se um resultado parecer impreciso, envie a captura e o texto original; usamos isso para melhorar as instruções do modelo." },
    ],
  },
  about: {
    title: "Sobre nós",
    lead: "O StudyWise AI transforma qualquer lição em resumo, cartões ou mapa mental, em seis idiomas, com um design calmo voltado à compreensão.",
    highlights: ["Seis idiomas", "Três formatos", "Privacidade primeiro"],
    sections: [
      { heading: "Por quê", body: "Perde-se tempo demais reorganizando informação em vez de entendê-la. Nós organizamos, você aprende." },
      { heading: "Como", body: "Usamos apenas o texto enviado, sem inventar fatos, mantendo fidelidade à sua fonte." },
      { heading: "Os três formatos", body: "Resumo para a visão geral, cartões para recordação ativa, mapa mental para conectar ideias — alterne entre eles com um clique." },
      { heading: "Idiomas", body: "Árabe, francês, inglês, alemão, espanhol e português, com suporte completo de direção de escrita." },
      { heading: "Quem está por trás", body: `Concebido e desenvolvido por ${authorName}, com melhorias contínuas a partir do retorno de quem estuda todo dia.` },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    lead: "Respostas rápidas às dúvidas mais comuns.",
    highlights: ["Sem cadastro", "Gratuito para estudar", "Funciona no celular"],
    sections: [
      { heading: "Preciso de conta?", body: "Não. Tudo funciona de imediato e suas conversas ficam no seu dispositivo." },
      { heading: "Posso mudar de formato depois?", body: "Sim, após o resultado você pode converter a mesma lição em outro formato." },
      { heading: "Vocês guardam minhas lições?", body: "Não. O texto é processado apenas para gerar o resultado, que fica no seu navegador." },
      { heading: "Qual o tamanho máximo?", body: "Vários milhares de palavras funcionam bem; divida capítulos muito grandes." },
      { heading: "Posso confiar para a prova?", body: "É uma ótima ajuda de revisão, mas confira com o seu material." },
      { heading: "Por que minhas conversas sumiram?", body: "Elas ficam no navegador: limpar dados ou trocar de aparelho as remove." },
    ],
  },
  help: {
    title: "Central de ajuda",
    lead: "Guia rápido para aproveitar o StudyWise, da primeira lição à revisão final.",
    highlights: ["Três passos", "Texto, arquivo ou voz", "Sugestões variadas"],
    sections: [
      { heading: "1. Escolha o formato", body: "Resumo para revisar rápido, cartões para memorizar, mapa mental para conectar ideias." },
      { heading: "2. Envie a lição", body: "Cole o texto, envie um PDF ou imagem, ou grave sua voz e nós transcrevemos. O botão de envio fica no fim da caixa." },
      { heading: "3. Continue estudando", body: "Use as sugestões acima da caixa de envio para se testar, extrair termos ou simplificar: elas mudam a cada vez." },
      { heading: "Imagem do mapa mental", body: "Depois de gerar um mapa mental, crie uma versão ilustrada e colorida e baixe-a." },
      { heading: "Histórico", body: "Abra o painel lateral pelo botão no topo para voltar a uma conversa, excluí-la ou iniciar outra." },
      { heading: "Dicas", body: "Envie a lição inteira, escolha o idioma de saída e use Gerar novamente para outra redação." },
    ],
  },
  privacy: {
    title: "Política de privacidade",
    lead: "Privacidade faz parte do projeto: sem contas, sem anúncios, sem rastreadores.",
    highlights: ["Sem contas", "Sem rastreio", "Somente local"],
    sections: [
      { heading: "O que coletamos", body: "Sem nome, sem e-mail, sem contas, sem rastreadores de publicidade e sem venda de dados." },
      { heading: "Onde ficam as conversas", body: "No armazenamento local do navegador; apague tudo pela página Minha conta." },
      { heading: "Processamento", body: "A lição vai ao provedor de IA apenas para gerar o resultado, nunca para treinar modelos." },
      { heading: "Áudio e imagens", body: "Gravações são transcritas e descartadas; imagens e PDFs servem apenas para extrair texto." },
      { heading: "Seus direitos", body: "Tudo fica no seu aparelho: exclua uma conversa ou todo o histórico quando quiser." },
    ],
  },
  terms: {
    title: "Termos de uso",
    lead: "Regras simples que protegem todos.",
    highlights: ["Uso educacional", "Respeite direitos", "Revise os resultados"],
    sections: [
      { heading: "Uso permitido", body: "Ferramenta educacional de uso pessoal. Não envie conteúdo ilegal ou de terceiros." },
      { heading: "Precisão", body: "Os resultados são automáticos e podem conter erros; revise antes de usar." },
      { heading: "Integridade acadêmica", body: "Use os resultados para entender e revisar, não para entregar como trabalho próprio onde isso é proibido." },
      { heading: "Disponibilidade", body: "O serviço pode pausar por manutenção ou limites do provedor de IA." },
      { heading: "Alterações", body: "Estes termos podem mudar; alterações importantes aparecerão nesta página." },
    ],
  },
};

export const sitePages: Record<LanguageCode, Pages> = { ar, fr, en, de, es, pt };

export function infoPage(language: LanguageCode, topic: InfoTopic) {
  return sitePages[language]?.[topic] ?? sitePages.ar[topic];
}

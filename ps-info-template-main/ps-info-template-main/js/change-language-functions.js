var languageContent = {
    greek: {
      mainTitle: "Δελτίο Ανεργίας",
      pageTitle: "Δελτίο Ανεργίας",
      infoTitle: "Πληροφορίες για την χορήγηση Δελτίου Ανεργίας",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να εκδόσετε το δελτίο ανεργίαςνα λάβετε το δελτίο μετακίνησης ΑΜΕΑ.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε στα πλαίσια του μαθήματος της Ηλεκτρονικής Διακυβέρνησης κατά τη διάρκεια των προπτυχιακών μας σπουδών στο Πανεπιστήμιο Μακεδονίας. Η ομάδα μας αποτελείται από 2 φοιτητές της Εφαρμοσμένης Πληροφορικής:",
      and: "και",
      student1: "Παπανικολάου Μιχάλης",
      student2: "Ποντικάκος Λάζαρος",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
  };
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();

const questions = [
    {
        question: "Ang Doctrina Christiana ay ang Kauna-unahang aklat na nailimbag sa Pilipinas noong panahon ng mga Kastila. Ang paksang nakapaloob dito ay _______.",
        image: "", // Image for the question
        options: [
            { text: "Alamat ng mga sinaunang Pilipino", image: "" },
            { text: "Pagtuturo sa kasaysayan ng Pilipinas", image: "" },
            { text: "Mga gabay sa pagtuturo ng pananampalatayang Katoliko", image: "" },
            { text: "Pagbibigay inspirasyon sa mga rebolusyonaryong Pilipino", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Ang Senakulo ay isang dulang panrelihiyon noong panahon ng panitikang Espanyol. Ang karaniwang paksa nito ay ang _____.",
        image: "", // Image for the question
        options: [
            { text: "Buhay ng mga bayaning Pilipino", image: "" },
            { text: "Pagpapakita ng tradisyonal na kaugaliang Pilipino", image: "" },
            { text: "Buhay at pagpapakasakit ni Hesukristo", image: "" },
            { text: "Pakikibaka ng mga Pilipino laban sa mga Espanyol", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Tawag sa dula noong panahon ng Espanyol na naglalaman ng relihiyosong tema at labanan sa pagitan ng mga Kristiyano at Moro.",
        image: "", // Image for the question
        options: [
            { text: "Awit", image: "" },
            { text: "Korido", image: "" },
            { text: "Sarsuwela", image: "" },
            { text: "Moro-moro", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Ang pangunahing layunin ng mga akdang panrelihiyon noong panahon ng pananakop ng mga Espanyol ay ____.",
        image: "", // Image for the question
        options: [
            { text: "Magbigay-aliw sa mga tao", image: "" },
            { text: "Palaganapin ang Kristiyanismo", image: "" },
            { text: "Itaguyod ang kulturang Pilipino", image: "" },
            { text: "Ipakilala ang mga bagong teknolohiya", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Noong panahon ng pananakop ng mga Espanyol, mahalaga ang papel ng edukasyon sa pagbukas ng kaisipan ng mga Pilipino. Paano mo maisasabuhay ang aral na ito sa kasalukuyang panahon?",
        image: "", // Image for the question
        options: [
            { text: "Maging aktibo sa pag-aaral ng kasaysayan.", image: "" },
            { text: "Pagsuporta sa mga programang pang-edukasyon ng pamahalaan o NGO.", image: "" },
            { text: "Pagbabalewala sa mga isyu ng bansa dahil wala itong epekto sa personal na buhay.", image: "" },
            { text: "Mag-aaral nang mabuti at bumuo ng mga proyekto na makatutulong sa lipunan.", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Bilang isang mag-aaral sa kasalukuyang panahon, paano mo magagamit ang mga aral mula sa panitikan sa panahon ng Espanyol?",
        image: "", // Image for the question
        options: [
            { text: "Iwasang pag-usapan ang nakaraan.", image: "" },
            { text: "Maging malikhain sa gawaing ibibigay ng guro.", image: "" },
            { text: "Pumili ng mga lider na may malasakit sa mahihirap at inaapi.", image: "" },
            { text: "Maging mabuti, maalam, at may pagpapahalaga sa bayan.", image: "" }
        ],
        answer: 3 // Index of the cor,rect option
    },
    {
        question: "Ang makikitang pag-uugali ng mga tauhan pagdating sa pag-aaral batay sa teksto ay ______.",
        image: "7-8.png", // Image for the question
        options: [
            { text: "Hindi nagkukusa", image: "" },
            { text: "Mahusay mag-aral", image: "" },
            { text: "Masinop sa pag-aaral", image: "" },
            { text: "Naghahanda bago mag-aral", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Batay sa akda, ano ang ginagawa nila bago ang pag-uumpisa ng mga gawain?",
        image: "7-8.png", // Image for the question
        options: [
            { text: "Nag-aayuno", image: "" },
            { text: "Naghahanda", image: "" },
            { text: "Nananalangin", image: "" },
            { text: "Nanghihikayat", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Ang pinakamabisang paglalarawan sa layunin ng balita sa isang tekstong pampahayagan.",
        image: "", // Image for the question
        options: [
            { text: "Maglahad ng impormasyon at mga pangyayaring napapanahon.", image: "" },
            { text: "Magsulong ng personal na pananaw ng may-akda tungkol sa isyu.", image: "" },
            { text: "Mang-aliw gamit ang mga kuwento at kathang-isip na pangyayari.", image: "" },
            { text: "Magbigay ng mga opinyon ng manunulat tungkol sa isang isyu.", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Estruktura sa pagsulat ng balita na ginagamit kung ang isang balita ay nagsimula sa pinakamahalagang detalye at unti-unting nagbibigay ng di-gaanong mahalagang impormasyon.",
        image: "", // Image for the question
        options: [
            { text: "Inverted pyramid", image: "" },
            { text: "Balangkas ng kuwento", image: "" },
            { text: "Kuwentong kronolohikal", image: "" },
            { text: "Sanaysay na deskriptibo", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Ang Tibag ay isang dulang ________.",
        image: "", // Image for the question
        options: [
            { text: "Naglalarawan sa buhay ni Jose Rizal", image: "" },
            { text: "May temang pag-ibig sa panahon ng digmaan", image: "" },
            { text: "Tungkol sa paghihimagsik laban sa mga Kastila", image: "" },
            { text: "Nagsasaad ng paghahanap ni Santa Elena sa Banal na Krus", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Madalas ipinagdiriwang ang Tibag noong panahon ng pananakop ng Kastila sa ______.",
        image: "", // Image for the question
        options: [
            { text: "Mga parke", image: "" },
            { text: "Loob ng simbahan", image: "" },
            { text: "Palasyo ng mga Kastila", image: "" },
            { text: "Mga kalsada at harap ng mga tahanan", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Ipinakilala ng mga Kastila ang mga panitikang panrelihiyon sa pamamagitan ng tekstong ____.",
        image: "", // Image for the question
        options: [
            { text: "Nagbibigay diin sa karangyaan ng Espanya sa mga salaysay", image: "" },
            { text: "Nagsasalin ng mga panitikan ng Pilipinas sa wikang Espanyol", image: "" },
            { text: "Gumagamit ng lokal na wika upang maipaliwanag ang Kristiyanismo", image: "" },
            { text: "Nag-uugnay ng kasaysayan ng Pilipinas sa kultura ng mga katutubo", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Noong panahon ng himagsikan, ang paggamit ng wika ng may-akda ay nagpapakita ng pagtutol sa mga Kastilang mananakop. Layunin ng may-akda na gumamit ng ganitong konteksto upang _______.",
        image: "", // Image for the question
        options: [
            { text: "Ipakita ang pagsunod sa Kastila", image: "" },
            { text: "Magpakita ng paggalang sa mga Kastila", image: "" },
            { text: "Pagtutol sa hindi makatarungang pagtrato sa mga Pilipino", image: "" },
            { text: "Hikayatin ang mga Pilipino na tanggapin ang Kastilang kultura", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Anong arketipo ang madalas lumabas sa mga akdang pampanitikan mula sa panahon ng Pananakop ng Kastila na naglalarawan ng mga Pilipinong nagtatanggol sa kanilang kalayaan?",
        image: "", // Image for the question
        options: [
            { text: "Ang Bayani", image: "" },
            { text: "Ang Makata", image: "" },
            { text: "Ang Maginoo", image: "" },
            { text: "Ang Mandirigma", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Ang layunin ni Andres Bonifacio sa pagsulat ng akdang 'Ang Dapat Mabatid ng mga Tagalog'.",
        image: "", // Image for the question
        options: [
            { text: "Pukawin ang mga Pilipino sa pagkakahimlay.", image: "" },
            { text: "Himukin ang mga Pilipino na mag-alsa laban sa mga Espanyol.", image: "" },
            { text: "Himukin ang mga Pilipino na magpailalim sa mga Espanyol.", image: "" },
            { text: "Pukawin ang damdaming makabayan at kumilos laban sa mga mananakop.", image: "" }
        ],
        answer: 3 // Index of the correct option
    },
    {
        question: "Pangunahing layunin ng mga tulang isinulat sa Panahon ng Himagsikan.",
        image: "", // Image for the question
        options: [
            { text: "Magpahayag ng damdamin sa pakikibaka.", image: "" },
            { text: "Magbigay ng aliw o libangan sa mga mambabasa.", image: "" },
            { text: "Magtala ng mga personal na karanasan.", image: "" },
            { text: "Maglahad ng impormasyon at paliwanag tungkol sa isang paksa.", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Ito ay pangunahing elemento ng tekstong pampahayagan na tumutukoy sa pamagat ng balita.",
        image: "", // Image for the question
        options: [
            { text: "Artikulo", image: "" },
            { text: "Larawan", image: "" },
            { text: "Ulo ng balita", image: "" },
            { text: "Pahinang editoryal", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Bahagi ng tekstong pampahayagan ang naglalaman ng pinakamahalagang impormasyon sa isang balita.",
        image: "", // Image for the question
        options: [
            { text: "Simula (Lead)", image: "" },
            { text: "Katawan (Body)", image: "" },
            { text: "Wakas (Conclusion)", image: "" },
            { text: "Pamagat (Headline)", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Pangunahing katangian ng isang balitang obhetibo.",
        image: "", // Image for the question
        options: [
            { text: "Nagpapahayag ng opinyon ng awtor", image: "" },
            { text: "Batay sa tunay na pangyayari", image: "" },
            { text: "Gumagamit ng matatalinghagang salita", image: "" },
            { text: "Nagtatampok ng kathang-isip", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Uri ng pahayagan na karaniwang naglalaman ng mga balita tungkol sa kasalukuyang pangyayari sa bansa at sa mundo.",
        image: "", // Image for the question
        options: [
            { text: "Tabloid", image: "" },
            { text: "Broadsheet", image: "" },
            { text: "Komiks", image: "" },
            { text: "Magasin", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Pangunahing layunin ng headline sa isang pahayagan.",
        image: "", // Image for the question
        options: [
            { text: "Magbigay ng detalye tungkol sa balita.", image: "" },
            { text: "Hikayatin ang mambabasa na basahin ang buong balita.", image: "" },
            { text: "Ipahayag ang personal na pananaw ng sumulat.", image: "" },
            { text: "Magbigay ng opinyon tungkol sa isyu.", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Ang tawag sa bahagi ng balita na sumasagot sa mga tanong na sino, ano, saan, kailan, bakit, at paano.",
        image: "", // Image for the question
        options: [
            { text: "Lead", image: "" },
            { text: "Body", image: "" },
            { text: "Headline", image: "" },
            { text: "Editorial", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        question: "Estruktura na karaniwang ginagamit sa pagsulat ng balita.",
        image: "", // Image for the question
        options: [
            { text: "Pabuod (Pyramid)", image: "" },
            { text: "Baliktad na tatsulok (Inverted Pyramid)", image: "" },
            { text: "Sanhi at Bunga (Cause and Effect)", image: "" },
            { text: "Problema at Solusyon (Problem-Solution)", image: "" }
        ],
        answer: 1 // Index of the correct option
    },
    {
        question: "Alin sa sumusunod ang halimbawa ng pagtutumbas ng salita?",
        image: "", // Image for the question
        options: [
            { text: "Bahay at tahanan", image: "" },
            { text: "Kuwintas at nobela", image: "" },
            { text: "Pag-ibig at kalungkutan", image: "" },
            { text: "Pasakit at kasiyahan", image: "" }
        ],
        answer: 0 // Index of the correct option
    },
    {
        "question": "Ang papel ng pagtutumbas ng salita sa pag-unawa ng teksto ay magbigay ng ____.",
        "image": "",
        "options": [
            { "text": "Diin sa mga mahalagang impormasyon", "image": "" },
            { "text": "Pagkaiba-iba sa mga elemento ng teksto", "image": "" },
            { "text": "Pagkauugnay sa mga elemento ng teksto", "image": "" },
            { "text": "Emosyon at atmospera sa teksto", "image": "" }
        ],
        "answer": 2
    },
    {
        "question": "Alin ang HINDI halimbawa ng panghihiram ng salita?",
        "image": "",
        "options": [
            { "text": "Basketbol (mula sa Ingles na 'basketball')", "image": "" },
            { "text": "Kompyuter (mula sa Ingles na 'computer')", "image": "" },
            { "text": "Iskor (mula sa Ingles na 'score')", "image": "" },
            { "text": "Wala sa nabanggit", "image": "" }
        ],
        "answer": 3
    },
    {
        "question": "Ang 'tekstong biswal' ay tumutukoy sa _______.",
        "image": "",
        "options": [
            { "text": "Tekstong may mga larawan o imahen", "image": "" },
            { "text": "Tekstong walang mga larawan o imahen", "image": "" },
            { "text": "Tekstong may mga talahanayan o graph", "image": "" },
            { "text": "Tekstong may mga sanggunian o footnote", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Alin sa sumusunod ang mga elemento ng tekstong biswal?",
        "image": "",
        "options": [
            { "text": "Mga teknikal na biswal (laki, espasyo, kulay, linya, anyo at imahen)", "image": "" },
            { "text": "Mga elemento ng teksto (mga titik, mga pangungusap, mga talata)", "image": "" },
            { "text": "Mga elemento ng disenyo (mga kulay, mga linya, mga hugis)", "image": "" },
            { "text": "Lahat ng nabanggit", "image": "" }
        ],
        "answer": 3
    },
    {
        "question": "Ang pangunahing layunin ng isang tekstong biswal.",
        "image": "",
        "options": [
            { "text": "Magpahayag ng impormasyon gamit ang mga larawan, simbolo, o disenyo.", "image": "" },
            { "text": "Magkuwento gamit ang mga salita at pangungusap.", "image": "" },
            { "text": "Magsulat ng sanaysay tungkol sa isang paksa.", "image": "" },
            { "text": "Gumawa ng personal na opinyon gamit ang mahabang paliwanag.", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Uri ng tekstong biswal na ginagamit upang magbigay ng direksyon o gabay sa isang lugar.",
        "image": "",
        "options": [
            { "text": "Infographic", "image": "" },
            { "text": "Mapa", "image": "" },
            { "text": "Komiks", "image": "" },
            { "text": "Poster", "image": "" }
        ],
        "answer": 1
    },
    {
        "question": "Pangunahing gamit ng infographic bilang isang tekstong biswal.",
        "image": "",
        "options": [
            { "text": "Maghatid ng impormasyong mas madaling maunawaan gamit ang larawan at datos.", "image": "" },
            { "text": "Magsalaysay ng isang kuwento sa pamamagitan ng sunod-sunod na larawan.", "image": "" },
            { "text": "Gumamit ng simbolo upang ipakita ang damdamin ng tauhan.", "image": "" },
            { "text": "Lumikha ng sining na walang tiyak na kahulugan.", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Uri ng tekstong biswal na madalas ginagamit upang mag-advertise o magpalaganap ng impormasyon tungkol sa isang produkto o kaganapan.",
        "image": "",
        "options": [
            { "text": "Poster", "image": "" },
            { "text": "Graph", "image": "" },
            { "text": "Mapa", "image": "" },
            { "text": "Dyornal", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Uri ng tekstong biswal na gumagamit ng mga dayagram, talahanayan, o tsart upang ipakita ang datos sa isang malinaw na paraan.",
        "image": "",
        "options": [
            { "text": "komiks", "image": "" },
            { "text": "graph", "image": "" },
            { "text": "patalastas", "image": "" },
            { "text": "logo", "image": "" }
        ],
        "answer": 1
    },
    {
        "question": "Pangunahing layunin ng isang brochure.",
        "image": "",
        "options": [
            { "text": "Magbigay ng isang malikhaing kuwento.", "image": "" },
            { "text": "Maghatid ng impormasyon tungkol sa isang produkto, serbisyo, o kaganapan.", "image": "" },
            { "text": "Magsulat ng isang personal na opinyon.", "image": "" },
            { "text": "Gumawa ng isang pananaliksik tungkol sa agham.", "image": "" }
        ],
        "answer": 1
    },
    {
        "question": "Bakit mahalaga ang katotohanan at katumpakan sa paggawa ng brochure?",
        "image": "",
        "options": [
            { "text": "Upang gawing mas kawili-wili ang nilalaman.", "image": "" },
            { "text": "Upang makaiwas sa maling impormasyon at panlilinlang.", "image": "" },
            { "text": "Upang makakuha ng mas maraming mambabasa.", "image": "" },
            { "text": "Upang madagdagan ang disenyo ng brochure.", "image": "" }
        ],
        "answer": 1
    },
    {
        "question": "Aling prinsipyo ng etika ang lumalabag kung ang isang brochure ay naglalaman ng mali o mapanlinlang na impormasyon?",
        "image": "",
        "options": [
            { "text": "Katapatan (Honesty)", "image": "" },
            { "text": "Orihinalidad (Originality)", "image": "" },
            { "text": "Pagkamalikhain (Creativity)", "image": "" },
            { "text": "Pakikisama (Harmony)", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Etikal na pananagutan na dapat isaalang-alang sa paggamit ng larawan o ilustrasyon sa brochure.",
        "image": "",
        "options": [
            { "text": "Dapat gumamit ng anomang larawang mahahanap online.", "image": "" },
            { "text": "Dapat kumuha ng larawan mula sa mapagkakatiwalaang pinagkukunan at may pahintulot.", "image": "" },
            { "text": "Dapat gumamit ng labis na pinalaking larawan para maging kaakit-akit ang brochure.", "image": "" },
            { "text": "Dapat gumamit ng larawan nang walang pakialam sa may-ari nito.", "image": "" }
        ],
        "answer": 1
    },
    {
        "question": "Bakit kailangang isaalang-alang ang pribado at pahintulot ng ibang tao sa paggawa ng brochure?",
        "image": "",
        "options": [
            { "text": "Upang mapanatili ang tiwala ng mga tao at maiwasan ang legal na isyu.", "image": "" },
            { "text": "Upang mas madaling makahanap ng nilalaman.", "image": "" },
            { "text": "Upang hindi na kailangang gumamit ng ibang materyales.", "image": "" },
            { "text": "Upang gawing mas kawili-wili ang brochure.", "image": "" }
        ],
        "answer": 0
    },
    {
        "question": "Elemento ng comic book brochure na mahalagang paglalapatan ng sanaysay ay ang mga ______.",
        "image": "",
        "options": [
            { "text": "panel", "image": "" },
            { "text": "larawan", "image": "" },
            { "text": "teksto", "image": "" },
            { "text": "kulay", "image": "" }
        ],
        "answer": 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const questionImg = document.getElementById('question-image');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Set the question image if available
    if (currentQuestion.image) {
        questionImg.src = currentQuestion.image;
        questionImg.style.display = "block";
    } else {
        questionImg.style.display = "none";
    }

    // Loop through options and create elements
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option.text;
        li.onclick = () => checkAnswer(index);

        // Add option image if available
        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = "Option Image";
            li.prepend(img);
        }

        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById('score').textContent = score;

    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;

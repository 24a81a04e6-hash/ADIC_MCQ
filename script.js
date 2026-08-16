// ===============================
// INTEGRATED CIRCUITS QUIZ
// ===============================

const integratedQuiz = [
    {
        question: "1. What is an Integrated Circuit (IC)?",
        options: [
            "A. Mechanical device",
            "B. Miniature electronic circuit fabricated on a silicon chip",
            "C. Transformer",
            "D. Battery"
        ],
        answer: 1
    },

    {
        question: "2. Which material is mainly used for IC fabrication?",
        options: [
            "A. Copper",
            "B. Silicon",
            "C. Iron",
            "D. Gold"
        ],
        answer: 1
    },

    {
        question: "3. Which is an advantage of an Integrated Circuit?",
        options: [
            "A. Large size",
            "B. High cost",
            "C. Low power consumption",
            "D. Heavy weight"
        ],
        answer: 2
    },

    {
        question: "4. IC stands for",
        options: [
            "A. Internal Circuit",
            "B. Integrated Circuit",
            "C. Intelligent Circuit",
            "D. Input Circuit"
        ],
        answer: 1
    }
];


// ===============================
// CLASSIFICATION OF ICs QUIZ
// ===============================

const classificationQuiz = [
    {
        question: "1. ICs are classified based on",
        options: [
            "A. Colour",
            "B. Fabrication Technology",
            "C. Voltage",
            "D. Size"
        ],
        answer: 1
    },

    {
        question: "2. Which IC processes continuous signals?",
        options: [
            "A. Digital IC",
            "B. Analog IC",
            "C. Memory IC",
            "D. Logic IC"
        ],
        answer: 1
    },

    {
        question: "3. Which IC performs binary operations?",
        options: [
            "A. Analog IC",
            "B. Digital IC",
            "C. Hybrid IC",
            "D. Linear IC"
        ],
        answer: 1
    },

    {
        question: "4. Which of the following is NOT a type of IC?",
        options: [
            "A. Analog",
            "B. Digital",
            "C. Hybrid",
            "D. Mechanical"
        ],
        answer: 3
    }
];


// ===============================
// OPERATIONAL AMPLIFIER QUIZ
// ===============================

const opampQuiz = [

    {
        question: "1. An op-amp has an open-loop voltage gain of 100,000. If the differential input voltage is 50 μV, what is the output voltage?",

        options: [
            "A. 0.5 V",
            "B. 5 V",
            "C. 50 V",
            "D. 500 V"
        ],

        answer: 1
    },

    {
        question: "2. An op-amp has a differential gain of 1000 and a common-mode gain of 0.1. What is its CMRR in dB?",

        options: [
            "A. 40 dB",
            "B. 60 dB",
            "C. 80 dB",
            "D. 100 dB"
        ],

        answer: 2
    },

    {
        question: "3. An op-amp has a slew rate of 0.5 V/μs. What is the maximum frequency for an output sine wave with a peak amplitude of 5 V?",

        options: [
            "A. 1.59 kHz",
            "B. 15.9 kHz",
            "C. 159 kHz",
            "D. 1.59 MHz"
        ],

        answer: 1
    },

    {
        question: "4. An op-amp has an input offset voltage of 2 mV and a closed-loop voltage gain of 100. What output offset voltage will appear?",

        options: [
            "A. 0.02 V",
            "B. 0.2 V",
            "C. 2 V",
            "D. 20 V"
        ],

        answer: 1
    }

];


// ===============================
// BLOCK DIAGRAM OF OP-AMP QUIZ
// ===============================

const blockQuiz = [

    {
        question: "1. The two input voltages of an op-amp are 2.01 V and 2.00 V. Which block processes this small difference while rejecting the common component?",

        options: [
            "A. Output stage",
            "B. Level-shifting stage",
            "C. Differential amplifier",
            "D. Power supply stage"
        ],

        answer: 2
    },

    {
        question: "2. An op-amp must drive a low-resistance load without significantly affecting the previous voltage-gain stage. Which block should provide this capability?",

        options: [
            "A. Differential amplifier",
            "B. Intermediate gain stage",
            "C. Level-shifting stage",
            "D. Output stage"
        ],

        answer: 3
    },

    {
        question: "3. The voltage level at the output of the high-gain stage is not suitable for directly coupling to the output stage. Which block should be used?",

        options: [
            "A. Differential amplifier",
            "B. Level shifter",
            "C. Output stage",
            "D. Input protection stage"
        ],

        answer: 1
    },

    {
        question: "4. An op-amp requires very high voltage amplification before the signal reaches the output stage. Which block is mainly responsible?",

        options: [
            "A. Output stage",
            "B. Level shifter",
            "C. Intermediate voltage-gain stage",
            "D. Differential input stage"
        ],

        answer: 2
    }

];


// ===============================
// IDEAL VS PRACTICAL OP-AMP QUIZ
// ===============================

const idealQuiz = [

    {
        question: "1. A practical op-amp has an input resistance of 2 MΩ. If the input voltage is 10 mV, what input current flows?",

        options: [
            "A. 0.5 nA",
            "B. 5 nA",
            "C. 50 nA",
            "D. 500 nA"
        ],

        answer: 1
    },

    {
        question: "2. A practical op-amp has an output resistance of 50 Ω and is connected to a 1 kΩ load. If the internal output voltage is 10 V, what voltage appears across the load?",

        options: [
            "A. 8.52 V",
            "B. 9.05 V",
            "C. 9.52 V",
            "D. 10 V"
        ],

        answer: 2
    },

    {
        question: "3. A practical op-amp has an open-loop gain of 100,000. If the differential input voltage is 20 μV, what is the output voltage?",

        options: [
            "A. 0.2 V",
            "B. 1 V",
            "C. 2 V",
            "D. 20 V"
        ],

        answer: 2
    },

    {
        question: "4. A practical op-amp has a slew rate of 0.5 V/μs. What is the maximum frequency for a sine-wave output having a peak amplitude of 2 V?",

        options: [
            "A. 3.98 kHz",
            "B. 39.8 kHz",
            "C. 398 kHz",
            "D. 3.98 MHz"
        ],

        answer: 1
    }

];


// ===============================
// INVERTING AMPLIFIER QUIZ
// ===============================

const invertingQuiz = [
    {
    question: "1. In the inverting amplifier shown, Rin = 10 kΩ, Rf = 50 kΩ and Vi = 2 V. What is the output voltage Vo?",

    image: "images/inverting-problem-1.png",

    options: [
        "A. -5 V",
        "B. -10 V",
        "C. +10 V",
        "D. +20 V"
    ],

    answer: 1
},

    {
    question: "2. In the inverting amplifier shown, Rin = 10 kΩ, Vi = 2 V and Vo = -12 V. What is the feedback resistor Rf?",

    image: "images/inverting-problem-2.png",

    options: [
        "A. 20 kΩ",
        "B. 60 kΩ",
        "C. 40 kΩ",
        "D. 80 kΩ"
    ],

    answer: 1
},
    {
    question: "3. In the inverting amplifier shown, Rf = 40 kΩ, Vi = 2 V and Vo = -8 V. What is the input resistor Rin?",

    image: "images/inverting-problem-3.png",

    options: [
        "A. 5 kΩ",
        "B. 10 kΩ",
        "C. 20 kΩ",
        "D. 40 kΩ"
    ],

    answer: 1
},

    {
    question: "4. In the inverting amplifier shown, Rin = 20 kΩ, Rf = 60 kΩ and Vo = -9 V. What is the input voltage Vi?",

    image: "images/inverting-problem-4.png",

    options: [
        "A. 1 V",
        "B. 2 V",
        "C. 3 V",
        "D. 6 V"
    ],

    answer: 2
},
];


// ===============================
// NON-INVERTING AMPLIFIER QUIZ
// ===============================

const nonInvertingQuiz = [
    {
        
    question: "1. For the non-inverting amplifier shown, Rf = 20 kΩ, R1 = 5 kΩ and Vi = 2 V. What is the output voltage Vo?",

    image: "images/non-inverting-amplifier.png",

    options: [
        "A. 4 V",
        "B. 8 V",
        "C. 10 V",
        "D. 20 V"
    ],

    answer: 2
},
    {
    question: "2. A non-inverting amplifier produces an output voltage of 8 V for an input voltage of 2 V. If R1 = 10 kΩ, what should be the value of the feedback resistor Rf?",

    image: "images/non-inverting-problem-2.png",

    options: [
        "A. 10 kΩ",
        "B. 20 kΩ",
        "C. 30 kΩ",
        "D. 40 kΩ"
    ],

    answer: 2
},

    {
    question: "3. A non-inverting amplifier has Rf = 30 kΩ, R1 = 10 kΩ and produces an output voltage of 12 V. What is the input voltage Vi?",

    image: "images/non-inverting-problem-3.png",

    options: [
        "A. 2 V",
        "B. 3 V",
        "C. 4 V",
        "D. 6 V"
    ],

    answer: 1
},

    {
    question: "4. For the non-inverting amplifier shown, Rf = 40 kΩ, Vi = 2 V and Vo = 10 V. What is the value of R1?",

    image: "images/non-inverting-problem-4.png",

    options: [
        "A. 5 kΩ",
        "B. 10 kΩ",
        "C. 15 kΩ",
        "D. 20 kΩ"
    ],

    answer: 1
 },
];


// ===============================
// SCHMITT TRIGGER QUIZ
// ===============================

const schmittQuiz = [
   {
    question: "1. For the inverting Schmitt trigger shown in the figure, when the output is HIGH (+10 V), what is the upper threshold voltage (VUT)?",

    image: "images/schmitt-problem-1-circuit.png",

    options: [
        "A. +2 V",
        "B. +3 V",
        "C. +5 V",
        "D. +6 V"
    ],

    answer: 2
},

    {
    question: "2. For the inverting Schmitt trigger shown in the figure, when the output is LOW (-12 V), what is the lower threshold voltage (VLT)?",

    image: "images/schmitt-problem-2.png",

    options: [
        "A. -2 V",
        "B. -3 V",
        "C. -4 V",
        "D. -5 V"
    ],

    answer: 1
},

    {
    question: "3. For the inverting Schmitt trigger shown in the figure, what is the width of the hysteresis voltage (ΔV) in volts?",

    image: "images/schmitt-problem-3.png",

    options: [
        "A. 4 V",
        "B. 6 V",
        "C. 8 V",
        "D. 10 V"
    ],

    answer: 2
},

    {
    question: "4. For the inverting Schmitt trigger shown in the figure, if the output saturates at ±15 V, what is the upper threshold voltage (VUT)?",

    image: "images/schmitt-problem-4.png",

    options: [
        "A. +5 V",
        "B. +7.5 V",
        "C. +10 V",
        "D. +15 V"
    ],

    answer: 1
},
];


// ===============================
// INSTRUMENTATION AMPLIFIER QUIZ
// ===============================

const instrumentationQuiz = [
    {
    question: "1. For the instrumentation amplifier shown, if V1 = +2 V and V2 = -1 V, what is the output voltage Vo?",

    image: "images/instrumentation-problem-1.png",

    options: [
        "A. +3 V",
        "B. +6 V",
        "C. +9 V",
        "D. +12 V"
    ],

    answer: 2
},
    {
    question: "2. For the instrumentation amplifier shown, if Vo = 22 V, V2 = -1 V, R1 = 10 kΩ and RG = 2 kΩ, what is the value of V1?",

    image: "images/instrumentation-problem-2.png",

    options: [
        "A. 0 V",
        "B. 1 V",
        "C. 2 V",
        "D. 3 V"
    ],

    answer: 1
},

    {
    question: "3. For the instrumentation amplifier shown, V1 = +2 V, V2 = -1 V and Vo = 15 V. If all differential-stage resistors are 10 kΩ, what is the value of the gain-setting resistor RG?",

    image: "images/instrumentation-problem-3.png",

    options: [
        "A. 2 kΩ",
        "B. 5 kΩ",
        "C. 10 kΩ",
        "D. 20 kΩ"
    ],

    answer: 1
},

    {
    question: "4. For the instrumentation amplifier shown, what is the voltage gain of the amplifier?",

    image: "images/instrumentation-problem-4.png",

    options: [
        "A. 6.5",
        "B. 8.5",
        "C. 10",
        "D. 12"
    ],

    answer: 1
},
];


// ======================================================
// DOM ELEMENTS
// ======================================================

const icBtn = document.getElementById("icBtn");
const classBtn = document.getElementById("classBtn");
const opampBtn = document.getElementById("opampBtn");
const blockBtn = document.getElementById("blockBtn");
const idealBtn = document.getElementById("idealBtn");
const invBtn = document.getElementById("invBtn");
const nonInvBtn = document.getElementById("nonInvBtn");
const schmittBtn = document.getElementById("schmittBtn");
const instBtn = document.getElementById("instBtn");

const quizBox = document.getElementById("quiz-box");
const topicTitle = document.getElementById("topic-title");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const circuitImage = document.getElementById("circuit-image");


// ======================================================
// QUIZ VARIABLES
// ======================================================

let currentQuestion = 0;
let score = 0;
let currentQuiz = integratedQuiz;


// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

    nextBtn.style.display = "none";

    // Show circuit diagram only if the question has an image
    if (currentQuiz[currentQuestion].image) {

        circuitImage.innerHTML =
            '<img src="' +
            currentQuiz[currentQuestion].image +
            '" alt="Circuit Diagram">';

    } else {

        circuitImage.innerHTML = "";
    }

    // Show question
    question.innerHTML = currentQuiz[currentQuestion].question;

    // Clear old options
    options.innerHTML = "";

    // Create option buttons
    currentQuiz[currentQuestion].options.forEach(function(option, index) {

        const btn = document.createElement("button");

        btn.innerHTML = option;

        btn.onclick = function() {

            checkAnswer(index, btn);

        };

        options.appendChild(btn);

    });
}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(index, btn) {

    const buttons = options.querySelectorAll("button");

    // Disable all options
    buttons.forEach(function(button) {

        button.disabled = true;

    });


    // Correct answer
    if (index === currentQuiz[currentQuestion].answer) {

        btn.style.background = "green";

        let count = 0;

        const blink = setInterval(function() {

            if (count % 2 == 0) {

                btn.style.opacity = "0.3";

            } else {

                btn.style.opacity = "1";

            }

            count++;

            if (count == 6) {

                clearInterval(blink);

                btn.style.opacity = "1";

            }

        }, 250);

        score++;

    }

    // Wrong answer
    else {

        btn.style.background = "red";

        let count = 0;

        const blink = setInterval(function() {

            if (count % 2 == 0) {

                btn.style.opacity = "0.3";

            } else {

                btn.style.opacity = "1";

            }

            count++;

            if (count == 6) {

                clearInterval(blink);

                btn.style.opacity = "1";

            }

        }, 250);

        // Show correct answer in green
        buttons[currentQuiz[currentQuestion].answer].style.background = "green";

    }

    // Show Next button
    nextBtn.style.display = "inline-block";
}


// ======================================================
// NEXT QUESTION
// ======================================================

nextBtn.onclick = function() {

    currentQuestion++;

    if (currentQuestion < currentQuiz.length) {

        showQuestion();

    }

    else {

        question.innerHTML = "Quiz Completed!";

        circuitImage.innerHTML = "";

        options.innerHTML =
            "<h2>Your Score : " +
            score +
            " / " +
            currentQuiz.length +
            "</h2>";

        nextBtn.style.display = "none";
    }

};


// ======================================================
// INTEGRATED CIRCUITS BUTTON
// ======================================================

icBtn.onclick = function() {

    currentQuiz = integratedQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Integrated Circuits";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// CLASSIFICATION BUTTON
// ======================================================

classBtn.onclick = function() {

    currentQuiz = classificationQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Classification of ICs";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// OP-AMP BUTTON
// ======================================================

opampBtn.onclick = function() {

    currentQuiz = opampQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Operational Amplifier";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// BLOCK DIAGRAM BUTTON
// ======================================================

blockBtn.onclick = function() {

    currentQuiz = blockQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Block Diagram of Op-Amp";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// IDEAL VS PRACTICAL BUTTON
// ======================================================

idealBtn.onclick = function() {

    currentQuiz = idealQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Ideal vs Practical Op-Amp";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// INVERTING AMPLIFIER BUTTON
// ======================================================

invBtn.onclick = function() {

    currentQuiz = invertingQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Inverting Amplifier";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// NON-INVERTING AMPLIFIER BUTTON
// ======================================================

nonInvBtn.onclick = function() {

    currentQuiz = nonInvertingQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Non-Inverting Amplifier";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// SCHMITT TRIGGER BUTTON
// ======================================================

schmittBtn.onclick = function() {

    currentQuiz = schmittQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Schmitt Trigger";

    nextBtn.style.display = "none";

    showQuestion();

};


// ======================================================
// INSTRUMENTATION AMPLIFIER BUTTON
// ======================================================

instBtn.onclick = function() {

    currentQuiz = instrumentationQuiz;

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    topicTitle.innerHTML = "Instrumentation Amplifier";

    nextBtn.style.display = "none";

    showQuestion();

};
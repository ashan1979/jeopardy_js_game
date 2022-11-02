const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')


const jeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who Wrote Harry Potter Books?",
                answers: ['JK Rowling' ,'JRR Tolkien'],
                correct: 'JK Rowling',
                level: 'easy',
            },
            {
                question: "Who was Born in Krypton?",
                answers: ['Aquaman' ,'Superman'],
                correct: 'Superman',
                level: 'mendium',
            },
            {
                question: "Who Designed the First Car?",
                answers: ['Carl Benz' ,'Henry Ford'],
                correct: 'Karl Benz',
                level: 'hard',
            }
        ]
    },

    {
        genre: "WHERE",
        questions: [
            {
                question: "Where is Buckingham Palace?",
                answers: ["Richmond", "London"],
                correct: "London",
                level: "easy",
            },
            {
                question: "Where is the Colosseum?",
                answers: ["Rome", "Milan"],
                correct: "Rome",
                level: "medium",
            },
            {
                question: "Where is Mount Kilimanjaro?",
                answers: ["Zimbabwe", "Tanzania"],
                correct: "Tanzania",
                level: "hard",
            }
        ]
    },

    {
        genre: "WHEN",
        questions: [
            {
                question: "When is Christmas?",
                answers: ["30th Dec", "24th/25th Dec"],
                correct: "24th/25th Dec",
                level: "easy",
            },
            {
                question: "Where was WW2?",
                answers: ["1932", "1941"],
                correct: "1941",
                level: "medium",
            },
            {
                question: "When was JFK Shot?",
                answers: ["1963", "1961"],
                correct: "1963",
                level: "hard",
            }
        ]
    },

    {
        genre: "WHAT",
        questions: [
            {
                question: "What is the Capital of Saudi Arabia?",
                answers: ["Jeddah", "Riyadh"],
                correct: "Riyadh",
                level: "easy",
            },
            {
                question: "What do Koalas Eat?",
                answers: ["Straw", "Eucalypt"],
                correct: "Eucalypt",
                level: "medium",
            },
            {
                question: "Where is KG short for?",
                answers: ["Kilojoule", "Kilogram"],
                correct: "Kilogram",
                level: "hard",
            }
        ]
    },

    {
        genre: "HOW MANY",
        questions: [
            {
                question: "How Many Players in a Football Team?",
                answers: ["15", "11"],
                correct: "11",
                level: "easy",
            },
            {
                question: "How Many Seconds in an Hour?",
                answers: ["36000", "3600"],
                correct: "3600",
                level: "medium",
            },
            {
                question: "How Many People in China?",
                answers: ["1.1 bil", "1.4 bil"],
                correct: "1.4 bil",
                level: "hard",
            },
        ],
    },
]





























function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre;

    column.appendChild(genreTitle);
    game.append(column);


    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === 'easy') {
            card.innerHTML = 100;
        }

        if (question.level === 'medium') {
            card.innerHTML = 200;
        }

        if (question.level === 'hard') {
            card.innerHTML = 300;
        }

        card.setAttribute('data-questions', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })


}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
     this.getInnerHTML = ""
     this.style.fontSize = "15px"
     this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    this.append(textDisplay, firstButton, secondButton)
}
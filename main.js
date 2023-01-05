const ranges = [
    {
        element: document.getElementById("range-0"),
        output: document.getElementById("demo-0"),
        button: document.getElementById('btn-0'),
        unit: '%',
    },

    {
        element: document.getElementById("range-1"),
        output: document.getElementById("demo-1"),  
        answer: document.getElementById('answer-1'),
        correctAnswerStart: 350,
        correctAnswerEnd: 400,
        gradient: 'gradient-1',
        button: document.getElementById('btn-1'),
        btnNext: document.getElementById('btn-next-1'),
        unit: '%',
    },

    {
        element: document.getElementById("range-2"),
        output: document.getElementById("demo-2"),  
        answer: document.getElementById('answer-2'),
        correctAnswerStart: 2,
        correctAnswerEnd: 4,
        gradient: 'gradient-2',
        button: document.getElementById('btn-2'),
        btnNext: document.getElementById('btn-next-2'),
        unit: '%',
    },

    {
        element: document.getElementById("range-3"),
        output: document.getElementById("demo-3"),  
        answer: document.getElementById('answer-3'),
        correctAnswerStart: 51,
        correctAnswerEnd: 76,
        gradient: 'gradient-3',
        button: document.getElementById('btn-3'),
        btnNext: document.getElementById('btn-next-3'),
        unit: '%',
    },

    {
        element: document.getElementById("range-4"),
        output: document.getElementById("demo-4"),  
        answer: document.getElementById('answer-4'),
        correctAnswerStart: 2000,
        correctAnswerEnd: 2100,
        gradient: 'gradient-4',
        button: document.getElementById('btn-4'),
        btnNext: document.getElementById('btn-next-4'),
        unit: '$',
    }, 

    {
        element: document.getElementById("range-5"),
        output: document.getElementById("demo-5"),  
        answer: document.getElementById('answer-5'),
        correctAnswerStart: 30,
        correctAnswerEnd: 30,
        gradient: 'gradient-5',
        button: document.getElementById('btn-5'),
        btnNext: document.getElementById('btn-next-5'),
        unit: '%',
    }
]

let result = 0;


for (let r of ranges) {

    r.output.innerHTML = r.element.value + r.unit;

    r.element.addEventListener('pointerdown', () => {

        r.element.addEventListener('pointermove', () => {
            
            r.element.addEventListener('input', function () {
                r.output.innerHTML = this.value + r.unit;  
            })

            if (r.button.id !== 'btn-0') {
                r.button.classList.remove('inactive');
                r.button.classList.add('flash');
            }


            
        })
    })

    r.button.addEventListener('click', () => {

        if (r.button.id !== 'btn-0') {

            r.element.setAttribute('disabled', true);

            r.element.classList.add(r.gradient)
        
            const selectedValue = Number(r.output.innerHTML.slice(0, -1));
    
            if (selectedValue >= r.correctAnswerStart && selectedValue <= r.correctAnswerEnd) {
                r.output.style.color = '#00BE40';
                r.element.classList.add('range-correct');
                result += 1;
            }

            else {
                r.output.style.color = '#F04923';
                r.element.classList.add('range-wrong');
                
            } 

            r.answer.classList.remove('display_none');
            r.button.classList.add('display_none');
            r.btnNext.classList.remove('display_none');
        }
    })
}

document.querySelector('.see-result').addEventListener('click', () => {
    if (result === 4 || result === 5) {
        document.querySelector('.great-job').classList.remove('display_none');
    }
    else if (result === 2 || result === 3) {
        document.querySelector('.well-done').classList.remove('display_none');
    }
    else {
        document.querySelector('.thats-ok').classList.remove('display_none');
    }
})


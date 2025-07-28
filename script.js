const questions = [
    {
        'que': 'If all cats meow and Fluffy is a cat, does Fluffy bark ?',
        'a': 'Yes',
        'b': 'No',
        'c': 'Maybe',
        'd': 'Not enough information',
        'correct': 'b'
    },
    {
        'que': 'There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there ?',
        'a': '5',
        'b': '3',
        'c': '7',
        'd': '4',
        'correct': 'b'
    },
    {
        'que': 'What comes next in the series: 2, 4, 8, 16, ___?',
        'a': '20',
        'b': '40',
        'c': '32',
        'd': '75',
        'correct': 'c'
    },
    {
        'que': 'Complete the series: 1, 6, 13, 22, 33, ...',
        'a': '46',
        'b': '48',
        'c': '49',
        'd': '51',
        'correct': 'a'
    },
    {
        'que': 'CUP : LIP :: BIRD : ?',
        'a': 'Legs',
        'b': 'Beak',
        'c': 'Nest',
        'd': 'Wings',
        'correct': 'b'
    },
    {
        'que': 'Light : Sun :: Heat : ?',
        'a': 'Elecrticity',
        'b': 'Fire',
        'c': 'Water',
        'd': 'Alcohol',
        'correct': 'b'
    },
    {
        'que': 'What is the largest internal organ in the human body ?',
        'a': 'Brain',
        'b': 'Heart',
        'c': 'Liver',
        'd': 'Kidney',
        'correct': 'c'
    },
    {
        'que': 'Which element is represented by the symbol "Fe" ?',
        'a': 'Water',
        'b': 'Mercury',
        'c': 'Silver',
        'd': 'Iron',
        'correct': 'd'
    },
    {
        'que': 'What is the capital city of Australia ?',
        'a': 'Melbourne',
        'b': 'London',
        'c': 'Sydney',
        'd': 'Canberra',
        'correct': 'd'
    },
    {
        'que': 'What comes down but never goes up ?',
        'a': 'A balloon',
        'b': 'Rain',
        'c': 'Smoke',
        'd': 'A ball',
        'correct': 'b'
    }

]


let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll('.option');
const loadQuestion = () => {
    if(index == total ){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1})${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans == data.correct ){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach((input) =>{
        input.checked = false;
    })
}

const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3>Thank You for playing the Quiz</h3>
    <h2>${right} / ${total} are correct </h2>
    </div>
    `
}

//initial call
loadQuestion();
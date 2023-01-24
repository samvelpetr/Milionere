let newGame = document.querySelector('.newGame');
let game = document.querySelector('.game');
let timer = document.querySelector('.timer');
let lose = document.querySelector('.lose');
let loseButs = document.querySelectorAll('.loseBut');
//let moneyHtml = document.querySelectorAll('.money');
//const moneys = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000, 2000000, 3000000, 4000000, 5000000]
//let sumOfMoney = 0;
// let i = 0;'
let harcpox = false;
let readRules = document.querySelector('.readRules');
let rules = document.querySelector('.rules');
let returnMenu = document.querySelector('.returnMenu');
let spans = document.querySelectorAll('.spans');
let d = 0;
readRules.onclick = function () {
    rules.style.display = 'flex'
    setTimeout(() => {
        rules.style.bottom = '0%'
    }, 100);
    // rules.classList.add('rulesAnim')
    spans.forEach(function (span) {
        span.classList.add('spanAnim')
    })
}

returnMenu.onclick = function () {
    rules.style.bottom = "-100%";
    setTimeout(() => {
        rules.style.display = 'none'
    }, 500);
    rules.classList.remove('rulesAnim')
    spans.forEach(function (span) {
        span.classList.remove('spanAnim')
    })
}

const trueEaseAudio = new Audio('audio/trueease.mp3');
const trueHardAudio = new Audio('audio/truehard.mp3');
const fiftyAudio = new Audio('audio/fifty.mp3');
const falseAnswerAudio = new Audio('audio/falseanswer.mp3');
const hardAnswerStartAudio = new Audio('audio/hardanswerstart.mp3');
const question2 = {
    id: 25,
    question: 'Ո՞ր գերեզմանատանն է ամփոփված Նար-Դոսի աճյունը:',
    trueAnswer: 'Խոջիվանքի գերեզմանտանը',
    falseAnswer1: 'Հայ գրողների պանթեոնում',
    falseAnswer2: 'Կոմիտասի անվան զբոսայգու պանթեոնում',
    falseAnswer3: 'Միջին Ասիայի Օրենբուրգ քաղաքում'
}
const questions = [
    {
        id: 0,
        question: 'Եղիշե Չարենցի ո՞ր պոեմն է նման զինվորի օրագրի։',
        flaseAnswer1: '«Ամբոխները խելագարված»',
        flaseAnswer2: '«Կապուտաչյա հայրենիք»',
        trueAnswer: '«Դանթեական առասպել»',
        flaseAnswer3: '«Սոմա»'
    },
    {
        id: 1,
        question: ' Որ գրողի ժողովածուն է «Խղճմտանքի ձայները»:',
        flaseAnswer1: 'Ավետիք Իսահակյան',
        flaseAnswer2: 'Լևոն Շանթ',
        flaseAnswer3: 'Նար-Դոս',
        trueAnswer: 'Գրիգոր Զոհրապ'
    },
    {
        id: 2,
        question: 'Ո՞ր քաղաքն են սխալմամբ համարում Եղիշե Չարենցի ծննդավայրը:',
        trueAnswer: 'Մակու',
        flaseAnswer1: 'Կարս',
        flaseAnswer2: 'Վան',
        flaseAnswer3: 'Խարբերդ'
    },
    {
        id: 3,
        question: 'Թումանյանի հայտնի նշանաբանն էր «դեպի ______, դեպի ժողովորդ»։',
        flaseAnswer1: 'տիեզերք',
        trueAnswer: 'բնություն',
        flaseAnswer2: 'հայրենիք',
        flaseAnswer3: 'մարդկություն'
    },
    {
        id: 4,
        question: 'Ո՞րն է Լ. Շանթի իսկական ազգանունը:',
        flaseAnwer1: 'Չպուգքյարյան',
        flaseAnwer2: 'Յարճանյան',
        trueAnswer: 'Սեղբոսյան',
        flaseAnwer3: 'Սողոմոնյան'
    },
    {
        id: 5,
        question: 'Որ գրողն էր 1946 թվականին եղել Հայաստանի գրողների միության նախագահ:',
        flaseAnswer1: 'Հովհաննես Թումանյան',
        trueAnswer: 'Ավետիք Իսահակյան',
        flaseAnswer2: 'Դանիել Վարուժան',
        flaseAnswer3: 'Լևոն Շանթ'
    },
    {
        id: 6,
        question: ' Ո՞վ էր 1903թ. հրատարակված «Հառաչանք» պոեմի հեղինակը։',
        trueAnswer: 'Թումանյան',
        flaseAnswer1: 'Իսահակյան ',
        flaseAnswer2: 'Չարենց',
        flaseAnswer3: 'Վարուժան'
    },
    {
        id: 7,
        question: 'Որ քաղաքում է վախճանվել Լևոն Շանթը:',
        flaseAnswer1: 'Թիֆլիս',
        flaseAnswer2: 'Կոստանդուպոլիս',
        trueAnswer: 'Բեյրութ',
        flaseAnswer3: 'Էջմիածին'
    },
    {
        id: 8,
        question: ' Հետևյալներից ո՞վ Վերնատան անդամ չէր։',
        trueAnswer: 'Նար-Դոս',
        flaseAnswer1: 'Դեմիրճյան',
        flaseAnswer2: 'Շանթ',
        flaseAnswer3: 'Իսահակյան'
    },
    {
        id: 9,
        question: 'Ե. Չարենցի վերջին ժողովածուն կոչվում է՝',
        flaseAnswer1: '«Փողոցային պչրուհուն»,',
        flaseAnswer2: '«Էպիքական լուսաբաց»',
        trueAnswer: '«Գիրք ճանապարհի»',
        flaseAnswer3: '«Տաղարան»'
    },
    {
        id: 10,
        question: 'Ո՞ր ստեղծագործության բնաբանն է «Հազարամյակ մը մեզմե առաջ»',
        flaseAnswer1: '«Հարճը»',
        flaseAnswer2: '«Կարմիր լուրեր բարեկամես»',
        trueAnswer: '«Հին աստվածներ»',
        flaseAsnwer3: '«Կայսր»'
    },
    {
        id: 11,
        question: '«Հարճը» պոեմում ո՞վ է Տրդատի կինը:',
        flaseAnswer1: 'Նազենիկ',
        trueAnswer: 'Երանյակ',
        flaseAnswer2: 'Սիրանուշ',
        flaseAnswer3: 'Սեդա'
    },
    {
        id: 12,
        question: 'Ադամը երկար ճանապարհ գնաց, որպեսզի ի՞նչ բերի Լիլիթին:',
        trueAnswer: 'Գոհարներ',
        flaseAnswer1: 'Գեղեցիկ թիթեռներ',
        flaseAnswer2: 'Ծաղիկներ',
        flaseAnswer3: 'Համեղ Պտուղներ'
    },
    {
        id: 13,
        question: ' Ո՞ր վաղամեռիկ բանաստեղծի խոսքն էր «Տուր ինծի Տեր ուրախություն անանձնական»',
        flaseAnswer1: 'Չարենց',
        flaseAnswer2: 'Դուրյան',
        trueAnswer: 'Մեծարենց',
        flaseAnswer3: 'Տերյան'
    },
    {
        id: 14,
        question: 'Ո՞ւմ միջամտությամբ է Սիամանթոն ընդունվել Սորբոնի համալսարան։',
        trueAnswer: 'Ա. Չոպանյան',
        flaseAnswer1: 'Ն. Աղբալյան',
        flaseAnswer2: 'Ֆ. Պարրոտ',
        flaseAnswer3: 'հարազատ հորեղբոր'
    },
    {
        id: 15,
        question: 'Դանիել Վարուժանի ո՞ր ժողովածուն է հրատարակվել հետմահու:',
        trueAnswer: 'Հացին երգը',
        flaseAnswer1: 'Սարսուռներ',
        flaseAnswer2: 'Հեթանոս երգեր',
        flaseAnswer3: 'Ցեղին սիրտը'
    },
    {
        id: 16,
        question: 'Ինչ նպատակով է 1914թ Սիամանթոն մեկնում Ժնև։',
        flaseAnswer1: 'Իր նոր ժողովածուն  հրատարակելու',
        trueAnswer: 'Բուժում ստանալու ',
        flaseAnswer2: 'Պատերազմի աղետի տակ չընկնելու',
        flaseAnswer3: 'Քաղաքը տեսնելու'
    },
    {
        id: 17,
        question: 'Ո՞րն է «Թմբկաբերդի առումը» պոեմի հիմնական գաղափարը:',
        flaseAnswer1: 'Դավաճանություն',
        flaseAnswer2: 'Փառասիրություն',
        trueAnswer: 'Գործի անմահություն',
        flaseAnswer3: 'Հայրենասիրություն'
    },
    {
        id: 18,
        question: 'Հայ մեծ գրողներից ո՞վ է երեք անգամ ընտրվել Խորհրդային Հայաստանի գերագույն խորհրդի պատգամավոր:',
        flaseAnswer3: 'Դեմիրճանյան',
        flaseAnswer1: 'Նար-Դոս',
        flaseAnswer2: 'Շանթ',
        trueAnswer: 'Իսահակյան'
    },
    {
        id: 19,
        question: 'Ինչի՞ հետեվորդ է Նար-Դոսը:',
        flaseAnswer3: 'Սիմվոլիզմ',
        trueAnswer: 'Ռեալիզմ',
        flaseAnswer2: 'Ռոմանտիզմ',
        flaseAnswer1: 'Կլասիցիզմ'
    },

];
let helps = document.querySelectorAll('.helpItem')
let falseAnswersDiv = []
let arr = []

function randHarc() {
    if (arr.length == 20) {
        return true
    }
    let num1 = Math.round(Math.random() * 19);
    if (arr.includes(num1)) {
        randHarc();
    }
    else {
        arr.push(num1);
        randHarc()
    }

}
function GAME(i) {


    // if(i === 8 || i === 12 || i === 15){

    //     setTimeout(()=>{
    //         game.style.backgroundColor = 'rgba(0,0,0,0.8)';
    //         hardAnswerStartAudio.play();
    //     },1000)
    //     setTimeout(()=>{
    //         hardAnswerStartAudio.pause();
    //     },5000) 
    // }
    // else{
    //     game.style.backgroundColor = 'rgba(0,0,0,0.45)';
    // }

    // let clock = 60


    falseAnswersDiv = []
    function falseAnswerFunc(ans) {
        if (ans != undefined) {
            setTimeout(() => {
                falseAnswerAudio.play();
            }, 2200)
            ans.style.background = '#F4CA16';
            ans.style.color = 'black';
            setTimeout(() => {
                // ansTxt.style.background='red'
                ans.style.background = 'red';

            }, 2300)
            setTimeout(() => {
                // ansTxt.style.background='#F4CA16'
                ans.style.background = '#F4CA16';
            }, 2450)
            setTimeout(() => {
                // ansTxt.style.background='red'
                ans.style.background = 'red';

            }, 2600)
        }
    }

    function trueAnswerFunc(ans) {
        // if (i === 8 || i === 12 || i === 15) {
        //     setTimeout(() => {
        //         trueHardAudio.play();
        //     }, 2200)
        //     setTimeout(() => {
        //         trueHardAudio.pause();
        //     }, 5200)

        // }

        setTimeout(() => {
            trueEaseAudio.play();
        }, 2200)

        if (ans != undefined) {
            ans.style.background = '#F4CA16';
            ans.style.color = 'black';
            setTimeout(() => {
                ans.style.background = '#717A00';
            }, 2300)
            setTimeout(() => {
                ans.style.background = '#F4CA16';
            }, 2450)
            setTimeout(() => {
                ans.style.background = '#717A00';
            }, 2600)
        }
    }
    // // clearInterval(cl)
    // Time()
    // timer.classList.remove('timeEnd');
    // timer.classList.remove('timerAnim');
    game.style.filter = 'blur(0)'

    function Time() {
        cl = setInterval(() => {
            if (clock > 0) {
                timer.innerHTML = clock;
                clock--;
            }
            else {
                timer.innerHTML = '';
                timer.classList.remove('timerAnim');
                timer.classList.add('timeEnd');
                if (rightAnswerDiv != undefined) {
                    rightAnswerDiv.style.background = '#717A00'
                }
                setTimeout(() => {
                    rightAnswer = undefined;
                    rightAnswerDiv = undefined;
                    questAnsArr = undefined;
                    i++
                    GAME(i)

                }, 500);
            }
            if (clock === 14) {
                timer.classList.add('timerAnim');
            }

        }, 1000)

    }
    let questAnsArr = undefined;

    let close = document.querySelector('.closeIcon')
    let win = document.querySelector('.win')
    if (i === questions.length) {
        console.log(true)
        setTimeout(() => {
            win.style.transform = 'scale(1)'

        }, 3000)
        close.onclick = () => {
            win.style.transform = 'scale(0)'
        }

    }

    if (questions[arr[i]] != undefined && !harcpox) {
        questAnsArr = Object.keys(questions[arr[i]]);
    } else {
        questAnsArr = Object.keys(question2);

    }
    let anwserDiv = undefined;

    anwserDiv = document.querySelectorAll('.answer')
    let questDiv = document.querySelector('.question');
    let answer = document.querySelectorAll('.ansSpan');
    let rightAnswer = undefined;
    let rightAnswerDiv = undefined;
    game.style.pointerEvents = 'unset'
    anwserDiv[0].style.background = '#012B88';
    anwserDiv[0].style.color = 'white';
    anwserDiv[1].style.background = '#012B88';
    anwserDiv[1].style.color = 'white';
    anwserDiv[2].style.background = '#012B88';
    anwserDiv[2].style.color = 'white';
    anwserDiv[3].style.background = '#012B88';
    anwserDiv[3].style.color = 'white';
    answer[0].style.background = 'transparent';
    answer[1].style.background = 'transparent';
    answer[2].style.background = 'transparent';
    answer[3].style.background = 'transparent';
    if (i != 25) {
        questDiv.innerHTML = questions[arr[i]][questAnsArr[1]];
        answer[0].innerHTML = questions[arr[i]][questAnsArr[2]];
        answer[1].innerHTML = questions[arr[i]][questAnsArr[3]];
        answer[2].innerHTML = questions[arr[i]][questAnsArr[4]];
        answer[3].innerHTML = questions[arr[i]][questAnsArr[5]];
    } else {
        questDiv.innerHTML = question2[questAnsArr[1]];
        answer[0].innerHTML = question2[questAnsArr[2]];
        answer[1].innerHTML = question2[questAnsArr[3]];
        answer[2].innerHTML = question2[questAnsArr[4]];
        answer[3].innerHTML = question2[questAnsArr[5]];

    }
    for (let j = 0; j < questAnsArr.length; j++) {
        switch (questAnsArr[j]) {
            case 'trueAnswer':
                rightAnswer = questAnsArr[j];
                break;
            case 'flaseAnswer1':
                falseAnswer1 = questAnsArr[j];
                break;
            case 'flaseAnswer2':
                falseAnswer2 = questAnsArr[j];
                break;
            case 'flaseAnswer3':
                falseAnswer3 = questAnsArr[j];
                break;

            default:
                break;
        }
    }
    // debugger;
    if (!harcpox) {
        if (answer[0].innerHTML == questions[arr[i]][rightAnswer]) {
            rightAnswerDiv = anwserDiv[0]
        }
        else if (answer[1].innerHTML == questions[arr[i]][rightAnswer]) {
            rightAnswerDiv = anwserDiv[1]

        }
        else if (answer[2].innerHTML == questions[arr[i]][rightAnswer]) {
            rightAnswerDiv = anwserDiv[2]

        }
        else if (answer[3].innerHTML == questions[arr[i]][rightAnswer]) {
            rightAnswerDiv = anwserDiv[3]

        } if (Array.isArray(rightAnswerDiv)) {
            rightAnswerDiv = rightAnswerDiv[0]
        }
        for (let k = 0; k < 4; k++) {
            if (anwserDiv[k] == rightAnswerDiv) {
                continue;
            } else {
                falseAnswersDiv.push(anwserDiv[k])
            }
        }
    } else {
        if (answer[0].innerHTML == question2[rightAnswer]) {
            rightAnswerDiv = anwserDiv[0]
        }
        else if (answer[1].innerHTML == question2[rightAnswer]) {
            rightAnswerDiv = anwserDiv[1]

        }
        else if (answer[2].innerHTML == question2[rightAnswer]) {
            rightAnswerDiv = anwserDiv[2]

        }
        else if (answer[3].innerHTML == question2[rightAnswer]) {
            rightAnswerDiv = anwserDiv[3]

        } if (Array.isArray(rightAnswerDiv)) {
            rightAnswerDiv = rightAnswerDiv[0]
        }
        for (let k = 0; k < 4; k++) {
            if (anwserDiv[k] == rightAnswerDiv) {
                continue;
            } else {
                falseAnswersDiv.push(anwserDiv[k])
            }
        }
    }
    falseAnswersDiv[0].style.pointerEvents = 'unset';
    falseAnswersDiv[1].style.pointerEvents = 'unset';
    falseAnswersDiv[2].style.pointerEvents = 'unset';
    rightAnswerDiv.style.pointerEvents = 'unset';

    rightAnswerDiv.onclick = () => {
        trueAnswerFunc(rightAnswerDiv)
        falseAnswersDiv[0].style.pointerEvents = 'none';
        falseAnswersDiv[1].style.pointerEvents = 'none';
        falseAnswersDiv[2].style.pointerEvents = 'none';
        rightAnswerDiv.style.pointerEvents = 'none';
        setTimeout(() => {
            rightAnswer = undefined;
            rightAnswerDiv = undefined;
            if (i <= questions.length) {
                i++
                GAME(i)
                // } if (i == questions.length) {
                //     i++;
                // }
            }


        }, 3000);
        falseAnswersDiv = [];

    }

    falseAnswersDiv[2].onclick = () => {
        falseAnswerFunc(falseAnswersDiv[2])
        falseAnswersDiv[0].style.pointerEvents = 'none';
        falseAnswersDiv[1].style.pointerEvents = 'none';
        falseAnswersDiv[2].style.pointerEvents = 'none';
        rightAnswerDiv.style.pointerEvents = 'none';
        setTimeout(() => {
            if (rightAnswerDiv != undefined) {
                rightAnswerDiv.style.background = '#717A00'
            }
            // bool = true;
            // clearInterval(cl)
            // timer.innerHTML = '';
            // timer.classList.add('timeEnd');

        }, 3000);
        setTimeout(() => {
            rightAnswer = undefined;
            questAnsArr = undefined;
            rightAnswerDiv = undefined;
            // i = 0;
            // GAME(0)
            // if (i <= questions.length) {
            //     // i = d;
            //     i++
            //     GAME(i)
            // }
            lose.style.transform = 'scale(1)'
            game.style.filter = 'blur(5px)'
            game.style.pointerEvents = 'none'

        }, 5000);
        falseAnswersDiv = [];
        // helps[0].style.display = 'flex'
        // helps[1].style.display = 'flex'
        // helps[2].style.display = 'flex'
    }
    falseAnswersDiv[1].onclick = () => {
        falseAnswerFunc(falseAnswersDiv[1])
        falseAnswersDiv[0].style.pointerEvents = 'none';
        falseAnswersDiv[1].style.pointerEvents = 'none';
        falseAnswersDiv[2].style.pointerEvents = 'none';
        rightAnswerDiv.style.pointerEvents = 'none';
        setTimeout(() => {
            if (rightAnswerDiv != undefined) {
                rightAnswerDiv.style.background = '#717A00'
            }
            // bool = true;
            // clearInterval(cl)
            // timer.innerHTML = '';
            // timer.classList.add('timeEnd');


        }, 3000);
        setTimeout(() => {
            rightAnswer = undefined;
            rightAnswerDiv = undefined;
            questAnsArr = undefined;
            //     i = 0;
            //     GAME(0)
            // if (i < questions.length) {
            //     // i = d;
            //     i++
            //     GAME(i)
            // }
            lose.style.transform = 'scale(1)'
            game.style.filter = 'blur(5px)'
            game.style.pointerEvents = 'none'
        }, 5000);
        falseAnswersDiv = [];
        // helps[0].style.display = 'flex'
        // helps[1].style.display = 'flex'
        // helps[2].style.display = 'flex'
        // helps[3].style.display = 'flex'
    }
    falseAnswersDiv[0].onclick = () => {
        falseAnswerFunc(falseAnswersDiv[0])
        falseAnswersDiv[0].style.pointerEvents = 'none';
        falseAnswersDiv[1].style.pointerEvents = 'none';
        falseAnswersDiv[2].style.pointerEvents = 'none';
        rightAnswerDiv.style.pointerEvents = 'none';
        setTimeout(() => {
            if (rightAnswerDiv != undefined) {
                rightAnswerDiv.style.backgroundColor = '#717A00'
            }

            // clearInterval(cl)
            // timer.innerHTML = '';
            // timer.classList.add('timeEnd');

        }, 3000);

        setTimeout(() => {
            rightAnswer = undefined;
            rightAnswerDiv = undefined;
            questAnsArr = undefined;
            //     i = 0;
            //     GAME(0)
            // if (i <= questions.length) {
            //     // i = d;
            //     i++
            //     GAME(i)
            // }
            lose.style.transform = 'scale(1)'
            game.style.pointerEvents = 'none'
            game.style.filter = 'blur(5px)'
        }, 5000);
        falseAnswersDiv = [];
        // helps[0].style.display = 'flex'
        // helps[1].style.display = 'flex'
        // helps[2].style.display = 'flex'

    }
    helps[2].addEventListener('click', () => {
        helps[2].style.display = 'none'
        let falseCount = 0;
        falseAnswersDiv[0].onclick = () => {
            falseAnswerFunc(falseAnswersDiv[0])
            // falseAnswersDiv[0].style.pointerEvents = 'none';
            // falseAnswersDiv[1].style.pointerEvents = 'none';
            // falseAnswersDiv[2].style.pointerEvents = 'none';
            // rightAnswerDiv.style.pointerEvents = 'none';
            setTimeout(() => {
                if (rightAnswerDiv != undefined && falseCount == 1) {
                    rightAnswerDiv.style.backgroundColor = '#717A00'
                }

                // clearInterval(cl)
                // timer.innerHTML = '';
                // timer.classList.add('timeEnd');

            }, 3000);

            setTimeout(() => {
                // rightAnswer = undefined;
                // rightAnswerDiv = undefined;
                // questAnsArr = undefined;
                //     i = 0;
                //     GAME(0)
                if (i <= questions.length && falseCount == 1) {
                    // i = d;
                    // i++
                    // GAME(i)
                    lose.style.transform = 'scale(1)'
                    game.style.pointerEvents = 'none'
                    game.style.filter = 'blur(5px)'
                }
                else if (falseCount == 0) {
                    falseCount++;
                }
            }, 5000);
            // falseAnswersDiv = [];
        }
        falseAnswersDiv[1].onclick = () => {
            falseAnswerFunc(falseAnswersDiv[1])
            // falseAnswersDiv[0].style.pointerEvents = 'none';
            // falseAnswersDiv[1].style.pointerEvents = 'none';
            // falseAnswersDiv[2].style.pointerEvents = 'none';
            // rightAnswerDiv.style.pointerEvents = 'none';
            setTimeout(() => {
                if (rightAnswerDiv != undefined && falseCount == 1) {
                    rightAnswerDiv.style.backgroundColor = '#717A00'
                }

                // clearInterval(cl)
                // timer.innerHTML = '';
                // timer.classList.add('timeEnd');

            }, 3000);

            setTimeout(() => {

                //     i = 0;
                //     GAME(0)
                if (i <= questions.length && falseCount == 1) {
                    // i = d;
                    // i++
                    // GAME(i)
                    lose.style.transform = 'scale(1)'
                    game.style.pointerEvents = 'none'
                    game.style.filter = 'blur(5px)'
                }
                else {
                    falseCount++;
                }
            }, 5000);
            // falseAnswersDiv = [];
        }
        falseAnswersDiv[2].onclick = () => {
            falseAnswerFunc(falseAnswersDiv[2])
            // falseAnswersDiv[0].style.pointerEvents = 'none';
            // falseAnswersDiv[1].style.pointerEvents = 'none';
            // falseAnswersDiv[2].style.pointerEvents = 'none';
            // rightAnswerDiv.style.pointerEvents = 'none';
            setTimeout(() => {
                if (rightAnswerDiv != undefined && falseCount == 1) {
                    rightAnswerDiv.style.backgroundColor = '#717A00'
                }

                // clearInterval(cl)
                // timer.innerHTML = '';
                // timer.classList.add('timeEnd');

            }, 3000);

            setTimeout(() => {
                // rightAnswer = undefined;
                // rightAnswerDiv = undefined;
                // questAnsArr = undefined;
                //     i = 0;
                //     GAME(0)
                if (i <= questions.length && falseCount == 1) {
                    // i = d;
                    // i++
                    // GAME(i)
                    lose.style.transform = 'scale(1)'
                    game.style.pointerEvents = 'none'
                    game.style.filter = 'blur(5px)'
                }
                else {
                    falseCount++;
                }
            }, 5000);
            // falseAnswersDiv = [];
        }
    })
    helps[1].addEventListener('click', () => {
        helps[1].style.display = 'none'
        d = i;
        harcpox = true;
        GAME(25)
    })

    // helps[1].addEventListener('click', () => {
    //     helps[1].style.display = 'none'
    // })
    helps[0].addEventListener('click', () => {
        setTimeout(() => {
            fiftyAudio.play();
        }, 150)
        helps[0].style.display = 'none';
        falseAnswersDiv[0].style.color = 'transparent';
        falseAnswersDiv[1].style.color = 'transparent';
        falseAnswersDiv[0].style.pointerEvents = 'none';
        falseAnswersDiv[1].style.pointerEvents = 'none';

    })
    // console.log(rightAnswerDiv);
    // console.log(i);
    // console.log(randNum1);
    // console.log(randNum2);
    if (harcpox) {
        harcpox = false
        i = d
    }
}
game.style.display = 'none';
newGame.onclick = function () {
    game.style.display = 'block';
    setTimeout(() => {
        game.style.top = '0';

    }, 100);
    // clock = 60;
    randHarc()
    GAME(arr[0])
    console.log(arr)

}

loseButs[0].onclick = function () {
    GAME(0)
    helps.forEach(e => e.style.display = 'flex')
    arr = [0]
    randHarc()
    console.log(arr)
    lose.style.transform = 'scale(0)'
}
loseButs[1].onclick = function () {
    arr = [0]
    game.style.top = '-100vh';
    setTimeout(() => {
        game.style.display = 'none';
    }, 500);
    lose.style.transform = 'scale(0)'

}

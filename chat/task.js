
(function () {
    


const answerList = [ 
    'ok',
    'Мы ответим Вам потом',
    'Так не можем',
    'Да, именно так',
    'Что то ответим',
]
const chatCont = document.querySelector('.chat-widget__messages-container') 
const chatWindow = document.querySelector('.chat-widget__messages')
const message = document.querySelector('input')
message.addEventListener('keydown', getMessage)
const chat = document.querySelector('.chat-widget')
let myTimer;

document.querySelector('.chat-widget__side').addEventListener('click', () => {
    chat.classList.toggle('chat-widget_active')
    let myTimer = setTimeout(timerQuestion, 30000)
})


function getMessage(event) {
    if (event.key == 'Enter'){
        if (message.value) {
            let date = new Date()
            chatWindow.innerHTML += `Сообщение от клиента
            <div class="message message_client">
                <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
                <div class="message__text">${message.value}</div>
            </div>
            `

            chatWindow.innerHTML +=`Сообщение от робота
            <div class="message">
                <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
                <div class="message__text">${getAnswer()}</div>
            </div>
            `
        }
        chatCont.scrollTop = chatCont.scrollTopMax
        console.log(myTimer);
        if (myTimer){
             window.clearTimeout(myTimer)
        }
        myTimer = setTimeout(timerQuestion , 30000) 

        message.value = ''
       
    }

    
}

function getAnswer() {
    return answerList[Math.floor(Math.random() * 10) % answerList.length]
    
}

function timerQuestion() {
    let date = new Date()
    chatWindow.innerHTML +=`Сообщение от робота
    <div class="message">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">${getAnswer()}</div>
    </div>
    `
    chatCont.scrollTop = chatCont.scrollTopMax
}

}) ()
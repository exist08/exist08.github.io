var questions=document.getElementsByClassName('question-box')

for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',()=>{
        questions[i].classList.toggle('active')
    })
}
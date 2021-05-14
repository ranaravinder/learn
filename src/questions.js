const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const questions=[
"What is your name ? ",
"Which company are you working with?  ",
"Where do you live? "
]

const collectAnswers=(questions,done)=>{
    const answers=[]
    const [firstQuestion]=questions
    const questionAnswered=answer=>{
      answers.push(answer)
      if (answers.length<questions.length){
          rl.question(questions[answers.length],questionAnswered)
      }
      else{
         done(answers)
      }

    }
    rl.question(firstQuestion,questionAnswered)
} 
collectAnswers(questions, answers=>{
    console.log("Thank you for answers ")
    console.log(answers)
    process.exit()
})


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnswerSubmitRequest, GetAllQuestions } from '../../API/APIRequest'
import '../../App'

const Questions = () => {
    let navigate=useNavigate()
    const[question,setQuestion]=useState([])
    useEffect(()=>{
        GetAllQuestions().then((result)=>{
            if(result.status===200){
               
                setQuestion(result.data)
            }
        })
    },[])

    

  
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [answer,setAnswer]=useState([])

    const handleAnswerOptionClick = (...answerOption) => {
        
        setAnswer([...answer,{answer:answerOption[0],question:answerOption[1]}])
		if (answerOption[0].isCorrect===true) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
        
		if (nextQuestion < question.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
        
	};
    
    const handleAnswerSubmit=()=>{
        AnswerSubmitRequest(answer)
        window.location.href='/result'
    }
  
  return (
    <div className='container'>
        <div className="row">
            <div className="cal-md-12 ">
            
            <div className="wrapper">
            <div className='card' style={{ width: '48rem',  padding:"20px"}}>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
                    <button onClick={()=>handleAnswerSubmit()}>submit result</button>
				</div>
			) :(<>
                <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{question.length}
                </div>
                <div className='question-text'>{question[currentQuestion] && question[currentQuestion].description}</div>
            </div>
            <div className='answer-section'>
                {question[currentQuestion] && question[currentQuestion].alternatives.map((answerOption) => (
                    <button onClick={() => handleAnswerOptionClick(answerOption,question[currentQuestion])}>{answerOption.text}</button>
                ))}
            </div>
        </>
                )
				}
         </div>
            </div>
         
      
            </div>
        </div>
    </div>
  )
}

export default Questions
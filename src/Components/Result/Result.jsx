import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteAllAnswer, GetAllAnswer } from "../../API/APIRequest";

const Result = () => {
    const location = useLocation()
    let navigate=useNavigate()
    
    const [showAnswer,setShowAnswer]=useState([])
    
    useEffect(()=>{
        GetAllAnswer().then(result=>{
            
            setShowAnswer(result)
        })
    },[location.state])
   const handleRestartGame=()=>{
    navigate('/')
    DeleteAllAnswer()
    
   }
  return (
    <div className="container">
      <div className="row">
        <div className="cal-md-12 ">
          <div className="wrapper">
            <div className="card" style={{ width: "48rem", padding: "20px" }}>
             {showAnswer && showAnswer.map((item,i)=>(
                <Fragment key={i}>
                <div className="question-section">
                  <div className="question-text">
                    <h2>  {item.question[0].description}</h2>
                  </div>
                </div>
                <div className="answer-section">
                
                {item.question[0].alternatives.map((itemInside,j)=>(
                    <button style={{background:itemInside.isCorrect && "green"}} key={j}>{itemInside.text}</button>
                ))}
                </div>
                <div>
                    <h2>Your answer</h2>
                    <p  style={{background:item.answer.isCorrect===true ? 'green':'red',padding:'10px',fontSize:'16px',fontWeight: 'bold'}}>{item.answer.text} <span>{item.answer.isCorrect===true?'is Right':'is Wrong'}</span></p>
                </div>
              </Fragment>
             )) }
             <br />
             <button onClick={()=>handleRestartGame()}>Restart Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

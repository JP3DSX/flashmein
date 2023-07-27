"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [ questionData, setQuestionData ] = useState<string[]>(["Apfel","Bananen","Citrone","ich","du","sie","er","es"]);
  const [ answerData, setAnswerData ] = useState<string[]>(["りんご","バナナ","レモン","私","あなた","彼女","彼","それ"]);
  const [ flipState, setFlipState ] = useState(false);
  const [ questionNum, setQuestionNum ] = useState<number>(0);
  const [ mode, setMode ] = useState<number>(0);
  const [ cardText, setCardText ] = useState<string>();

  const getQuestionNum = () => {
    const num = Math.trunc(Math.random() * questionData.length);
 //   console.log(`getNum: ${num}`);
    return num;
  };

  const setCardTextByFlip = () => {
//    console.log(`setTXT: ${questionNum}`);
    if(flipState){
      setCardText(questionData[questionNum]);
    }else{
      setCardText(answerData[questionNum]);
    }
  };

  const initialize = () => {
 //   console.log("initialize!");
    setQuestionNum(getQuestionNum());
    setFlipState(true);
  };

  const flipCard = () => {
    setFlipState(!flipState);
  };

  const setNextQuestion = () => {
    setQuestionNum(getQuestionNum());
    setFlipState(true);
 //   setCardTextByFlip();
  }

  useEffect(() => {
//    console.log(`FlipNum: ${questionNum}`);
    setCardTextByFlip();
  }, [flipState]);

  useEffect(() => {
    initialize();
  }, []); 

  return (
    <div>
      <div className="head">
        <h1>Flashmein!</h1>
      </div>
      <div className="card-skin">
        <div className="card-text">
          {cardText}
        </div>
        <div style={{ visibility: flipState ? "hidden" : "visible"}}>
          <button className="btn midleftbtn okbtn" 
                  onClick={()=> {
                    setNextQuestion();
          }}>OK</button>
          <button className="btn midrightbtn ngbtn"
                  onClick={()=> {
                    setNextQuestion();
          }}>NG</button>
        </div>
        <button 
          className="btn rightbtn flipbtn" 
          onClick={() => {
            flipCard();
          }}>Flip</button>
      </div>
      <div className="posi-centerdiv">
        <button className="btn midbtn flipbtn">Add Question</button>
      </div>
    </div>
  );
}
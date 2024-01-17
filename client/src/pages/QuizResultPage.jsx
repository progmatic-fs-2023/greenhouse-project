import React from 'react';

const QuizResultPage = ({ totalQuestions, correctAnswers }) => {
  return (
    <>
      <div>
        <h2>Quiz Results</h2>
        <p>Total Questions: {totalQuestions}</p>
        <p>Correct Answers: {correctAnswers}</p>
      </div>
      <div style={{ fontSize: 50 }}>
        <p>
          {correctAnswers} / {totalQuestions}
        </p>
      </div>
    </>
  );
};

export default QuizResultPage;

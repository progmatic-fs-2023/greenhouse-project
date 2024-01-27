import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuizAnswer from './QuizAnswer';
import QuizHandler from './QuizHandler';
import '../QuizModulsPageComponents/quizmodul.css';

export default function QuizQuestionCard({ answers, nextQuestion, nextQuestionIndex }) {
  const [isCorrectPresent, setIsCorrectPresent] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [areAnswersDisabled, setAreAnswersDisabled] = useState(false);

  useEffect(() => {
    setIsCorrectPresent(answers.some((answer) => answer.isCorrect !== undefined));
  }, [answers]);

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
    setAreAnswersDisabled(true);
  };

  const handleNextQuestion = () => {
    setAreAnswersDisabled(false);
    nextQuestionIndex();
  };

  return (
    <div className="quiz_question_card">
      <div className="quiz_answer_container">
        {answers.map((answer) => (
          <div key={answer.id} className="quiz_answer">
            <QuizAnswer
              answer={answer}
              nextQuestion={nextQuestion}
              correctAnswer={answer.isCorrect ? answer.id : null}
              selectedAnswer={selectedAnswer}
              onAnswerClick={handleAnswerClick}
              isDisabled={areAnswersDisabled}
            />
          </div>
        ))}
        <QuizHandler nextQuestionIndex={handleNextQuestion} isCorrectPresent={isCorrectPresent} />
      </div>
    </div>
  );
}

QuizQuestionCard.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool,
    }),
  ).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  nextQuestionIndex: PropTypes.number.isRequired,
};

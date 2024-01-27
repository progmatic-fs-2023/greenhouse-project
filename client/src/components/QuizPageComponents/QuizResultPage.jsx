import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useAuth } from '../../contexts/AuthContext';
import calculateRanks from './CalculateRanks';
import 'react-circular-progressbar/dist/styles.css';
import './xpbar.css';
import './animations.css';
import './quizpage.css';

Modal.setAppElement('#root');

function QuizResultPage({ totalQuestions, correctAnswers }) {
  const { currentUserXp, startGameUserXp, isLoggedIn, fetchCurrentUserXp } = useAuth();
  const [reachedNextRank, setReachedNextRank] = useState(false);
  const [xpPercentage, setXpPercentage] = useState(0);
  const { currentRank: starGameRank} = calculateRanks(startGameUserXp);
  console.log(upperThreshold, nextRank, currentUserXp, startGameUserXp, correctAnswers);

  useEffect(() => {
    fetchCurrentUserXp();
  }, []);

  useEffect(() => {
    const updateRankInfo = () => {
      const { lowerThreshold, upperThreshold,nextRank, currentRank} = calculateRanks(currentUserXp);
      const xpWithinRange = currentUserXp - lowerThreshold;
      const range = upperThreshold - lowerThreshold;
      setXpPercentage(Math.max(5, Math.min((xpWithinRange / range) * 100, 100)));

      if (currentUserXp >= upperThreshold) {
        setReachedNextRank(true);
      } else {
        setReachedNextRank(false);
      }
    };

    updateRankInfo();
  }, [currentUserXp]);

  const centerLabel = `${upperThreshold - userXp} XP to reach ${currentNextRank} rank`;

  return (
    <div className="quiz-result-container">
      <div className="quiz-result-info">
        <div className="quiz-results-heading">Quiz Results</div>
        <p className="quiz-results-text">Total Questions: {totalQuestions}</p>
        <p className="quiz-results-text">Correct Answers: {correctAnswers}</p>
      </div>
      <div className="quiz-result-score" style={{ fontSize: 50 }}>
        <p>
          {correctAnswers} / {totalQuestions}
        </p>
      </div>
      <div className="quiz-result-button">
        <Link to="/quizmoduls">
          <button type="button" className="new-quiz-button">
            NEW QUIZ
          </button>
        </Link>
      </div>
      <div>
        {isLoggedIn && (
          <div>
            <CircularProgressbar
              className="xp-bar"
              value={xpPercentage}
              text={centerLabel}
              styles={{ text: { fontSize: '5px' } }}
            />
          </div>
        )}
      </div>
      <Modal
        isOpen={reachedNextRank}
        onRequestClose={() => setReachedNextRank(false)}
        contentLabel="Congratulations Modal"
        className="customModal"
      >
        <h2>Congratulations!</h2>
        <p>You have reached the next rank: {currentNextRank}</p>
        <button type="button" onClick={() => setReachedNextRank(false)}>
          Close
        </button>
      </Modal>

      <div className="firework-container">
        <div className="firework" />
        <div className="firework" />
        <div className="firework" />
        <div className="firework" />
        <div className="firework" />
      </div>
      {/* <div className="pyro">
        <div className="before" />
        <div className="after" />
      </div> */}
    </div>
  );
}

QuizResultPage.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
};

export default QuizResultPage;

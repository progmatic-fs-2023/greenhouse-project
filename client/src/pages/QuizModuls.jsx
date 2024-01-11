import { useEffect, useState } from 'react';
import '../components/QuizModulsPageComponents/quizmodul.css';
import '../components/HomePageComponents/card.css';
import Description from '../components/QuizModulsPageComponents/Description';
import LanguageCard from '../components/QuizModulsPageComponents/LanguageCard';
import { API_URL } from '../constants';

function QuizModuls() {
  const [objecttopics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      const respone = await fetch(`${API_URL}/game/quizmoduls`);
      const fetchedTopics = await respone.json();
      setTopics(fetchedTopics.topics);
    };
    getTopics();
  }, []);

  return (
    <div className="quizmodul_main_container">
      <Description />
      <div className="language_card_container">
        {objecttopics.map((topic) => (
          <LanguageCard key={topic.id} title={topic.description} language={topic.name} />
        ))}
      </div>
    </div>
  );
}

export default QuizModuls;

import './card.css';
import Card from './Card';

function InstructionCards() {
  return (
    <div className="cards_main_container">
      <h1>How it works:</h1>
      <div className="cards_container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default InstructionCards;

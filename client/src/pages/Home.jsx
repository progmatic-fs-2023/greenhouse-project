import '../components/HomePageComponents/welcome.css';
import WelcomeText from '../components/HomePageComponents/WelcomeText';
import WelcomeImg from '../components/HomePageComponents/WelcomeImg';
import InstructionCards from '../components/HomePageComponents/InstructionCards';

function Home() {
  return (
    <div className="welcome_div">
      <WelcomeText />
      <WelcomeImg />
      <InstructionCards />
    </div>
  );
}

export default Home;

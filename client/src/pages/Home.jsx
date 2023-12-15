import '../components/HomepageComponents/welcome.css';
import WelcomeText from '../components/HomepageComponents/WelcomeText';
import WelcomeImg from '../components/HomepageComponents/WelcomeImg';
import InstructionCards from '../components/HomepageComponents/InstructionCards';

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

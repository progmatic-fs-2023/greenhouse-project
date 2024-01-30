import welcome from '../../assets/welcome_transp.png';

function Welcome() {
  return (
    <div>
      <div className="welcome_text">
        <div>
          <h1>
            Welcome to <b>Greenhouse!</b>
          </h1>
          <h3>Green Dreams, Blooming Realities: Your Green Oasis of Growth.</h3>
        </div>
        <div id="welcome_img">
          <img src={welcome} alt="placeholder_img" />
        </div>
        <p>
          Embark on a journey of knowledge with our interactive quiz experience!
          <br />
          Unleash the scholar in you as you dive into a world of questions designed to challenge and
          enlighten. Whether you&apos;re here to sharpen your skills or explore new horizons,
          you&apos;re in for an exciting learning adventure. Ready to begin? Click &apos;Start
          Quiz&apos; and let the quest for knowledge commence! Remember: It&apos;s not just a quiz;
          it&apos;s a journey of discovery. Happy quizzing! ✨
        </p>
      </div>
    </div>
  );
}

export default Welcome;

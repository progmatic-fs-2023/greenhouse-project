import '../components/ErrorLandingPageComponents/Errorlanding.css';
import ChromeDinoGame from 'react-chrome-dino';
const ErrorLandingPage = () => {
  return (
    <div class="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but it seems there's a problem with our server. Please try again later.</p>
      <ChromeDinoGame />
    </div>
  );
};

export default ErrorLandingPage;

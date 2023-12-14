import logo from '../../../assets/potted_plant.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="plant_logo" className="logo" />
      <p>greenhouse code</p>
    </div>
  );
}

export default Logo;

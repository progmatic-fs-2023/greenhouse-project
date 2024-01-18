import { NavLink } from 'react-router-dom';

export default function Premium() {
  return (
    <div className='premium'>
      <h2>Premium features not yet available. 
        <br /><br />
        If you would like to be notified about exciting upcoming 
        news, please subscribe to <NavLink to="/profile/notifications">our newsletter</NavLink>, if you
        have not already. </h2>
    </div>
  );
}

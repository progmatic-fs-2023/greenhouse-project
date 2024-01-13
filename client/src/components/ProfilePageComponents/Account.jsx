import { useAuth } from '../../contexts/AuthContext';
import './profileMenu.css'

export default function Account() {
  const { userEmail, username } = useAuth();

  return (
    <div className='container'>
      <div className='input_container'>
        <label htmlFor='email' className='email_label'>
          Email address:
          <input name='email' className='email' type="text" value={userEmail}/>
        </label>

        <label htmlFor='username' className='username_label'>
          Username:
          <input name='username' className="username" type="text" value={username}/>
        </label>
      </div>

      <button type='button' id='delete_button'>Delete profile</button>
    </div>
  );
}

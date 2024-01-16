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
        <button type='submit'>Save</button>

        <label htmlFor='username' className='username_label'>
          Username:
          <input name='username' className="username" type="text" value={username}/>
        </label>
        <button type='submit'>Save</button>
      </div>

      <button type='button' id='delete_button'>Delete profile</button>
    </div>
  );
}

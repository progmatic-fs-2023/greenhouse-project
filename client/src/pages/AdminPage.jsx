import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminPage() {
  const { username } = useAuth();

  return (
    <div className='admin_main_container'>
      <div className="admin">
        <h1>Hello {username}</h1>
        <h3>Want would you like to do?</h3>
        <NavLink to="/admin/new">
          <button type="button">New Question</button>
        </NavLink>
        <NavLink to="/admin/edit">
          <button type="button">Edit Question</button>
        </NavLink>
      </div>
    </div>
  );
}

import { useAuth } from '../../contexts/AuthContext';

export default function Account() {
  const { userEmail } = useAuth();

  return (
    <div>
      <h1>{userEmail}</h1>
    </div>
  );
}

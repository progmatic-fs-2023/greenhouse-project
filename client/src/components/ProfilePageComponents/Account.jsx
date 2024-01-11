import PropTypes from 'prop-types';

export default function Account({ userEmail }){

  return (
    <div>
      <h1>{userEmail}</h1>
    </div>
  );
}

Account.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

import './profileMenu.css'

export default function Notifications() {
  return (
    <div className='container'>
      <div className='input_container'>
        <label htmlFor='subscription' className='subscription'>
          Subscribe to newsletter:
          <input name='subscription' className='toggle_switch' type="checkbox" value=""/>
          <span className="slider round"/>
        </label>
      </div>
    </div>
  );
}

export default function Password() {
  return (
    <div className="container">
      <div className="input_container">
        <label htmlFor="current_password" className="current_password_label">
          Current password:
          <input name="current_password" className="current_password_input" type="text" value="" />
        </label>

        <label htmlFor="new_password" className="new_password_label">
          New password:
          <input name="new_password" className="new_password_input" type="text" value="" />
        </label>
      </div>
    </div>
  );
}

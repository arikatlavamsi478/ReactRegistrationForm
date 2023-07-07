import Welcome from "./Welcome";
function RegistrationForm() {
  return (
    <div className="App">
      <Welcome to Sign up />
      <form>
        <label>
          Enter your first name:
          <input type="text" />
        </label>
        <label>
          Enter your last name:
          <input type="text" />
        </label>
        <label>
          Enter your user id:
          <input type="text" />
        </label>
        <label>
          Enter your email:
          <input type="text" />
        </label>
        <label>
          Enter your password:
          <input type="text" />
        </label>
        <label>
          Enter your mobile number:
          <input type="text" />
        </label>
        <label>
          Enter your confirmation password:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default RegistrationForm;

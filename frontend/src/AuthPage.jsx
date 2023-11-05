
import axios from 'axios';
import "./App.css";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

axios.post(
    "http://localhost:3001/authenticate",
    { username: value }
  )
  .then((r) => props.onAuth({ ...r.data, secret: value }))
  .catch((e) => {
    // Handle the failure gracefully
    const errorCode = e.response.status;
    const errorMessage = e.response.data.error;
  
    console.log("error", errorCode, errorMessage);
  
    // Display a friendly error message to the user
    alert(`Authentication failed. Error code: ${errorCode}. Error message: ${errorMessage}.`);
  });
  }
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label"></div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
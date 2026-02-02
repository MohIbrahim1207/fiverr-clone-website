
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-container">
      <h2>Sign in to Fiverr</h2>

      <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Login</button>
      </form>

      <p className="auth-text">
        New to Fiverr? <a href="/register">Join now</a>
      </p>
    </div>
  );
}

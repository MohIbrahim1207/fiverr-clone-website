import "./Auth.css";

export default function Register() {
  return (
    <div className="auth-container">
      <h2>Create a new account</h2>

      <form className="auth-form">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Register</button>
      </form>

      <p className="auth-text">
        Already have an account? <a href="/login">Sign in</a>
      </p>
    </div>
  );
}

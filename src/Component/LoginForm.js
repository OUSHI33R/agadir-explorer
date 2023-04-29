import './LoginForm.css'

function LoginForm() {
  return (
    <div className="form-container">
      <form>
        <input type="Email" placeholder="Email"/>
        <input type="password" placeholder="password"/> 
        <span>Forgot Password?</span>
        <br/>
        <button type="submit">Login</button>
        
      </form>
      <br/>
      <hr/>
      <center>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </center>
    </div>  
  )
}

export default LoginForm
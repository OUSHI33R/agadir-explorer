import './SignUpForm.css'

function SignUpForm() {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Username"/>
        <input type="Email" placeholder="Email"/>
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="Confirm password"/>    
        <button type="submit">Sign Up</button>
      </form>
      <br/>
      <hr/>
      <center>
        <p>Already have an account? <a href="/login">Login</a></p>
      </center>
    </div>  
  )
}

export default SignUpForm
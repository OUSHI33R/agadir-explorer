import './ContactForm.css'

function ContactForm() {
  return (
    <div className="form-container">
      <center>
         <h1>Send message to us</h1>
      </center>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
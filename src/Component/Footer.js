import "./Footer.css"
import { SiYourtraveldottv } from "react-icons/si";


const Footer = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;
  return (
    <div className="footer">
        <div className="top">
            <div className="">
                <h2 className="logo"><SiYourtraveldottv/>Agadir Explorer.</h2>
                <p>Choose Your favourite Destination</p>
            </div>
            <div className="">
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i class="fa-brands fa-square-pinterest"></i>
                </a>
                <a href="/">
                    <i class="fa-brands fa-spotify"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>SEE & DO</h4>
                <a href="/">Beach </a>
                <a href="/">Culture</a>
                <a href="/">Nature</a>
                <a href="/">Sport</a>
                <a href="/">Suggested tours</a>

            </div>
            <div>
                <h4>PLACES TO GO</h4>
                <a href="/">Marrakesh</a>
                <a href="/">Tangier</a>
                <a href="/">Dakhla</a>
                <a href="/">Explore more cities</a>
            </div>
            <div>
                <h4>TRAVEL INFO</h4>
                <a href="/">Events</a>
                <a href="/">Getting around Morocco</a>
                <a href="/">Food & drinks</a>
                <a href="/">Iconic things</a>

            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>

        </div>
        <footer>
                <p>© {date} <span>Agadir Explorer.</span> All rights reserved.</p>
        </footer> 
    </div>
  )
}
export default Footer
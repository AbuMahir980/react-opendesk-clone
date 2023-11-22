import footerLogo from '../assets/images/opendesk-footer-logo.png'
import twitter from '../assets/images/socials/icons8-twitter-squared-32.png'
import facebook from '../assets/images/socials/icons8-facebook-32.png'
import instagram from '../assets/images/socials/icons8-instagram-32.png'
import pinterest from '../assets/images/socials/icons8-stylish-p-logo-for-pinterest-app-for-cross-platform-devices-32.png'
import linkedin from '../assets/images/socials/icons8-linkedin-32.png'
import vimeo from '../assets/images/socials/icons8-vimeo-32.png'
import youtube from '../assets/images/socials/icons8-youtube-logo-32.png'
import '../css/Footer.css'

const Footer = () => {
    return(
        <footer>
            <div class="container">
                <div class="footer-top">
                    <div class="footer-logo">
                        <img src={footerLogo} alt="opendesk-footer-logo"/>
                    </div>

                    <div class="links">
                        <div class="link-items" id="about">
                            <a href="">About</a>
                        </div>
                        <div class="link-items" id="contact">
                            <a href="">Contact</a>
                        </div>
                        <div class="link-items" id="terms">
                            <a href="">Terms of Use</a>
                        </div>
                        <div class="link-items" id="jobs">
                            <a href="">Jobs</a>
                        </div>
                    </div>

                    <div class="socials">
                        <a href=""><img src={twitter} alt="twitter-icon-link"/></a>
                        <a href=""><img src={facebook} alt="facebook-icon-link"/></a>
                        <a href=""><img src={instagram} alt="instagram-icon-link"/></a>
                        <a href=""><img src={pinterest} alt="pinterest-icon-link"/></a>
                        <a href=""><img src={linkedin} alt="linkedin-icon-link"/></a>
                        <a href=""><img src={vimeo} alt="vimeo-icon-link"/></a>
                        <a href=""><img src={youtube} alt="youtube-icon-link"/></a>
                    </div>
                </div>
            </div>
            <hr id="rule"/>
            <div class="container">    
                <div class="footer-bottom">
                    <div class="newsletter">
                        <button type="submit" id="newsletter">Sign up to our newsletter</button>
                    </div>
                    <div class="feedback">
                        <p class="feedback-statement">Let us know your thoughts about things you love and things that can be improved on the site:</p>
                        <a href="#" class="feedback-statement" id="line">The art of sharing</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
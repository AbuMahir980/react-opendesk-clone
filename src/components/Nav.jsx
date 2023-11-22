import logo from '../assets/images/opendesk-logo.png'
import '../css/Nav.css'

const Nav = () => {
    return(
        <section id="navbar-container">
            <div class="navbar-content">
                <div id="logo">
                    <a href="#"><img src={logo} alt="opendeskLogo"/></a>
                </div>
                <ul>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Workspaces</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="navbar-content">
                <div id="shopping-cart">
                    <a href="#" id="shopping-cart-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 32 32"><path d="M11.179 29.728c-1.877.0-3.403-1.525-3.403-3.403s1.525-3.403 3.403-3.403c1.877.0 3.403 1.525 3.403 3.403s-1.525 3.403-3.403 3.403zm0-5.184c-.981.0-1.781.8-1.781 1.781s.8 1.781 1.781 1.781 1.781-.8 1.781-1.781c0-.981-.8-1.781-1.781-1.781z"></path><path d="M26.144 29.728c-1.877.0-3.403-1.525-3.403-3.403s1.525-3.403 3.403-3.403 3.403 1.525 3.403 3.403-1.525 3.403-3.403 3.403zm0-5.184c-.981.0-1.781.8-1.781 1.781s.8 1.781 1.781 1.781 1.781-.8 1.781-1.781c0-.981-.8-1.781-1.781-1.781z"></path><path d="M30.133 9.6c-.576-.576-1.333-.885-2.155-.885h-14.56c-.448.0-.811.363-.811.811s.363.811.811.811h14.56c.384.0.736.149 1.003.416.405.395.469 1.056.171 1.6l-3.627 6.56c-.405.725-1.173 1.184-2.005 1.184H12.085c-.683.0-1.28-.491-1.408-1.195L7.584 4.918s0 0 0-.011c-.299-1.525-1.643-2.635-3.211-2.635H1.856c-.448.0-.811.363-.811.811s.363.811.811.811h2.517c.8.0 1.483.565 1.621 1.355v.011.011l3.083 13.952c.267 1.44 1.525 2.496 2.997 2.496h11.435c1.419.0 2.731-.779 3.424-2.016l3.627-6.56c.661-1.184.48-2.635-.427-3.541z"></path></svg>
                    </a>
                </div>
                <div id="hover" class="dropdown">
                    <a href="#">Join as a maker</a>
                    <div class="dropdown-content">
                        <a href="#">Interested in making Opendesk furniture? Sign up here</a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Nav
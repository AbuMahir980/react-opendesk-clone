import desk from '../assets/images/products/desk_home-page.jpeg'
import bench from '../assets/images/products/johann_bench-home-page.webp'
import bookshelf from '../assets/images/products/linnea_Boookshelf-home-page.webp'
import process1 from '../assets/images/process-step1.png'
import process2 from '../assets/images/process-step2.png'
import process3 from '../assets/images/process-step3.png'
import process4 from '../assets/images/process-step4.png'
import dezeen from '../assets/images/logos/dezeen.png'
import fastcompany from '../assets/images/logos/fastcompany.png'
import google from '../assets/images/logos/google.png'
import nike from '../assets/images/logos/nike.png'
import techcrunch from '../assets/images/logos/techcrunch.png'
import theguardian from '../assets/images/logos/theguardian.png'
import wework from '../assets/images/logos/wework.png'
import wired from '../assets/images/logos/wired.png'
import greenpeace from '../assets/images/logos/greenpeace.png'
// import bg from '../assets/images/opendesk_bg-img-1200x640.jpg'
// import maker from '../assets/images/opendesk_homepage_maker-feature_renatus.full_-1200x640.jpg'
// import lean from '../assets/images/opendesk_leandesk_homepage.jpg'
import '../css/Main.css'


const Main = () => {

    return(
        <main class="container">

            {/* <!-- hero section structure + content --> */}
            <div class="hero">
                <div class="hero-bg-img"></div>
                <div class="bg-opacity"></div>
                <div class="hero-texts">
                    <h2 id="highlight">
                        Furniture designed for inspiring workplaces
                    </h2>
                    <p id="tagline">
                        We're changing the way furniture is made, by connecting customers to local makers
                    </p>
                    <button type="submit">Shop Furniture</button>
                </div>
            </div>

            {/* <!-- Items display section structure + content --> */}
            <div class="item-display">
                <div class="item-display-row">
                    <div class="items">
                        <a href="#">
                            <img src={desk} alt="lean-desk"/>
                            <h2 class="items-title">Lean Desk</h2>
                            <p class="items-tagline">Generous four seat workstation</p>
                        </a>
                    </div>
                    <div class="items">
                        <a href="#">
                            <img src={bookshelf}alt="linnea-bookshelf" />
                            <h2 class="items-title">Linnea Bookshelf</h2>
                            <p class="items-tagline">Elegant shelving & storage solution</p>
                        </a>
                    </div>
                    <div class="items">
                        <a href="#">
                            <img src={bench} alt="johann-bench" />
                            <h2 class="items-title">Johann Bench</h2>
                            <p class="items-tagline">2 Person canteen and meeting bench</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Brand identity section structure + contents --> */}
            <div class="brand-identity">
                <div class="brand-identity-img"></div>
                <div class="brand-identity-statements">
                    <h2 id="brand-identity-headline">
                        A global platform for local making
                    </h2>
                    <p id="brand-identity-tagline">
                        Opendesk is an online marketplace that hosts independently designed furniture and connects its customers to local makers around the world. Rather than mass manufacturing and shipping worldwide, we're building a distributed and ethical supply chain through a global maker network.
                    </p>
                </div>
            </div>

            {/* <!-- Purchase process section structure + contents --> */}
            <div class="process bg-color-grey">
                <h2 class="process-headline">
                    How IT WORKS
                </h2>
                <div class="process-steps">
                    <div class="process-step-items">
                        <img src={process1} alt=""/>
                        <h2 class="process-step-titles">Select designs</h2>
                        <p class="process-step-tagline"><a href="#" class="tags">Browse</a> and add designs to your basket or <a href="#" class="tags">get in touch</a> for help</p>
                    </div>

                    <div class="process-step-items">
                        <img src={process2} alt=""/>
                        <h2 class="process-step-titles">Request quotes</h2>
                        <p class="process-step-tagline">Get quotes from local makers in your area within two business days</p>
                    </div>

                    <div class="process-step-items">
                        <img src={process3} alt=""/>
                        <h2 class="process-step-titles">Choose your maker</h2>
                        <p class="process-step-tagline">Choose the local maker&rsquo;s quote that works best for you</p>
                    </div>

                    <div class="process-step-items">
                        <img src={process4} alt=""/>
                        <h2 class="process-step-titles">Receive your furniture</h2>
                        <p class="process-step-tagline padd">Get furniture delivered to your door in 2-4 weeks, direct from your maker</p>
                    </div>
                </div>
                <button type="submit">Get started</button>
            </div>
            
            {/* <!--Company Partners section structure + contents--> */}
            <div class="partners-logos">
                <div class="logos">
                    <img src={nike} alt="Nike-logo" class="sizing"/>
                </div>
                <div class="logo">
                    <img src={wework} alt="wework-logo" class="sizing"/>
                </div>
                <div class="logo">
                    <img src={google} alt="Google-logo" class="sizing"/>
                </div>
                <div class="logos">
                    <img src={greenpeace} alt="Greenpeace-logo" class="sizing"/>
                </div>
            </div>

            {/* <!--Purchase case studies section structure + contents --> */}
            <div class="purchase">
                <div class="purchase_bg-img"></div>
                <div class="purchase-texts">
                    <h2 id="purchase-headline">
                        Inspiring workplaces for amazing companies
                    </h2>
                    <p id="purchase-tagline">
                        We spend one third of our lives working, so our work environments matter. These companies bought Opendesk designs from local makers because they&rsquo;re beautiful, made on-demand and built for collaboration
                    </p>
                    <button type="submit">View case studies</button>
                </div>
            </div>

            {/* <!-- Customers quote section structure + contents --> */}
            <div class="quote">
                <h2 id="quote-headline">The Guardian</h2>
                <p id="quote-tagline">
                    &ldquo;Opendesk is changing the way furniture is produced and moved, cutting out time-consuming and expensive shipping, showrooms and storage.&rdquo;
                </p>
            </div>

            {/* <!--Company Partners 2nd section structure + contents--> */}
            <div class="partners-logos" id="second-logo">
                <div class="logos2">
                    <img src={fastcompany} alt="fastcompany-logo" class="sizing"/>
                </div>
                <div class="logos2">
                    <img src={wired} alt="wired-logo" class="sizing"/>
                </div>
                <div class="logos2">
                    <img src={techcrunch} alt="techcrunch-logo" class="sizing"/>
                </div>
                <div class="logos2">
                    <img src={theguardian} alt="theguardian-logo" class="sizing"/>
                </div>
                <div class="logos2">
                    <img src={dezeen} alt="dezeen-logo" class="sizing"/>
                </div>
            </div>
        </main>
    )
}

export default Main
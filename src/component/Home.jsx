import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillLinkedin,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

export const Home = () => {
    return ( 
        <>
    <div className='home' id='home'>

        <main>
            <h1>Frontend Developer</h1>
            <p>Managing client expectations, educating clients, preventing scope creep,<br/>
             and addressing client insecurities are just a few of the daily challenges faced by front-end developers.<br/>
              With dedication, hard work, and a commitment to continuous learning, however, these challenges can be overcome.</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt='Graphics'/>
        <div>
            <p>
            Front-end developers face numerous daily challenges,
             and managing client expectations is one of the biggest ones. 
             Clients often have a specific vision for their website, 
             and it's up to front-end developers to bring that vision to life.
              However, clients may not always understand the technical limitations of web development,
               which can lead to unrealistic expectations.
            </p>
        </div>
    </div>
    <div className="home3" id= "about">
        <div>
            <h1>What We Do ?</h1>
            <p>A front-end developer builds the front-end portion of websites
                 and web applications—the part users see and interact with.
                  A front-end developer creates websites and applications using web languages
                   such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.
                      Front-end developers create user interfaces (UI).
                       UI is the graphical layout of an application that determines what each part of a site or application does and how it will look.
                        "I've always found crafting polished user interactions that surprise and delight users to be the most
                         rewarding and engaging task," says Mari Batilando, a software engineer at Meta. "In order to do this, 
                         you need to both have an eye for detail and a rock-solid understanding of the platform."
                      If someone wanted to build a website, they might hire a front-end developer to create the site's layout.
                      </p>
                       </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:" 0.5s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
                <AiFillLinkedin/>
                <p>Lindedin</p>
            </div>
            <div style={{animationDelay: "0.1"}}>
                <AiFillYoutube/>
                <p>YouTube</p>
            </div>
            </article>
        </div>
    </div>
    </>
    )

}
export default Home;

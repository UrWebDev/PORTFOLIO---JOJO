import React from 'react'
import './Hero.scss';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='heroSection'>
        <div className="left">
            <div className='innerleft'>
              <h1>Jojo C. Maninang :</h1>
            </div>
            <div className="workpo">
              <h1>Front-end & Web Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla maxime est, doloremque libero excepturi repellat pariatur atque praesentium quis consequuntur sequi delectus officia nostrum numquam nisi inventore! Iusto sapiente provident eius officia quo asperiores magnam accusantium dolor minima dolore deleniti ex est pariatur, reprehenderit eos laudantium nam optio, ratione rerum eveniet tenetur, consequuntur atque? Voluptas quisquam pariatur exercitationem non eligendi beatae quaerat impedit repellat quidem inventore. Amet delectus sed vero illum debitis quasi cum. Aliquid iure deserunt fuga in, adipisci placeat eos unde ipsam, blanditiis amet, nam minus quo nihil nisi. Odio officiis perspiciatis doloremque dolore mollitia? Vero, enim.</p>
            </div>
            <div className='navcontainer'>
              <NavLink to="/home" className="nav">
                <span>Home</span>
              </NavLink>
              <NavLink to="/skills" className="nav">
                <span>Skills</span>
              </NavLink>
              <NavLink to="/about" className="nav">
                <span>About</span>
              </NavLink>
            </div>
        </div>
        <div className="right">
            <div className='innerright'>
              <h1>Download CV</h1>
            </div>
            <div className='circlecontainer'>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="image-container">
          <img src="/path/to/your/image.png" alt="Profile" className="profile-image" />
        </div>
            <div className="linescontainer">
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
        </div>
    </section>
  )
}

export default Hero
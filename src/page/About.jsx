import React from 'react'
import './About.scss'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className='aboutSection'>
        <div className="left">
          <div className="innerleft">
            <h1>About Me</h1>
          </div>
          <div className="me">
            <h1>Im Jojo C. Maninang</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto eveniet in error assumenda. Repellat repudiandae voluptates necessitatibus! Natus, nobis, pariatur atque voluptate repellendus obcaecati fugiat sit id adipisci praesentium aperiam repudiandae nam itaque distinctio necessitatibus quos delectus sed deleniti, libero fugit. Nulla nihil quidem quibusdam esse amet fuga voluptas perferendis. Consequuntur tempora numquam nihil similique expedita velit necessitatibus unde vitae iste esse quos iusto vero, doloremque, inventore aperiam excepturi repellat illo reiciendis beatae atque aliquam illum error enim voluptatem. Perferendis dolores commodi, libero aperiam, voluptatem quam deleniti voluptas rerum nemo molestias neque. Voluptatibus, debitis? Numquam, placeat! Quam, quia quisquam?</p>
          </div>
          <div className="contact">
            <h1>Contact Me</h1>
            <p></p>
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
            <div className="linescontainerupper">
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
            <div className="photocontainer">
            
            </div>
            <div className="linescontainerdown">
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

export default About
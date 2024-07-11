import React from 'react'
import './Skill.scss'
import { NavLink } from 'react-router-dom' 

const Skill = () => {
  return (
    <>
      <section className='skillSection'>

        <div className="left">
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
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
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

        <div className="right">
            <div className="title">
              <h1>My Skills / Tech Stacks</h1>
            </div>

            <div className="maincontainer">
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
              <div className="card">
          
              </div>
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
    </section>
    </>
  )
}

export default Skill

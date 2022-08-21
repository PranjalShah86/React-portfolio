import React from 'react'
import "./About.css"
import ME from "../../assets/Photo 1.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUser} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="About Image"/>
            </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='abot__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUser className='abot__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='abot__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
          </div>
          <p>
          John gives you everything you need to know about his major accomplishments. He includes links to his books, and then follows with links to his most acclaimed online projects. There’s also a link to learn more if you’re so inclined. This kind of summary is super helpful to include on your website, even if you’re not (yet) as accomplished as John. Give a concise summary; don’t overwhelm visitors with your life story right off the bat.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
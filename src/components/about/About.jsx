import './about.scss'
import { Icon } from '@iconify-icon/react'
import Typewriter from 'typewriter-effect'


export default function About() {



  return (
    <div className='about' id='about'>
      <div className="left">
        <div className="image-container">
          <img src="assets/hughphoto.jpeg" alt="A pic of Hugh" />
        </div>
      </div>
      <section className="right">
        <div className="wrapper">
          <h1>Welcome!</h1>
          <h2>I'm Hugh, a Software Engineer who loves solving problems, <br></br> coding cool stuff, and geeking out about board games!</h2>
          <h3>I'm 
            <Typewriter className="typer" component="span"
              options={{
                strings: [' curious', ' driven', ' kind'],
                autoStart: true,
                loop: true,
                delay: 80,
                cursor: "",
                deleteSpeed: 80,
                pauseFor: 800,
                skipAddStyles: false,
              }}
            />
          </h3>
        </div>
        <footer className="footer">
          <h3><a href="#projects">See my projects <br></br><span><Icon icon="akar-icons:chevron-down" color="black" width="36" height="36" /></span></a></h3>
        </footer>
      </section>
    </div>
  )
}

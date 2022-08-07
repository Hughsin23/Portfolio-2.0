import ProjectsList from '../projectsList/ProjectsList'
import './projects.scss'
import { useState } from 'react'
import { Icon } from '@iconify-icon/react'

export default function Projects() {

  const [selected, setSelected] = useState("featured")

  const projectTypeList = [
    {
      id: "solo",
      title: "Solo"
    },
    {
      id: "group",
      title: "Group"
    }
  ]

  return (
    <div className='projects' id='projects'>
      <h1>Projects!</h1>
      {/* don't have enough content right now to justify these */}
      {/* <ul>
        {projectTypeList.map((item) => {
          return <ProjectsList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        })}
      </ul> */}
      <div className="container">
        <div className="item">
          <img src="assets/tictactoe.png" alt="A picture of Hugh's tic tac toe" />
          <h3>Tic Tac Toe</h3>
          <a href="https://hughsin23.github.io/tic-tac-toe/" target="_blank" className='left'>Demo</a>
          <a href="https://github.com/Hughsin23/tic-tac-toe" className="right" target="_blank">Github</a>
        </div>
        <div className="item">
          <img src="assets/safehaven.png" alt="A picture of Hugh's team's womens safety app" />
          <h3>Safehaven</h3>
          <a href="https://safe-haven-app.herokuapp.com/" target="_blank" className='left'>Demo</a>
          <a href="https://github.com/Hughsin23/safehaven" className="right" target="_blank">Github</a>
        </div>
        <div className="item">
          <img src="assets/quack.png" alt="A picture of Hugh's duck spotting website" />
          <h3>Show us your Quack</h3>
          <a href="https://show-us-your-quack.herokuapp.com/" target="_blank" className='left'>Demo</a>
          <a href="https://github.com/Hughsin23/Quack" className="right" target="_blank">Github</a>
        </div>
        <div className="item">
          <img src="assets/hughmono.jpeg" alt="A picture of Hugh's duck spotting website" />
          <h3>This portfolio!</h3>
          <a href="https://github.com/Hughsin23/Portfolio-2.0" target="_blank">Github</a>
        </div>
      </div>
      <footer className="footer">
        <h3><a href="#projects">See my skills <br></br><span><Icon icon="akar-icons:chevron-down" color="black" width="36" height="36" /></span></a></h3>
      </footer>
    </div>
  )
}

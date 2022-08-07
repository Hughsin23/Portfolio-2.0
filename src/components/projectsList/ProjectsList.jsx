import "./projectsList.scss"

import React from 'react'

export default function ProjectsList({title, active, id, setSelected}) {
  return (
    <li className={active ? "Projects-list active" : "projects-list" } onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

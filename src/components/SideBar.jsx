import { useState } from "react"
import { Link } from "react-router-dom"

export default function SideBar({ data, selectedId, handleClick }) {


  const menu = data.map(obj =>
    <li onClick={() => handleClick(obj.id)} key={obj.id} className={selectedId === obj.id ? 'active' : ''}>
      <Link to={obj.link}><span><i className={obj.icon}></i></span>{obj.title}</Link>
    </li>)
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          {menu}
        </ul>
      </nav>
    </aside>
  )
}
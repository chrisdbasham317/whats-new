import React from 'react';
import './Menu.css'




const Menu = ({ text, dataSets, updateData }) => {
  return (
    <li
      className={`li li--${text}`}
      onClick={event => updateData(dataSets[text])}
    >{text.toUpperCase()}</li> 
  )
}

export default Menu;
import React from 'react';
import './Menu.css'




const Menu = (props) => {
  return <ul className='ul ul--menu'>
    <li data-set='local' className='li li--local' onClick={event => props.method(props.dataSets.local)}>Local News</li>
    <li data-set='technology' className='li li--tech' onClick={event => props.method(props.dataSets.technology)}>Technology</li>
    <li data-set='entertainment' className='li li--entertainment' onClick={event => props.method(props.dataSets.entertainment)}>Entertainment</li>
    <li data-set='science' className='li li--science' onClick={event => props.method(props.dataSets.science)}>Science</li>
    <li data-set='health' className='li li--health' onClick={event => props.method(props.dataSets.health)}>Health</li>    
  </ul>
}

export default Menu;
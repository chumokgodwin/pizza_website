import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'


function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}>
          
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>API
          See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.</p>
      </div>

    </div>
  )
}

export default About
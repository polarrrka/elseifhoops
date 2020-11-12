import React from 'react'
import Directory from '../../components/directory/Directory'
import './homepage.style.scss'

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
          <Directory></Directory>
      </div>
    </div>
  )
}


export default Homepage


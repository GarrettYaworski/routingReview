import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Route1 extends Component{
render(){
  return(
    <div>
      <h1>Route 1</h1>
      <Link to='/'><button>Home</button></Link>
      <Link to='/Route2'><button>Route2</button></Link>
    </div>
  )
}
}
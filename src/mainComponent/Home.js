import React from 'react'
import NavBar from '../navBar/NavBar'
import Featured from '../mainComponent/features/Featured'
import List from './list/List'
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <NavBar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
        
    </div>
  )
}

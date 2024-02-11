import React from 'react'
import DragZone from './components/DragZone'
import './App.css'

function App() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-2 bg-white-50 font-poppins">
      <h1>Hello</h1>
      <DragZone />
    </div>
  )
}

export default App

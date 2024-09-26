import './App.css'
import React from 'react';
import Body from './components/body'
import toast, { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div >
      <Body />
      <Toaster />
    </div>
  )
}

export default App

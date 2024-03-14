import { useState } from 'react';
import * as React from 'react';
import Navbar from './Navbar';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TodoList from './TodoList';
import './App.css';

function App() {

  return (
    <>
    <Navbar/>
    <TodoList/>

    </>
  )
}

export default App


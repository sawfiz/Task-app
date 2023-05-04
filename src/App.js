import React, { Component } from 'react';
import './App.css';

export default function TaskApp () {


  return (
    <div>
      <h1>Task App</h1>
      <form>
        <input type='text' placeholder='Enter a task'></input>
        <button>Submit</button>
      </form>
    </div>
  )

}
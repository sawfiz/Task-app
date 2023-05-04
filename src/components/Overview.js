import React from 'react';

export default function Overview({tasks}) {
console.log("🚀 ~ file: Overview.js:4 ~ Overview ~ tasks:", tasks)

  const tasksLi = tasks.map(task => <li key={task.uid}>{task.title}</li>)
  return <div>Overview
    <ol>{tasksLi}</ol></div>;
}

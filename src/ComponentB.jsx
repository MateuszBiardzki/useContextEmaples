import React from 'react'
import ComponentC from './ComponentC.jsx'

function ComponentA() {
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentA
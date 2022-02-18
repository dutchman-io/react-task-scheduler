import React from 'react'

const name = () => {
    const name = "Brad";
    const admin = true;
    return (
    <div>
      <h1>
        Hello, {name}.
      </h1>
      <h2>
        You { admin ? "have admin" : "don't have admin" } privilege
      </h2>
    </div>
  )
}

export default name

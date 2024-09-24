import React from 'react'

const Employee = (data: any) => {
  return (
    <>
      <div className= "text-center text-blue-100 bg-gray-800">
      <h1 className='text-center text-blue-500 text-4xl'>Employee Card</h1>
        <h2 >Name: {data.name}</h2>
        <h2>Id: {data.id}</h2>
        <h2>Shift: {data.shift}</h2>
        <h2>Join: {data.join}</h2>
      </div>
    </>

  )
}

export default Employee

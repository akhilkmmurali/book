import React from 'react'
import AddBook from '../components/AddBook'

function Home() {
  return (
    <>
    <div className=" ps-5 ms-5 mt-5">
        
          <h2 className='mt-3'>Book Management System</h2>

     
        <div className="ms-auto">
          <AddBook/>
        </div>
        <div className="mt-4">
          
      
        </div>
      </div>
    </>
  )
}

export default Home
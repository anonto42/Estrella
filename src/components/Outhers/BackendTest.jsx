import React, { useState } from 'react'

const BackendTest = () => {
    const [title,setTitle] = useState();
    const [dis,setdis] = useState();
    // fetch("http://localhost:3500/").then(item => item? item.json() : console.log("some thing is rong")).then(data => {
    //   console.log(data)
    // })

    // Assuming you want to fetch data from a URL
const url = 'http://localhost:3500/api';

// Using fetch to make a GET request to the backend
fetch(url)
  .then(response => {
    // Checking if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parsing the JSON response
    return response.json();
  })
  .then(data => {
    // Logging the fetched data to the console
    console.log(data);
  })
  .catch(error => {
    // Catching any errors that occurred during the fetch process
    console.error('There was a problem with the fetch operation:', error);
  });


  return (
    <>
        <div className='h-screen bg-slate-500' >
            <input className='bg-red-500' type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
            <h1 className='text-3xl text-white m-auto'>this is the section</h1>
        </div>
    </>
  )
}

export default BackendTest
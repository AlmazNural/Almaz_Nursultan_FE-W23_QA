import React from 'react'

const AddUser = ({ onAdd }) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  }

  return (
    <div className='text-center'>
      <h2 className='md:text-5x1 text-3x1 font-extrabold text-5xl text-primary mb-2'> Study with us </h2>
      <div className='stady'>
        <form onSubmit={handleOnSubmit}>
          <input className='bg-[#9a7af159] py-1 px-4 rounded-md focus:outline-none' placeholder="Name" name="name" />
          <input className='bg-[#9a7af159] py-1 px-4 ml-5 rounded-md focus:outline-none' placeholder="Email" name="email" />
          <button className='btnAdd ml-5 ' onSubmit={handleOnSubmit}>Add</button>
        </form>
      </div>
      <p className='text-tartiary md:w-1/3 mx-auto px-4'> Leave your details so we can contact you </p>
    </div>

  )
}

export default AddUser
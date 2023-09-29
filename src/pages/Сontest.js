// about
import about_2 from '../assets/About_2.png'
// footer
import logo from '../assets/logo.png'
import facebook from '../assets/footer_facebook.png'
import instagram from '../assets/footer_instagram.png'
import twitter from '../assets/footer_twitter.png'
import linkedin from '../assets/footer_linkedin.png'
import User from '../pages/User'
import AddUser from '../components/AddUser'
// hook
import { useEffect, useState } from "react";

const Сontest = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })

      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);

  return (
    <>
      <div className='md:px-20 mt-20 p-4 max-w-s mx-auto space-y-10' id='feature'>

        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 '>
          <div className='md:w-1/2'>
            <img src={about_2} alt='about_2' />
          </div>

          <div className='md:w-2/5'>
            <h2 className='md:text-5x1 text-3x1 font-bold text-4xl text-primary mb-5 leading-normal'>
              You can Practice at any <span className='text-secondary'>time convinent for you.</span>
            </h2>
            <p className='text-tartiary text-lg mb-7'>
              There are many advantages of flexible workplace attendance.
              Is an opportunity to plan the day taking into account the characteristics of the employee. For example, the most fruitful activity of a particular
              specialist is in the interval from 12 to 20 hours, and at 9 in the morning it is not necessary to wait for clarity of thought from him.
            </p>
            <button className='btnPrimary'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='mb-20 p-4 max-w-s mx-auto'>
        <br />
        <AddUser onAdd={onAdd} />

        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          />
        ))}
      </div>

      <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-gray-200' id='pricing'>
        <div className='my-12 flex flex-col md:flex-row gap-10'>
          <div className='md:w-1/2 space-y-8'>
            <a href='/' className='font-semibold flex items-center space-x-10 text-primary'>
              <img src={logo} alt='logo' className='w-10 px-1 inline-block items-center' />
              <span className='text-white'> XYZ </span>
            </a>
            <p className='md:w-1/2 text-white'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
            <div>
              <input type='email' name='email' id='email' placeholder='Your email'
                className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
              <input type='submit' value='Subscride' className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-400 transition-all' />
            </div>
          </div>

          {/* footer navigator */}

          <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
            <div className='space-y-4 mt-6'>

              <h4 className='text-xl'> Platform </h4>
              <ul className='space-y-2'>
                <a href='/' className='block hover:text-gray-400'>Overview</a>
                <a href='/' className='block hover:text-gray-400'>Features</a>
                <a href='/' className='block hover:text-gray-400'>About</a>
                <a href='/' className='block hover:text-gray-400'>Pricing</a>
              </ul>
            </div>

            <div className='space-y-4 mt-5'>
              <h4 className='text-xl'> Help </h4>
              <ul className='space-y-3'>
                <a href='/' className='block hover:text-gray-400'>How does it works?</a>
                <a href='/' className='block hover:text-gray-400'>Where to ask question?</a>
                <a href='/' className='block hover:text-gray-400'>How to play?</a>
                <a href='/' className='block hover:text-gray-400'>What is needed for this?</a>
              </ul>
            </div>

            <div className='space-y-4 mt-5'>
              <h4 className='text-xl'> Contacts </h4>
              <ul className='space-y-3'>
                <a href='/' className='block hover:text-gray-400'>(012) 1234-567-890</a>
                <a href='/' className='block hover:text-gray-400'>123 xyz xyz</a>
                <a href='/' className='block hover:text-gray-400'>qwuerybaihefv, qiwu - hrebcl</a>
                <a href='/' className='block hover:text-gray-400'>095467</a>
              </ul>
            </div>
          </div>


        </div>

        <hr />

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
          <p className=''>@ XYZ 20XX --- 20XX. All rights reserved.</p>
          <div className='flex items-center space-x-5'>
            <img src={facebook} alt='facebook' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
            <img src={instagram} alt='instagram' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
            <img src={twitter} alt='twitter' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
            <img src={linkedin} alt='linkedin' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Сontest
import React from 'react'
// about
import desc_foto from '../assets/desc_foto.png'
// footer
import logo from '../assets/logo.png'
import facebook from '../assets/footer_facebook.png'
import instagram from '../assets/footer_instagram.png'
import twitter from '../assets/footer_twitter.png'
import linkedin from '../assets/footer_linkedin.png'

const Introduction = () => {
  return (
    <>
      <div className='max-w-screen-2x1 mx-auto mt-20' id='about'>
        <div className='gradientIn md:p-9 px-4 py-9'>

          <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

            {/* banner img */}

            <div>
              <img src={desc_foto} alt='banner' className='lg:h-[386px]' />
            </div>

            {/* banner content */}

            <div className='md:w-3/5'>
              <h2 className='md:text-7x1 text-4x1 font-bold text-5xl text-primary mb-6 leading-relaxed'>Project Description QA</h2>
              <p className='text-[#272767] text-xl mb-1'>
                Этот проект был загружен с помощью приложения Create React.
              </p>
              <p className='text-[#272767] text-xl mb-1'>
                Запускается приложение в режиме разработки.
                Открытый http://localhost:3000 чтобы просмотреть его в браузере.
                Страница перезагрузится, если вы внесете изменения.
              </p>
              <p className='text-[#272767] text-xl mb-1'>
                Основные технологии которые были использованы при создании проекта
                HTML & CSS, CSS-фреймворк(tailwindcss), DOM, JavaScript, React,API(JSONPlaceholder) и т.д
              </p>
              <p className='text-[#272767] font-bold text-xl mx-12'>
                Описание проекта XYZ
              </p>
              <p className='text-[#272767] text-xl'>
                Пожалуй практически каждый из нас хотя бы раз задумывался о действительной надобности знания компьютера и периферии в современном мире.
                И почти каждый приходил к выводу, что в современной реальности компьютер окружает нас практически повсюду.
                Сейчас сферы деятельности человека достаточно тесно связаны с обработкой, хранением, передачей и поиском данных, а компьютер является инструментом, позволяющим со всем этим работать.XYZ это курс по изучению компьютерной грамотности и практика с использованием стационарного пк.
              </p>

              <p className='text-[#272767] font-bold text-xl'>
                Сайт состоит из трех pages, главная страница Home где и находиться непосредственно главная часть информации связаного с сайтом,в Home использовал хук useState и во всех страницах работал с tailwindcss.
                Страница Education отрисована таблица записей для клиентов и основная работ с API и хуками useState и useEffect.
                Последняя часть Introduction информация о проекте.
              </p>
            </div>

          </div>

        </div>
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

          <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start' id='pricing'>
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

export default Introduction
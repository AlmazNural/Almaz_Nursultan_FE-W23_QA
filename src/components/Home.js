import React from 'react'
// hook
import { useState } from 'react'
// home
import banner from '../assets/banner.png'
// features
import features from '../assets/features.png'
// about
import about_1 from '../assets/About_1.png'
// pricing
import pricing from '../assets/Pricing_green.png'
// footer
import logo from '../assets/logo.png'
import facebook from '../assets/footer_facebook.png'
import instagram from '../assets/footer_instagram.png'
import twitter from '../assets/footer_twitter.png'
import linkedin from '../assets/footer_linkedin.png'

const Home = () => {

    const [isTest, SetIsTest] = useState(false)

    const packages = [
        {
            name: "Start", monthlyPrice: 9, yearlyPrice: 27,
            description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Advance", monthlyPrice: 32, yearlyPrice: 145,
            description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Premium", monthlyPrice: 64, yearlyPrice: 259,
            description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]

    return (
        <div className='max-w-screen-3xl mx-auto mt-24' id='home'>
            
            <div className='gradientBg rounded-br-[80px] md:p-9 px-4 py-9'>

                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                    {/* banner img */}
                    <div>
                        <img src={banner} alt='banner' className='lg:h-[386px]' />
                    </div>

                    {/* banner content */}

                    <div className='md:w-3/5'>
                        <h2 className='md:text-7x1 text-4x1 font-bold text-5xl text-white mb-6 leading-relaxed'>Develop your skills without diligence</h2>
                        <p className='text-[#EBEBEB] text-xl mb-8'>
                        The main goal of this format is to make you a professional junior developer.
                         All the components prepare you for the real tasks that you will meet when working for a company or a freelancer.
                        </p>
                        <div className='space-x-5 space-y-4'>
                            <button className='btnPrimary'>Get Started</button>
                            <button className='btnPrimary'>Discount</button>
                        </div>
                    </div>

                </div>

            </div>

            {/* feature */}

            <div className='my-24 md:px-14 px-4 max-w-screen-2x1 mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>

                    <h3 className=' text-primary font-bold text-4xl lg:w-2/3 mb-3'>Why we are better than others</h3>

                    <p className='text-base text-tartiary'>We tend to split into groups, and then piously believe that others are wrong,
                     simply because they are different. This psychological phenomenon is called the illusion of asymmetric insight and explains why some social.”</p>

                </div>

                {/* cards */}

                <div className='w-full lg:w-4/5'>

                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-5 gap-8'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow h-86 p-8 flex justify-center items-center hover:translate-y-4 transition-all
                    duration-300 cursor-pointer'>
                            <div>
                                <img src={features} alt='features' />
                                <h5 className='text-2x1 font-semibold text-primary text-center '>Conventient study schedule</h5>
                            </div>
                        </div>

                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow h-86 p-8 flex justify-center items-center hover:translate-y-4 transition-all
                    duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={features} alt='features' />
                                <h5 className='text-2x1 font-semibold text-primary px-5 text-center mt-5'>The best teachers</h5>
                            </div>
                        </div>

                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow h-86 p-8 flex justify-center items-center hover:translate-y-4 transition-all
                    duration-300 cursor-pointer'>
                            <div>
                                <img src={features} alt='features' />
                                <h5 className='text-2x1 font-semibold text-primary px-5 text-center mt-1'>Internship after courses</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* about */}

        <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>

                <div className='md:w-1/2'>
                    <img src={about_1} alt='about_1' />
                </div>

                <div className='md:w-2/5'>
                    <h2 className='md:text-5x1 text-3x1 font-bold text-4xl text-primary mb-5 leading-normal'>
                        We have been improving our product <span className='text-secondary'>for many years.</span>
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>
                    We are constantly improving our product and doing everything possible to ensure that customers around the world are satisfied with our service. 
                    We invite Team Lead of QA to become a part of our Moscow team.
                    </p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>
        </div>

        <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>

            <div className='text-center'>
                <h2 className='md:text-5x1 text-3x1 font-extrabold text-5xl text-primary mb-2'> Here are all our plans </h2>
                <p className='text-tartiary md:w-1/3 mx-auto px-4'> choose the best option for your development.</p>

                {/* toggle pricing */}
                
                <div className='mt-16'>
                    <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isTest ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type='checkbox' id='toggle' className='hidden' checked={isTest} onChange={() => SetIsTest(!isTest)} />
                </div>

            </div>

            {/* pricing cards */}

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
                {
                    packages.map((pkg, idx) =>
                        <div key={idx} className='border py-10 md:py-6 px-4 rounded-[35px] shadow'>
                            <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                            <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                            <p className='mt-5 text-center text-secondary text-4xl font-bold'> {isTest ? `${pkg.yearlyPrice}$` : `${pkg.monthlyPrice} $`} <span className='text-base text-tartiary font-medium'>/{isTest ? 'year' : 'month'}</span>
                            </p>

                            <ul className='mt-4 space-y-2 px-4'>
                                <li className='flex gap-2'> <img src={pricing} alt='green' className='w-6' /> Videos of Lessons</li>
                                <li className='flex gap-2'> <img src={pricing} alt='green' className='w-6' /> Homework check</li>
                                <li className='flex gap-2'> <img src={pricing} alt='green' className='w-6' /> Additional practical task</li>
                                <li className='flex gap-2'> <img src={pricing} alt='green' className='w-6' /> Monthly conferences</li>
                                <li className='flex gap-2'> <img src={pricing} alt='green' className='w-6' /> Personal advice from teachers</li>
                            </ul>

                            <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                                <button className='btnPrimary'> Get started </button>
                            </div>
                            
                        </div>)
                }

            </div>
        </div>

        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-gray-200'>
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
                    <img src={instagram} alt='instagram' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={twitter} alt='twitter' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={linkedin} alt='linkedin' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                </div>
            </div>
        
        </div>

        </div>
    )

}

export default Home
import React from 'react'

const Banner = ({banner}) => {
    return (
        <>

            <div className='gradientBg rounded-br-[80px] md:p-9 px-4 py-9'>

                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                    {/* banner img */}
                    <div>
                        <img src={banner} alt='banner' className='lg:h-[386px]' />
                    </div>

                    {/* banner content */}
                    <div className='md:w-3/5'>
                        <h2 className='md:text-7x1 text-4x1 text-white mb-6 leading-relaxed'>Develop your skills without diligence</h2>
                        <p className='text-[#EBEBEB] text-2x1 mb-8'>
                            A good example of a paragraph contains a topic sentence, details and a conclusion.
                            There are many different kinds of animals that live in China.
                        </p>
                        <div className='space-x-5 space-y-4'>
                            <button className='btnPrimary'>Get Started</button>
                            <button className='btnPrimary'>Discount</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Banner
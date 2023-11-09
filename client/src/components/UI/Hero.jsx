import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/unilodge-hero-image.png'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
    return (
        <div className="flex flex-col md:my-3 items-center md:grid md:grid-cols-2 lg:max-w-screen-xl lg:mx-auto lg:max-h-screen overflow-clip">
            <div className='space-y-10 mb-10 md:mb-0 md:pr-4 lg:-mt-10 lg:max-w-xl'>
                <div>
                    <h1 className="text-5xl w-[90%] my-5 leading-tight">Find Houses, Hostels and Lands for Rent or Sale Easily </h1>
                    <p className="text-md w-[90%]">Unilodge Realty and Property Developers Limited helps you find your preferred houses, hostels and landed property with ease, on one platform!</p>
                </div>

                <div className='flex w-full justify-between pr-6 lg:max-w-lg'>
                    <div className='flex flex-col-reverse border-l-2 border-orange-400 pl-2'>
                        <span className='text-3xl font-extrabold text-orange-500'>2000 <sup>+</sup></span>
                        <span className='text-md font-medium'>Clients Served</span></div>
                    <div className='flex flex-col-reverse border-l-2 border-orange-400 pl-2'>
                        <span className='text-3xl font-extrabold text-orange-500'>700 <sup>+</sup></span>
                        <span className='text-md font-medium'>Properties</span></div>
                    <div className='flex flex-col-reverse border-l-2 border-orange-400 pl-2'>
                        <span className='text-3xl font-extrabold text-orange-500'>4</span>
                        <span className='text-md font-medium'>Locations</span></div>
                </div>

                <div>
                    Get started by creating an account
                    <div className='py-4 flex flex-wrap -mr-4'>
                        <Link to='/signup'><button className='bg-orange-400 py-2 px-3 rounded-md font-medium mr-4 md:mb-2 shadow-lg hover:scale-110 transition-transform'>Create Account</button></Link>
                        <ScrollLink to='featured-properties' smooth={true}>
                            <button className='bg-orange-300 py-2 px-3 rounded-md font-medium mr-4 shadow-md hover:scale-110 transition-transform'>Featured Properties</button>
                        </ScrollLink>
                    </div>
                </div>
            </div>

            <div className='max-h-screen'>
                <img src={heroImage}
                    alt='Unilodge Hero Image'
                    className='rounded-lg w-fit object-contain' />
            </div>
        </div>
    )
}

export default Hero
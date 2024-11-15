import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='bg-purple-800 text-white justify-between flex flex-wrap h-16 items-center'>
            <Link href='/'><div className='logo mx-3 font-bold text-2xl '>SnapLink</div></Link>
            <div className=' items-center mr-4'>
                <ul className='flex flex-wrap '>
                <Link href='/'><li className='px-3 hover:scale-x-125 '>Home</li></Link>
                <Link href='/shorten'><li className='px-3 hover:scale-x-125'>Shorten</li></Link>
                    <li className='px-3 bg-violet-500 rounded-lg hover:scale-110'>
                        <Link href='/shorten'>
                            <button>
                                Try Now
                            </button>
                        </Link>
                    </li>
                    <li className='px-3 bg-violet-500 rounded-lg ml-3 hover:scale-110'>
                        <Link href="https://github.com/Arghadeeps07">
                            <button>
                                Github
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
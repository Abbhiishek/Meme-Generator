import React from 'react'

import Logo from '../assets/react.svg'
import github from '../assets/github.png'

function Navbar() {
  return (
    <>
    <header>
      <div className='row flex flex-row justify-between px-5 py-5 bg-black'>
        <div className='flex flex-row text-center  items-center'>
          <img src={Logo} alt="Meme Logo" />
          <h1 className='text-white pl-3 text-lg'>Meme Generator</h1>
        </div>
        <div className='flex flex-row text-center  items-center'>
          <a href="https://github.com/Abbhiishek/Meme-Generator" className='flex flex-row text-center  items-center'>
            <img src={github} alt="github-logo" className='w-8'  />
            <h1 className='text-white pl-3 text-lg'>Star Me ⭐</h1>
          </a>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar
import React from 'react'

// import Logo from '../assets/react.svg'
import memeData from '../data/meme.js'
function Header() {
  const [topText, setTopText] = React.useState('')
  const [bottomText, setBottomText] = React.useState('')
  const [memeImage, setMemeImage] = React.useState()

  function CreateMeme(){
    console.log('Meme Created')
    // select random meme from memeData
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(randomNumber)
    const meme = memesArray[randomNumber]
    setMemeImage(meme.url)
  }


  return (
    <>
      <div className='bg-slate-800  p-6 gap-14 px-60 items-center text-center'>
        <h1 className='text-center text-4xl font-extrabold font-mono bg-slate-800 text-white'
        >Meme Generator</h1>
        <div
          className='bg-slate-800 flex flex-row justify-evenly p-6 gap-14 px-60'>
          <input type="text"
            className='rounded-md text-center h-8 w-full'
            placeholder='Top Text'
            value={topText}
            onChange={
              (e) => setTopText(e.target.value)
            } />
          <input
            type="text"
            className='rounded-md text-center h-8 w-full'
            placeholder='Bottom Text'
            value={bottomText}
            onChange={
              (e) => setBottomText(e.target.value)
            }
          />
        </div>
        <button
          type="submit"
          className='text-white p-3 bg-green-500 rounded-lg shadow-lg shadow-green-700 hover:scale-95'
          onClick={CreateMeme}
        >Generate New Meme 🖼️</button>
      </div>
      <div className='bg-slate-800  justify-center p-10'>
      <img src={memeImage} alt="Meme" srcset=""  className='mx-auto rounded-md outline outline-2 outline-emerald-200'/>
    </div>
    </>
  )
}

export default Header
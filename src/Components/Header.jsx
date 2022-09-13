import React, { useEffect } from 'react'

import Logo from '../assets/meme.png'
import memeData from '../data/meme.js'

import memes from 'random-memes'
function Header() {
  const [topText, setTopText] = React.useState('')
  const [bottomText, setBottomText] = React.useState('')
  const [MemeImage, setMemeImage] = React.useState(Logo)


  useEffect(() => {
    let memecontent = {
      toptext: "Hello",
      bottomtext: "World",
      getdataurl: true,
      getbuffer: true,
      savefile: true,
      // "toptext-x":100, "toptext-y":50, "bottomtext-x":100, "bottomtext-y":300,
      filename: "filename",
      fileformat: "png",
      };
      memes.createMeme(MemeImage, memecontent).then(meme => {
      console.log(meme)
      setMemeImage(meme)
      });


  }, [topText, bottomText]);


  async function CreateMeme() {
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
          className='bg-slate-800 flex lg:flex-row justify-evenly p-6 lg:gap-14  sm:flex-col sm:gap-2 '>
          <input
            type="text"
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
      <div className='bg-slate-800  justify-center relative'>
        <img src={MemeImage} alt="Meme" className='mx-auto rounded-md outline outline-2 outline-emerald-200 ' />
        <h2 className="meme--text top">{topText}</h2>
        <h2 className="meme--text bottom">{bottomText}</h2>
      </div>
    </>
  )
}

export default Header
import { useEffect, useState } from 'react';
import playIcon from './assets/playIcon.png'
import './App.css';

function App() {

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682364284611-b3201041f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      heading: 'Image 1',
      desc: 'Image 1 is taken from unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Image 2',
      desc: 'Image 2 is taken from unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1664488479474-bcebd1334105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
      heading: 'Image 3',
      desc: 'Image 3 is taken from unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1599117372183-e8cd2eba770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80',
      heading: 'Image 4',
      desc: 'Image 4 is taken from unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1670779757037-6de9257f8e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      heading: 'Image 5',
      desc: 'Image 5 is taken from unsplash'
    },
  ]

  const [currentImg, setCurrentImg] = useState(images[0])

  const [toggleCarousel, setToggleCarousel] = useState(false)


  const handlePrev = () => {
    const indexImg = images.findIndex((obj) => obj.url === currentImg.url);

    let newIndex = indexImg - 1;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentImg(images[newIndex]);
  };

  const handleNext = () => {
    const index = images.findIndex((obj) => obj.url === currentImg.url);

    let newIndex = index + 1

    if (newIndex > images.length - 1) {
      newIndex = 0
    }

    setCurrentImg(images[newIndex])

  }

  useEffect(() => {
    let timer
    if (toggleCarousel) {
      timer = setInterval(() => handleNext(), 3000)
    }
    return (() => clearInterval(timer))
  }, [toggleCarousel, currentImg])


  const startCarousel = () => {
    setToggleCarousel(!toggleCarousel)
  }


  return (
    <>
      <div className='p-4'>

        <h1 className='text-center font-bold text-4xl'>Fotoley Assignment</h1>

        <div className='flex gap-2 justify-around pt-4'>
          <div className='w-[600px] h-[300px]'>
            <img alt='img' src={currentImg.url} className='w-full h-full' />
          </div>

          <div className='flex flex-col justify-around items-center'>
            <h1 className='font-bold text-3xl'>{currentImg.heading}</h1>
            <p className='text-lg '>{currentImg.desc}</p>
            <button className='py-2 px-4 bg-teal-500 rounded-lg' onClick={() => startCarousel()}>{
              (toggleCarousel)? 'Pause' : 'Start'
            }</button>
          </div>

        </div>

        <div className='lg:relative'>

          <div className='flex flex-row justify-center gap-4 w-full mt-4 flex-wrap'>
            {
              images.map((eachEle, index) => (

                <img alt={eachEle.heading} src={eachEle.url} className={(index === images.findIndex((obj)=>obj.url===currentImg.url))? 'w-[100px] border-4 border-blue-400' : 'w-[100px] grayscale'}  key={index} onClick={() => setCurrentImg(eachEle)} />
              ))
            }
          </div>

          <img alt='img' src={playIcon} className='w-[60px] lg:absolute right-40 top-0' onClick={() => handleNext()} />
          <img alt='img' src={playIcon} className='rotate-180 w-[60px] lg:absolute left-40 top-0' onClick={() => handlePrev()} />

        </div>


      </div>
    </>
  );
}

export default App;

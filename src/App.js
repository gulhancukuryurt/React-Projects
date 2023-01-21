import React,{useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://www.ed2go.com/common/images/1/16328.jpg',
    },

    {
      url: 'https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283',
    },
    {
      url: 'https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex ===0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newSlide);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length-1;
    const newNextSlide = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex (newNextSlide);
  }

  const gotoSlide = (slidesIndex) => {
    setCurrentIndex(slidesIndex);
  }
  
  return (
    <div className='max-w-[1000px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}
         className="className='w-full h-full rounded-2xl bg-center bg-cover duration-500"> </div>
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
               <BsChevronCompactLeft onClick={prevSlide} size={30}/>
         </div>
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
               <BsChevronCompactRight onClick={nextSlide} size={30}/>
         </div>
         <div className='flex top-4 justify-center py-2'>
              {
                slides.map((slides,slidesIndex) => (
                  <div key={slidesIndex}
                   onClick = {() => gotoSlide(slidesIndex)} 
                   className='text-3xl cursor-pointer'>
                   <RxDotFilled onClick={gotoSlide}/>  </div>
                ) )
              }
         </div>
    </div>
  );
}

export default App;

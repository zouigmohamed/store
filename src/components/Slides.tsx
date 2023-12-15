import { Button } from '@nextui-org/button';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { images } from '../data';

const Slides = () => {

 

  const properties = {
    scale: 1.7,
    indicators: true,
  };
  
    return (
    
        <Zoom  {...properties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%", height: "auto" }} className='mx-auto  '>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 2 }} className='flex w-3/4 md:w-1/2 flex-col justify-center space-y-4'>
                        <h3 className='w-full  text-2xl md:text-5xl capitalize text-center font-bold text-slate-900 border-3 border-slate-100 rounded-lg p-5 backdrop-blur-sm'>explore our products </h3>
                        <Button variant='bordered'   className='w-auto uppercase font-semibold mx-auto text-2xl  text-emerald-800 border-3 border-slate-100 rounded-md p-5 backdrop-blur-2xl'> shop now </Button>
              </div>
              <img style={{ objectFit: "cover", width: "100%" ,height:"600px" }} alt="Slide Image" src={each} className='mx-auto  rounded-2xl'/>
            </div>
          </div>
        ))}
      </Zoom>
      
    );
};

export default Slides;
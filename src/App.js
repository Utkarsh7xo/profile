// App.js

import React, { useEffect, useRef } from 'react';
import Profile from './Profile';
import Content from './Content.js';
import './App.css'; 

function App() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const gradient = gradientRef.current;
      if (gradient) {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        const gradientSize = '200px'; 

        gradient.style.background = `radial-gradient(circle ${gradientSize} at ${mouseX}px ${mouseY}px, rgba(200, 98, 95, 0.8), rgba(200, 255, 200, 0))`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='relative h-screen md:overflow-y-auto  bg-rose-200'>
      {/* <div className='fixed inset-0 bg-cover bg-center bg-gradient-to-r from-slate-900 to-slate-700'></div>
       */}
       {/* <div className='fixed inset-0 bg-cover bg-center bg-rose-200'></div>
       <div className='fixed inset-0 gradient-peach'></div>
       <div className='fixed inset-0 gradient-purple'></div>
       <div className='fixed inset-0 gradient-yellow'></div> */}
       <img className='fixed inset-0 bg-cover bg-center h-full w-full' src={process.env.PUBLIC_URL + '/img/background.png'} alt="DP" /> 
       <img className='md:hidden fixed inset-0 bg-cover bg-center h-full w-full' src={process.env.PUBLIC_URL + '/img/background_mobile.png'} alt="DP" /> 
      
      {/* <div className='fixed inset-0 bg-cover bg-center' style={{backgroundImage:'url(img/grid-png-8.png)'}}>
      </div> */}
      <div ref={gradientRef} className="MouseGradient hidden md:block"></div>
      <div className="relative z-10 flex flex-col h-screen md:flex-row">
        <Profile />
        <Content />
      </div>
      
    </div>
  );
}

export default App;

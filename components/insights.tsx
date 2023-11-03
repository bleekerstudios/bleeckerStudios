import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import GettingStartedForm from '@components/GettingStartedForm'
import ButtonGroup from '@components/ButtonGroup'
import Button, { ButtonVariant } from "@components/Button/Button"
import LogoContainer from '@components/Logos/LogoContainer'
import React, { useState, useEffect } from 'react';




const CounterComponent = ({ startCount, duration }) => {
  const [counter, setCounter] = useState(startCount);

  useEffect(() => {
    let start = 0;
    // Duration in which the count should complete
    const end = duration;
    if (start === end) return;

    let totalDuration = Math.round(60000 / end); // Assuming you want to animate for about 1000ms (1 second)
    let timer = setInterval(() => {
      start += 1;
      setCounter(start);
      if (start === end) clearInterval(timer);
    }, totalDuration);

    return () => clearInterval(timer); // Clean-up the interval on component unmount
  }, [duration]);

  return <span>{counter}</span>;
};

const MyComponent = () => {
  return (
    <div>
    


    
        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={40} />%
        </span>
        <p>Reduction in annual technology costs</p>
      
     
        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={245} /> Hours
        </span>
        <p>Saved a week by automating processes.</p>
      
        


        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={20} />%
        </span>
        <p>Reduction in touchpoints with end clients</p>

        <span className="text-4xl font-bold text-black-900">
          $<CounterComponent startCount={0} duration={500} />,320
        </span>
        <p>Average contract size when leveraged during client sales cycle</p>


        
      
      

        </div>
               
  );
};

export default MyComponent;

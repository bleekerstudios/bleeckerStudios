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

    let totalDuration = Math.round(19000 / end); // Assuming you want to animate for about 1000ms (1 second)
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
          <CounterComponent startCount={200} duration={30} />%
        </span>
        <p>Reduction in Annual Software Spend</p>
      
     
        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={600} /> Hours
        </span>
        <p> Saved a Week by automating redundancies</p>
      
        <span className="text-4xl font-bold text-black-900">
          $<CounterComponent startCount={0} duration={200} />0
        </span>
        <p>Saved per each Annual Software Contract</p>
      

        </div>
               
  );
};

export default MyComponent;

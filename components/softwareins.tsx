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

const SoftwareCounter = () => {
  return (
    <div>
    

      <div>
    
        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={129} /> Applications
        </span>
        <p>Deployed across iOS, Web, and Android</p>
      
     
        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={1021} /> API
        </span>
        <p>Integrations completed</p>
      
        


        <span className="text-4xl font-bold text-black-900">
          <CounterComponent startCount={0} duration={5} /> Components 
        </span>
        <p>Connected on average across our partners tech stack </p>

        <span className="text-4xl font-bold text-black-900">
          $<CounterComponent startCount={0} duration={3} />,000
        </span>
        <p>Average technical debt removed</p>


        </div>
      
      

        </div>
               
  );
};

export default SoftwareCounter;

import React, { useState } from 'react';
import Button from './Button/Button';
import axios from 'axios';


function GettingStartedForm() {

  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    phone: '',
    company: '',
    message: '',


  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        company: '',
        phone: '',
        message: '',


      });
    } else {
      
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/meqbdabv',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thanks! We will be in touch shortly.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      
      <div className="button-container  md:flex flex-wrap justify-center w-90 mx-10 ">

      <form onSubmit={handleOnSubmit}>


        <label htmlFor="email" className="text-muted font-normal text-sm leading-5 select-none">Email</label>
        <input
        className="w-full bg-transparent border-borderLight text-black  px-4 py-2 rounded focus:bg-light border   focus:border-white focus:border-opacity-30"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
       
       <label className=" text-muted font-normal text-sm leading-5 select-none">Phone</label>

    <textarea
  className="w-full  bg-transparent border-borderLight text-black  px-4 py-2 rounded focus:bg-light border     focus:border-white focus:border-opacity-30"
  id="phone"
  name="phone"
  onChange={handleOnChange}
  required
  value={inputs.phone}
/>

<label className=" text-muted font-normal text-sm leading-5 select-none">Comnpany</label>

        <textarea
          className="w-full  bg-transparent border-borderLight text-black  px-2 py-1 rounded focus:bg-light border     focus:border-white focus:border-opacity-30"
          id="company"
          name="company"
          onChange={handleOnChange}
          required
          value={inputs.company}
        />







        
        <label className=" text-muted font-normal text-sm leading-5 select-none">Message</label>

        <textarea
          className="w-full bg-transparent border-borderLight text-black  px-16 py-8 rounded focus:bg-light border     focus:border-white focus:border-opacity-30"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        

        
        <button type="submit" disabled={status.submitting} className="bg-primary px-4 py-4 rounded  hover:brightness-90  ">
          {!status.submitting
            ? !status.submitted
              ? 'Send Message'
              : 'Submitted'
            : 'Submitting...'}
         </button>
        
      </form>

      </div>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>

  );
};
        

export default GettingStartedForm
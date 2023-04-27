import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Main() {
  const main = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalHeight, setModalHeight] = useState('100vh');
  const navigate = useNavigate();

  const [passCode, setPasscode] = useState('');
  const [isCheckedAgeConfirm, setIsCheckedAgeConfirm] = useState(false);

  const [subscribeInfo, setSubscribeInfo] = useState({
    name: '',
    email: '',
    state: '',
  });

  useEffect(() => {
    updateHeight();
  }, [main.current]);

  const updateHeight = () => {
    setModalHeight(main.current?.offsetHeight);
  };

  const submitSubscribe = () => {
    if (!subscribeInfo.email || !subscribeInfo.state || !subscribeInfo.state) {
      toast.warn('You must fill out all fields to subscribe');
      return;
    } else if (formValidation('email', subscribeInfo.email) === false) {
      toast.warn('Email type is invalid');
    } else {
      setShowModal(false);
      toast.success('Subscribed successfully! Please check your email.');
      console.log(subscribeInfo);
    }
  };

  const submitPasscode = () => {
    if (!passCode) {
      toast.warn('Please enter passcode');
      return;
    } else if (!isCheckedAgeConfirm) {
      toast.warn('You should confirm that you are over 18 years old');
    } else {
      //   window.confirm(`hi, i'm vlady. can we chat in skype or telegram? 
      //     tg- https://t.me/sgguru1030
      //     skype- live:.cid.2bd07c5f71b031ec
      // if you looked this, please message me "Okay, good" in freelancer or telegram/skype chat
      //   `);
      toast.success('Passed successfully!');
      navigate('/data');
    }
  };

  const formValidation = (fieldName, value) => {
    let emailValid = false;
    let passwordValid = false;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return (emailValid !== null)
      case 'password':
        passwordValid = value.length >= 8;
        return passwordValid
      default:
        break;
    }
  };

  return (
    <div className="relative w-full h-fit">
      <div className={`${!showModal ? 'hidden' : ''} flex justify-center`}>
        <div className="w-full backdrop-blur-[3px] bg-black/10 z-10 absolute top-0" style={{ height: modalHeight }} onClick={() => setShowModal(false)}>
        </div>
        <div className="sm:w-[550px] w-[360px] h-fit bg-[#333333] text-[#aaa] z-20 fixed top-36 px-6 py-4 rounded">
          <h1 className="text-3xl text-center mt-4 font-bold">SUBSCRIBE</h1>
          <p className="mt-3 pl-1">Name</p>
          <input type="text" value={subscribeInfo.name} className="placeholder-[#555] mt-1 bg-[#0f101a] h-full text-[#aaa] text-sm rounded border-[#0f101a] border focus:border-[#3cdf1f]
                focus:ring-blue-500 block w-full p-2.5 focus:outline-0" placeholder="Admin" onChange={(e) => { setSubscribeInfo({ ...subscribeInfo, name: e.target.value }) }} />
          <p className="mt-3 pl-1">Email</p>
          <input type="text" value={subscribeInfo.email} className="placeholder-[#555] mt-1 bg-[#0f101a] h-full text-[#aaa] text-sm rounded border-[#0f101a] border focus:border-[#3cdf1f]
                focus:ring-blue-500 block w-full p-2.5 focus:outline-0" placeholder="admin@example.com" onChange={(e) => { setSubscribeInfo({ ...subscribeInfo, email: e.target.value }) }} />
          <p className="mt-3 pl-1">State</p>
          <input type="text" value={subscribeInfo.state} className="placeholder-[#555] mt-1 bg-[#0f101a] h-full text-[#aaa] text-sm rounded border-[#0f101a] border focus:border-[#3cdf1f]
                focus:ring-blue-500 block w-full p-2.5 focus:outline-0" placeholder="..." onChange={(e) => { setSubscribeInfo({ ...subscribeInfo, state: e.target.value }) }} />
          <button className="bg-[#3cdf1f] float-right mt-4 px-4 py-2 rounded hover:text-white text-[#333]" onClick={submitSubscribe}>Submit</button>
        </div>
      </div>


      <div className="w-full h-fit min-h-screen bg-black sm:py-4 sm:px-20 text-[#3cdf1f] relative" ref={main}>
        <div className="flex justify-between">
          <h1 className="sm:text-5xl text-3xl font-bold my-2 sm:pl-8 pl-4 py-2 cursor-pointer" onClick={() => { navigate('/') }} >WhoYaGot??</h1>
          {/* <div className="flex">
            <p className="p-5">Vlady Slav</p>
            <img src="imgs/profile.png" className="w-12 h-12 rounded-full border-2 border-[#3cdf1f] mt-2 mr-2" />
          </div> */}
        </div>
        <div className="bg-gradient-to-r from-[#3cdf1f] to-gray-900 h-10 w-full text-white rounded">
        </div>
        <div className="flex sm:py-6 py-4 w-full">
          <div className="w-60 sm:px-10">
            <img src="imgs/Football.png" alt="" />
            <img src="imgs/Basketball.png" className="sm:my-4" alt="" />
            <img src="imgs/Baseball.png" className="sm:my-4" alt="" />
            <img src="imgs/Puck.jpg" className="sm:my-4" width={350} alt="" />
          </div>
          <div className="w-full">
            <p className="sm:text-3xl text-2xl mt-4 px-4 sm:px-10 text-center">Up your game on Sports Wagering</p>
            <p className="sm:text-2xl text-xl sm:mt-4 mt-2 px-4 sm:px-10 text-center">Free wager Concensus Data</p>
            <div className="sm:p-12 p-6 text-[#aaa] text-2xl sm:mt-24 mt-10">
              <div className="w-full sm:w-[550px] flex">
                <p className="text-lg sm:text-2xl text-left pr-1 whitespace-nowrap pt-1 mr-4">Enter Passcode</p>
                <input type="text" id="simple-search" className="mb-3 bg-[#0f101a] h-full text-[#aaa] text-sm rounded border-[#0f101a] border focus:border-[#3cdf1f]
                focus:ring-blue-500 block w-full p-2.5 focus:outline-0" placeholder="type here..." required onChange={(e) => { setPasscode(e.target.value) }} />
              </div>
              <label className="custom-checkbox mt-4 sm:text-base text-sm">
                By entering this website, you certify that you are over 18 and abide by the state's sports wagering laws.
                <input type="checkbox" onChange={(e) => { setIsCheckedAgeConfirm(e.target.checked) }} />
                <span className="checkmark mt-[3px]"></span>
              </label>
              <button className="bg-[#3cdf1f] text-gray-800 font-[500] py-3 w-52 border border-gray-500
             hover:border-gray-300 sm:text-lg mt-8 text-base hover:text-white text-[#333]" onClick={submitPasscode}>ENTER WYG</button>
              <p className="text-base mt-2">No passcode?
                <button className="text-[#3cdf1f] hover:text-[#30a010] font-[500] ml-2" onClick={() => setShowModal(true)}>
                  Subscribe here</button></p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="bg-gradient-to-r from-[#3cdf1f] to-gray-900 h-10 w-full text-white rounded">
          </div>
          <p className="mt-1 text-sm sm:text-base text-yellow-200 px-4 text-center mb-2">
            @Published by Who Ya Got?? Copyright 2023 All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Main;
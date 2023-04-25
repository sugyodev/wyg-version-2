import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import config from '../data.config.json';

function DataPage() {
  const main = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const configData = config.DataPage;
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 5000);
  }, []);

  useOutsideAlerter(wrapperRef);

  return (
    <div className="relative w-full h-fit">
      <div className="w-full h-fit min-h-screen bg-black sm:pt-4 text-[#3cdf1f] relative" ref={main}>
        <div className="">
          <div className="flex justify-between">
            <h1 className="sm:text-5xl text-3xl font-bold my-2 sm:pl-8 pl-4 py-2 cursor-pointer" onClick={() => { navigate('/') }} >WhoYaGot??</h1>
            <div className="flex pr-4 ">
              <img src="imgs/profile.png" className="w-12 h-12 rounded-full border-2 border-[#3cdf1f] mt-2 mr-2 cursor-pointer" onClick={() => setShowDropdown(true)} alt='' />
              {showDropdown &&
                <div className='bg-[#1e2229] rounded absolute w-40 top-20 shadow-lg shadow-black py-2 right-4' ref={wrapperRef}>
                  <p className="px-3 py-2 text-[#aaa]">Vlady Slav</p>
                  <div className='flex p-2 text-[#aaa] hover:text-[#3cdf1f] hover:bg-[#2f3330] cursor-pointer' onClick={() => { navigate('/') }}>
                    <i className="fa fa-sign-out w-5 h-5 mx-2 pt-1" aria-hidden="true"></i>
                    <p>Exit</p>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#3cdf1f] to-gray-900 h-10 w-full text-white rounded"></div>
        </div>
        {
          isLoading
            ?
            <div className="w-full flex justify-center items-center h-full">
              <span class="loader top-80"></span>
            </div>
            :
            <div className="sm:flex py-8">
              <div className="sm:w-1/6 h-fit sm:mx-6 h-[600px] py-6 bg-[#111] p-4 text-sm text-[#888] mt-8">
                <h1 className="text-center text-lg font-[500]">News</h1>
                Profitable sports bettors look for good value opportunities in wagers and use a variety of data to make their decisions.
                WYG provides some of the data critical to this decision process.   WYG provides consensus data in a clean table to filter and download for future analysis while other sites present this data in a confusing format.
                Again, use this data as you deem appropriate with your other analysis.
              </div>
              <div className="sm:w-1/2 mx-2">
                <div>
                  <p className="font-[500] sm:text-2xl text-xl" >Up Your Game on Sports Wagering.</p>
                  <p className="text-base sm:text-lg mt-2">What direction is crowd going?  Where is the “sharp” money?</p>
                  <p className="text-base sm:text-lg mt-2">WYG provides free, easily-understandable, and valuable information will help you make better decisions and payouts.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className='bg-[#F0F2F4] mr-2 h-fit  my-2 rounded-lg min-w-56 w-full cursor-pointer relative'>
                    <img src={configData?.middleBanners[0]} className='w-full aspect-ratio rounded' />
                    <div className="w-full absolute bottom-0 backdrop-blur-[3px] h-20 bg-black/30 text-white flex items-center justify-center">
                      <button className="bg-[#d9036a] py-2 px-6 font-bold w-full mx-2 rounded mt-4">Go to Website</button>
                    </div>
                  </div>
                  <div className='bg-[#F0F2F4] mr-2 h-fit  my-2 rounded-lg min-w-56 w-full cursor-pointer relative'>
                    <img src={configData?.middleBanners[1]} className='w-full aspect-ratio rounded' />
                    <div className="w-full absolute bottom-0 backdrop-blur-[3px] h-20 bg-black/30 text-white flex items-center justify-center">
                      <button className="bg-[#46afaa] py-2 px-6 font-bold w-full mx-2 rounded mt-4">Go to Website</button>
                    </div>
                  </div>
                </div>
                <div className="text-white mt-6 p-4 rounded text-sm sm:text-base text-justify">
                  WYG provides valuable sports wagering consensus data to utilize along with your other sports analysis.<br /><br />

                  When is it best to wager with or against the public (betting count) or whales (large dollar volume)?<br /><br />

                  The public commonly makes sports picks based upon overwhelming favorites, favorite team, most recent performance, home team advantage, social media  and / or biased by favorite players.   Also, teams with larger fan base may also skew the wagering odds (think New York Yankees vs Tampa Devil Rays).
                  Frequently, the public will make the wagers based upon “feeling” while ignoring facts in opposition.
                  As result, the lines commonly over-react to the wagering activity and adjust from the line open to game-time.
                  An observant and patient bettor can use this information to get more favorable odds as sportsbooks typically adjust their lines in attempt to encourage more bettors to take opposing positions to balance out the bettors.

                  <br /><br />
                  Wagering against the public (aka “fading”) is popular strategy as the theory is “the public is always wrong”.
                  While there is some evidence to support the public’s poor betting record (sportsbooks would not exist if the public were consistently accurate), it is not always the case and each sporting event should be evaluated under its own conditions as many other factors can affect the outcome.
                  Injuries, matchups, change in lineups, weather, and unpredictable plays can all play a factor into the final score.  Based upon your analysis, If you wish to wager with the public – it might be best to lock-in that wager early.
                  However, if “fading” the public your patience may be rewarded with better odds / payout, if you wait closer to gametime.

                  <br /><br />
                  The general public prefers to bet on favorites and high scoring events – afterall, its more exciting…..who wants to watch a boring game?   The lesser popular wager is to expect the underdog to play a close game or upset.  Use consensus, along with your other analysis, to find good-value wagers.
                  <br /><br />

                  Pay attention to the moneyline consensus vs spread consensus.   “Sharp” bettors may be influencing the spread.
                  If the line moves in opposition of the expected change in odds and / or moves quickly, it typically due to a large wager(s).
                  Take this into consideration.  Also, check other sportsbooks to see if you can capture a line that has not quickly reflected these changes in line movement.

                  <br /><br />
                  Profitable sports bettors look for good value opportunities in wagers and use a variety of data to make their decisions.
                  WYG provides some of the data critical to this decision process.   WYG provides consensus data in a clean table to filter and download for future analysis while other sites present this data in a confusing format.
                  Again, use this data as you deem appropriate with your other analysis.
                  <br /><br />
                  You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                  <br /><br />

                  Good luck and stay in-the-green.

                </div>
              </div>
              <div className="sm:w-1/3 sm:mx-6 sm:block grid sm:grid-cols-1 grid-cols-2 text-[#aaa] mt-8">
                <div className="m-2 flex">
                  <div className='mx-2 h-fit rounded-lg min-w-56 w-full cursor-pointer sm:flex justify-end' >
                    <img src='imgs/banner (5).png' className='w-60 aspect-ratio rounded mx-auto' />
                    <p className="p-4 text-xs sm:text-sm">
                      You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                    </p>
                  </div>
                </div>
                <div className="m-2 flex">
                  <div className='mx-2 h-fit rounded-lg min-w-56 w-full cursor-pointer sm:flex justify-end' >
                    <img src='imgs/banner (6).png' className='w-60 aspect-ratio rounded mx-auto' />
                    <p className="p-4 text-xs sm:text-sm">
                      You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                    </p>
                  </div>
                </div>
                <div className="m-2 flex">
                  <div className='mx-2 h-fit rounded-lg min-w-56 w-full cursor-pointer sm:flex justify-end' >
                    <img src='imgs/banner (7).png' className='w-60 aspect-ratio rounded mx-auto' />
                    <p className="p-4 text-xs sm:text-sm">
                      You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                    </p>
                  </div>
                </div>
                <div className="m-2 flex">
                  <div className='mx-2 h-fit rounded-lg min-w-56 w-full cursor-pointer sm:flex justify-end' >
                    <img src='imgs/banner (2).png' className='w-60 aspect-ratio rounded mx-auto' />
                    <p className="p-4 text-xs sm:text-sm">
                      You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                    </p>
                  </div>
                </div>
                <div className="m-2 flex">
                  <div className='mx-2 h-fit rounded-lg min-w-56 w-full cursor-pointer sm:flex justify-end' >
                    <img src='imgs/banner (3).png' className='w-60 aspect-ratio rounded mx-auto' />
                    <p className="p-4 text-xs sm:text-sm">
                      You are minutes away from participating in the action.  Open an account within 15 minutes with the sportsbooks above to place your smart, logic-based, informed wagers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        }

        {!isLoading &&
          <>
            <div className="w-full justify-center text-white text-justify">
              <div className="p-4 sm:w-1/2 mx-auto">
                <p className="text-2xl sm:text-3xl text-center">Disclaimer</p>
                <p className="border border-[#3cdf1f] p-4 mt-2 text-sm sm:text-base">
                  WYG is not a sportsbook operator but rather an informational site regarding sports betting for entertainment purposes.  Sports wagering laws vary by situs and change continuously.    WYG does not provide any information as to the legalities in your location.  Users of data and advertising links are strongly suggested to make their own inquiry into the legality of using this information.  WYG assumes no liability for the usage of the data, nor its advertising links.
                  <br />
                  <br />
                  The pre-vetted vendors of the products and services offered by WYG are proven to be reliable and trustworthy.  WYG may (or may not) be supported by the vendors.   Vendors will periodically change.  There is no charge to view any of the products / services.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#3cdf1f] to-gray-900 h-10 w-full text-white rounded mt-5"></div>
            <div className="mt-5">
              <div className="w-full justify-center text-white from-[#3cdf1f] to-gray-900 text-white rounded">
                <div className="sm:text-base py-2 text-sm p-4 mx-auto text-left sm:w-2/3 text-yellow-200 text-center">
                  <p>Wager responsibly.</p>
                  Any tips, suggestions or comments for WYG??, email us at <a href="#" className="text-red-500">support@whoyagot.net</a>
                  <p className="mt-4">Gambling Problem??  1-800-GAMBLER.</p>
                  <p>Published by Who Ya Got?? @Copyright2022  All rights reserved.</p>
                  <p>Designated branding and trademarks by Who Ya Got and its vendors are the property of their respective owners.</p>
                </div>
              </div>
            </div>
          </>}

      </div>
    </div>
  )
}

export default DataPage;
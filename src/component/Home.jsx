import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./Authcontext";

const Home = () => {
  // left side navbar
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showRentMenu, setShowRentMenu] = useState(false);
  const [showSellMenu, setShowSellMenu] = useState(false);
  const [showAgentMenu, setShowAgentMenu] = useState(false);

  //right side navbar
  const [showManageScroll, setShowManageScroll] = useState(false);
  const [showAdvertise, setShowAdvertise] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showSigninMenu, setShowSigninMenu] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth()

  return (
    <>
      <nav className="bg-white shadow-sm relative z-50 select-none">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-1 py-2 pr-10">
          {/* Left Menu */}
          <ul className="flex space-x-6 text-black font-sans text-[18.5px] gap-1.5 relative">
            {/* buy */}
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setShowBuyMenu((prev) => !prev)}
            >
              Buy
              {showBuyMenu && (
                <div className="absolute top-13.5 left-0 bg-white shadow-md p-4 w-[900px] flex gap-36  z-50">
                  <div className="flex flex-col gap-2 text-sm pl-20">
                    <h3 className="font-semibold text-gray-800">
                      Gravette homes for sale
                    </h3>

                    <a href="#" className="text-blue-600 hover:underline">
                      Homes for sale
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Foreclosures
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      For sale by owner
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Open houses
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      New construction
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Coming soon
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Recent home sales
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      All homes
                    </a>
                  </div>

                  <div className="flex border-l-1"></div>

                  <div className="flex flex-col gap-2 text-sm">
                    <h3 className="font-semibold text-gray-800">Resources</h3>
                    <a href="#" className="text-blue-600 hover:underline">
                      Home Buying Guide
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Foreclosure center
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Real estate app
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Down payment assistance
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Find a buyer's agent
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Rent */}

            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setShowRentMenu((prev) => !prev)}
            >
              Rent
              {showRentMenu && (
                <div className="absolute top-13.5 left-0 bg-white shadow-md p-4 w-[900px] flex gap-36  z-50">
                  <div className="flex flex-col gap-4 text-sm pl-20">
                    <h3 className="font-semibold text-gray-800">
                      Gravette rentals
                    </h3>

                    <a href="#" className="text-blue-600 hover:underline">
                      Apartment for rent
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      House for rent
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      All rental listings
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      All rental buildings
                    </a>
                  </div>

                  <div className="flex flex-col gap-4 text-sm">
                    <h3 className="font-semibold text-gray-800">Your Search</h3>

                    <a href="#" className="text-blue-600 hover:underline">
                      Saved searches
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Indox
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Contacted rentals
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Applications
                    </a>
                  </div>

                  <div className="flex border-l-1"></div>

                  <div className="flex flex-col gap-4 text-sm mr-10">
                    <h3 className="font-semibold text-gray-800">Resources</h3>
                    <a href="#" className="text-blue-600 hover:underline">
                      Rent with zentroo
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Build your credit
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Renters insurance
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Affordability calculator
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Rent guide
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Sell */}

            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setShowSellMenu((prev) => !prev)}
            >
              Sell
              {showSellMenu && (
                <div className="absolute top-13.5 left-0 bg-white shadow-md p-4 w-[900px] flex gap-36  z-50">
                  <div className="flex flex-col gap-2 text-sm pl-20">
                    <h3 className="font-semibold text-gray-800">Resources</h3>

                    <a href="#" className="text-blue-600 hover:underline">
                      Explore your options
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      See your home's Zestimate
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      India housing market
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Sellers guide
                    </a>
                  </div>

                  <div className="flex border-l-1"></div>

                  <div className="flex flex-col gap-2 text-sm">
                    <h3 className="font-semibold text-gray-800">
                      Selling options
                    </h3>
                    <a href="#" className="text-blue-600 hover:underline">
                      Find a seller's agent
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Post For Sell by Owner
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Get a mortgage */}
            <li className="cursor-pointer hover:text-blue-400">
              Get a mortgage
            </li>

            {/* Find an agent */}
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setShowAgentMenu((prev) => !prev)}
            >
              Find an Agent
              {showAgentMenu && (
                <div className="absolute top-13.5 left-0 bg-white shadow-md p-4 w-[900px] flex gap-36  z-50">
                  <div className="flex flex-col gap-2 text-sm pl-20">
                    <h3 className="font-semibold text-gray-800">
                      Looking for pros?
                    </h3>

                    <a href="#" className="text-blue-600 hover:underline">
                      Real estate agents
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Property managers
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Home inspectors
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Other pros
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Home improvement pros
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Home builders
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Real estate photographers
                    </a>
                  </div>

                  <div className="flex border-l-1"></div>

                  <div className="flex flex-col gap-2 text-sm">
                    <h3 className="font-semibold text-gray-800">Resources</h3>
                    <a href="#" className="text-blue-600 hover:underline">
                      I'm pro
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Agent advertising
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Agent resource
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Create a free agent account
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Logo */}
          <img
            src="./public/images/pngtree-real-estate.png"
            alt="logo"
            className="h-16 cursor-pointer"
          />

          {/* Right Menu */}
          <ul className="flex space-x-8 text-black text-xl font-sans gap-1.5 relative text-[18.5px]">
            <li
              className="cursor-pointer hover:text-blue-400 relative"
              onClick={() => setShowManageScroll((prev) => !prev)}
            >
              Manage Rentals
              {showManageScroll && (
                <div className="absolute top-10 right-0 bg-white rounded p-4 w-[250px] max-h-[260px] overflow-y-auto z-50">
                  {/* Section 1 */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">
                      Rental Management Tools
                    </h3>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li className="hover:underline cursor-pointer">
                        List a rental
                      </li>
                      <li className="hover:underline cursor-pointer">
                        My Listings
                      </li>
                      <li className="hover:underline cursor-pointer">Inbox</li>
                      <li className="hover:underline cursor-pointer">
                        Applications
                      </li>
                      <li className="hover:underline cursor-pointer">Leases</li>
                      <li className="hover:underline cursor-pointer">
                        Payments
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">
                      Learn More
                    </h3>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li className="hover:underline cursor-pointer">
                        Zillow Rental Manager
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Price My Rental
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Resource Center
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Help Center
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-blue-400">Advertise</li>
            <li className="cursor-pointer hover:text-blue-400">Help</li>

            {/* Conditionally render username or "Sign In" */}
            {user ? (
              <li className="text-blue-600 font-semibold">Welcome, {user}</li>
            ) : (
              <li onClick={() => navigate('/signup')} className="cursor-pointer hover:text-blue-400">Sign In</li>
            )}
            
          </ul>
        </div>
      </nav>

      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-davidmcbee-1546168.jpg&fm=jpg"
          alt="Real estate"
          className="w-full h-full object-cover object-[center_45%]"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-40 max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Agents. Tours. <br /> Loans. Homes.
            </h1>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="flex-1 rounded-md border border-gray-300 px-8 py-3.5 bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-md"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-28 w-5 h-5 text-black pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
              <button className="ml-2 bg-blue-600 text-white rounded-md px-5 py-3 hover:bg-blue-700 transition cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-66 py-10 bg-white">
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Get home recommendations
          </h3>
          <p className="text-lg mb-4">
            Sign in for a more personalized experience.
          </p>
          <button className="text-blue-700 font-bold border border-blue-500 rounded-md px-5 py-2 hover:bg-blue-50 transition cursor-pointer">
            Sign In
          </button>
        </div>

        <div>
          <img
            src="https://www.zillowstatic.com/s3/web-platform/sub-apps/hops-homepage/hops-homepage.prod.master.10066172.0f61522c/web/1d9d5bce566c85fa242cb21ad3292cb8.webp"
            alt="Recommended Homes"
            className="h-98 transition-transform duration-800 hover:scale-101"
          />
        </div>
      </div>

      <div className="flex gap-6 px-26 py-10 bg-white">
        {/* Left side: Loan info box (your unchanged code) */}
        <div>
          <h3 className="text-xl font-bold">
            Find homes you can afford with BuyAbility℠
          </h3>
          <p className="text-gray-500 text-sm">
            Answer a few questions. We'll highlight homes you're likely to
            qualify for.
          </p>

          <br />
          <div className="bg-white border border-gray-300 rounded-2xl p-6 w-fit">
            {/* Zillow Home Loans header */}
            <div className="flex items-center mb-4">
              <img
                src="./public/images/pngtree-real-estate.png"
                alt="Zillow Logo"
                className="w-6 h-6 mr-2"
              />
              <h2 className="text-sm font-semibold">
                Zentroo Home Loans<sup>℠</sup>
              </h2>
            </div>

            {/* Grid layout for values */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <p className="text-xl font-bold">₹--</p>
                <p className="text-gray-600">Suggested target price</p>
              </div>
              <div>
                <p className="text-xl font-bold">₹--</p>
                <p className="text-gray-600">
                  BuyAbility<sup>℠</sup>
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">₹--</p>
                <p className="text-gray-600">Mo. payment</p>
              </div>
              <div>
                <p className="text-xl font-bold">-- %</p>
                <p className="text-gray-600">Today's rate</p>
              </div>
              <div>
                <p className="text-xl font-bold">-- %</p>
                <p className="text-gray-600">APR</p>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2.5">
            <button className="w-85 rounded-2xl bg-blue-700 text-white font-medium py-3  transition-transform duration-500 hover:scale-105 cursor-pointer">
              Let's get started
            </button>
          </div>
        </div>

        {/* Right side: Image cards */}
        <div className="flex gap-4 pt-20">
          {[
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/2017_ZillowExteriors_218-1.jpg",
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/GettyImages-472069091-Edit.jpg",
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/shutterstock_529108441.jpg",
          ].map((url, index) => (
            <div key={index} className="w-64 rounded-xl overflow-hidden shadow">
              <div className="relative">
                <img
                  src={url}
                  alt={`House ${index + 1}`}
                  className="w-full h-60 object-cover cursor-pointer transition-transform duration-400 hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  Within BuyAbility
                </span>
              </div>
              <div className="bg-gray-100 p-3 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 ">
        <div className="flex grid-cols-3 p-20 gap-7 pb-10 h-160 m-18 ">
          <div className=" shadow-md p-6 bg-white text-center w-160 rounded-3xl shadow-gray-400 cursor-pointer transition-transform duration-500 hover:scale-101">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp"
              alt=""
              className="w-44 h-44 mx-auto mt-10"
            />
            <h2 className="font-extrabold text-2xl text-gray-800 pt-2">
              Buy a home
            </h2>
            <p className="text-md text-gray-950 pt-1">
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </p>
            <button onClick={() => navigate('/buy')} className="border rounded-lg px-4 hover:bg-blue-100 text-blue-700 bg-white h-10 w-40 font-bold mt-5 cursor-pointer">
              Browse homes
            </button>
          </div>

          <div className="shadow-md p-6 bg-white text-center w-160 rounded-3xl shadow-gray-400 cursor-pointer transition-transform duration-500 hover:scale-101">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp"
              alt=""
              className="w-44 h-44 mx-auto mt-10"
            />
            <h2 className="font-extrabold text-2xl text-gray-800 pt-2">
              Sell a home
            </h2>
            <p className="text-md text-gray-950 pt-1">
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
            <button onClick={() => navigate('/sell')} className="border rounded-lg px-4 hover:bg-blue-100 text-blue-700 bg-white h-10 w-40 font-bold mt-5 cursor-pointer">
              See you options
            </button>
          </div>

          <div className=" shadow-md p-6 bg-white text-center w-160 rounded-3xl shadow-gray-400 cursor-pointer transition-transform duration-500 hover:scale-101">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp"
              alt=""
              className="w-44 h-44 mx-auto mt-10"
            />
            <h2 className="font-extrabold text-2xl text-gray-800 pt-2">
              Rent a home
            </h2>
            <p className="text-md text-gray-950 pt-1">
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
            <button onClick={() => navigate('/rent')} className="border rounded-lg px-4 hover:bg-blue-100 text-blue-700 bg-white h-10 w-33 font-bold mt-5 cursor-pointer">
              Find rentals
            </button>
          </div>
        </div>
      </div>

      <div className="border border-t-gray-50 ml-30 mr-30 mb-7"></div>

      <div className="bg-white">
        <div className="text-xl text-center pb-5 font-semibold">About</div>
        <div className="flex justify-center space-x-6 flex-wrap text-md text-gray-800">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Zestimates
          </a>
          <a href="#" className="hover:underline">
            Research
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Advertise
          </a>
          <a href="#" className="hover:underline">
            Fair Housing Guide
          </a>
          <a href="#" className="hover:underline">
            Advocacy
          </a>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
        </div>

        <footer className="bg-white px-8 py-10 mt-10">
          <div className="max-w-6xl mx-auto pl-30 pr-30 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="./public/images/pngtree-real-estate.png"
                alt="zentroo"
                className="w-24 mb-2"
              />
              <p className="text-sm text-gray-600">
                © 2025 Zentroo. All rights reserved.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-800 mb-2">Follow us</h3>
              <div className="flex space-x-4">
                <a href="#">
                  <img
                    src="https://imgs.search.brave.com/FUWEcyC8ISzobxF7cnrKQSk_Uegq2QmN0YZ7tWQaoIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvMjUw/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc"
                    alt="facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://imgs.search.brave.com/Mxh8zByS8POeT70A1aN3UEh3FzmM-qF4bQM-qwAoz6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzI1/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw"
                    alt="instagram"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

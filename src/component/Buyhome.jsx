import React from "react";

const Buyhome = () => {
  return (
    <div className="-ml-20">
      <div className="flex justify-center ">
        <img
          className="h-20 w-20 ml-[7.5rem] mt-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPRylRFYmB9PpoCzDh5PGbhtevfnTG4Egw-8Sts6X5b_WvFp4AKF-mVGh_t_IC-ZSMa0&usqp=CAU"
        ></img>
        <h1 className="font-bold text-2xl text-center mt-10 ml-5 ">
          {" "}
          Buy a home
        </h1>
      </div>
      <div className="flex">
        <div className=" bg-white h-[30rem] w-[25rem] ml-35 mt-15 shadow-2xl border-1 rounded-2xl border-gray-400 transform transition duration-500 hover:scale-103">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4Z1DcLrbNqFYBhKdYZq4lqLJ_HRg2f9DAk-gFIFZzhasLlSGmZiXPFABhZV0k1rtyis&usqp=CAU"
            className="h-[200px] w-[250px] flex justify-self-center"
          ></img>
          <div className="home1 text-center  font-thin">
            <h1>5BHK Property</h1>
            <p>Buy your home under your budget</p>
            <h1>
              Get your dream home with your <br></br>'favrouite location'
            </h1>
            <h1>Starting with 65 Lakhs</h1>
            <p className="pt-10 font-mono font-bold">
              contact : abc@gmail.com , 2250025.
            </p>
          </div>
        </div>

        <div className=" bg-white h-[30rem] w-[25rem] ml-25 mt-15 shadow-2xl border-1 rounded-2xl border-gray-400 transform transition duration-500 hover:scale-103">
          <img
            src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-residential-full-size-log-house-png-image_11576258.png"
            className="h-[200px] w-[250px] flex justify-self-center"
          ></img>
          <div className=" home2 text-center  font-thin">
            <h1>4BHK Property</h1>
            <p>Buy your home under your budget</p>
            <h1>
              Get your dream home with your <br></br>'favrouite location'
            </h1>
            <h1>Starting with 65 Lakhs</h1>
            <p className="pt-10 font-mono font-bold">
              contact : pqr@gmail.com , 2250025.
            </p>
          </div>
        </div>
        <div className=" bg-white h-[30rem] w-[25rem] ml-25 mt-15 shadow-2xl border-1 rounded-2xl border-gray-400 transform transition duration-500 hover:scale-103">
          <img
            src="https://www.freeiconspng.com/uploads/description-crystal-project-folder-home-8.png"
            className="h-[200px] w-[250px] flex justify-self-center"
          ></img>
          <div className=" home2 text-center  font-thin">
            <h1>3BHK Property</h1>
            <p>Buy your home under your budget</p>
            <h1>
              Get your dream home with your <br></br>'favrouite location'
            </h1>
            <h1>Starting with 65 Lakhs</h1>
            <p className="pt-10 font-mono font-bold">
              contact : xyz@gmail.com , 2250025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyhome;

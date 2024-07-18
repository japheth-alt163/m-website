import React from "react";
import { CustomImages } from "../../assets/images";
import { Link } from "react-router-dom";
import { ANIMALS_PAGE } from "../../constants/route-paths";

const WelcomeTopContainer = () => {
  return (
    <div className=" border-slate-500 bg-purple-600 items-center justify-center px-14 py-14 min-h-56 flex flex-col gap-10">
      {/* <img src={CustomImages.pethero} alt="logo" /> */}
      <div>
        <h1 className="text-white font-bold text-4xl text-center">
          Find adoptable pets for yourself
        </h1>
        <h4 className="text-white text-center mt-2">
          Browse from our collection of pets and adopt the one you like
        </h4>
      </div>

      <div className="top-64 flex flex-row gap-10">
        <div className="bg-white p-5 rounded-2xl border-slate-300 border-2 ">
          {/* <img src={CustomImages.cat} alt="logo" /> */}
          <h3 className="font-semibold text-lg text-center">Dogs</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border-slate-300 border-2 ">
          {/* <img src={CustomImages.cat} alt="logo" /> */}
          <h3 className="font-semibold text-lg text-center">Cats</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border-slate-300 border-2 ">
          <h3 className="font-semibold text-lg text-center">Vets</h3>
        </div>
      </div>

      <Link to={ANIMALS_PAGE}>
        <button
          type="button"
          class="text-white bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Adopt a pet
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default WelcomeTopContainer;

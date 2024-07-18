import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE,
  ANIMALS_PAGE,
  CONTACT_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  REQUESTS_PAGE,
  REVIEW_PAGE,
  VET_PAGE,
  WELCOME_PAGE,
} from "../../constants/route-paths";
import { CustomImages } from "../../assets/images";
import NavItem from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/AuthSlice";
import { toast } from "react-toastify";

const WelcomeNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {/* work on fixed navbar */}
      <nav class="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to={WELCOME_PAGE} className="flex-row gap-10">
            <img src={CustomImages.logo} class="h-8" alt="logo" />
            <span class="self-center text-2xl font-bold text-orange-400 whitespace-nowrap dark:text-white">
              M-PET
            </span>
          </Link>
          <div class="flex md:order-2 gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/*  */}
            {!isLoggedIn && (
              <button
                onClick={() => navigate(LOGIN_PAGE)}
                type="button"
                class="text-blue-700 font-bold hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => navigate(REGISTER_PAGE)}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            )}
            {/*  */}

            {/* profile Icon */}
            {isLoggedIn && (
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  toast.success("You have been logged out");
                }}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItem
                name="Home"
                active={location.pathname === WELCOME_PAGE}
                to={WELCOME_PAGE}
              />

              <NavItem
                name="Adopt a pet"
                active={location.pathname.includes(ANIMALS_PAGE)}
                to={ANIMALS_PAGE}
              />

              <NavItem
                name="Vet Services"
                active={location.pathname.includes(VET_PAGE)}
                to={VET_PAGE}
              />

              <NavItem
                name="My Requests"
                active={location.pathname.includes(REQUESTS_PAGE)}
                to={REQUESTS_PAGE}
              />

              <NavItem
                name="Reviews"
                active={location.pathname.includes(REVIEW_PAGE)}
                to={REVIEW_PAGE}
              />

              <NavItem
                name="About "
                active={location.pathname.includes(ABOUT_PAGE)}
                to={ABOUT_PAGE}
              />

              <NavItem
                name="Contact us"
                active={location.pathname.includes(CONTACT_PAGE)}
                to={CONTACT_PAGE}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default WelcomeNavbar;

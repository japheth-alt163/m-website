import React from "react";
import { CustomImages } from "../../assets/images";
import { WELCOME_PAGE } from "../../constants/route-paths";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to={WELCOME_PAGE} className="flex-row gap-10">
              <img src={CustomImages.logo} class="h-8" alt="logo" />
              <span class="self-center text-2xl font-bold text-orange-400 whitespace-nowrap dark:text-white">
                M-PET
              </span>
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

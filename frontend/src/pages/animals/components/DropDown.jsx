import React, { useState } from "react";

const DropDown = ({
  title = "breed",
  data = ["Siamese cat", "Persian cat", "Scottish Fold", "Abyssinian"],
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("Select value");
  //   const data = ["Select value", "one", "two"];
  return (
    <div className="flex flex-col gap-2 relative">
      <h2 className="text-slate-600 uppercase font-semibold">{title}</h2>
      <button
        onClick={() => setActive(!active)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 w-40 justify-between hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {value}
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        class={`z-10 ${
          !active && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 absolute top-20`}
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(false);
                setValue(item);
              }}
            >
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

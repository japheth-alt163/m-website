import React from "react";
import { toast } from "react-toastify";

const Book = () => {
  return (
    <div>
      {" "}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-purple-700 dark:text-white">
            Book an Appointment For Vet service
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            We will get back to you as soon as we recieve your email.
          </p>
          <form
            onSubmit={() =>
              toast.success(
                "Appointment booked, we will get back to you via email soon"
              )
            }
            action="#"
            class="space-y-8 border rounded border-gray-400 ml-[40px] pl-[30px] pt-[30px] pb-[30px] pr-[30px]"
          >
            <div>
              <label
                for="name"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                name="from_name"
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=" Enter Your name"
                required
              />
            </div>
            <div>
              <label
                name="user_email"
                for="email"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                name="email_id"
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              onClick={() =>
                toast.success(
                  "Appointment booked, we will get back to you via email soon"
                )
              }
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              {"submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;

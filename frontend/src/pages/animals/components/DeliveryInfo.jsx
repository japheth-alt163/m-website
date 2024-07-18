import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../../my-requests/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeliveryInfo = () => {
  const navigate = useNavigate();
  // const { curr_pet } = useSelector((state) => state.auth);
  const curr_pet = JSON.parse(localStorage.getItem("pet"));
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    if (!phone) return toast.error("Please enter your phone number");
    setIsLoading(true);
    try {
      const data = {
        phone,
        amount: curr_pet.price,
      };
      const res = await axios.post(
        "http://localhost:5000/api/user/stkPush",
        data
      );
      toast.success(res.data.msg);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("An error occurred while processsing payment ");
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-row gap-8 ml-[160px] pb-14 pt-14">
      <div className="pr-[40px]">
        <p className=" ml-6 text-2xl font-bold">Delivery Information</p>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="First name"
            required
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="email"
            placeholder="Email address"
            required
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Street"
            required
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="City"
            required
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Zip Code"
            required
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          {" "}
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(n) => setPhone(n.target.value)}
          />
        </div>
      </div>
      <div className="flex">
        <div className="">
          <div className=" mb-7 w-[300px] mt-[55px] p-5 border border-gray-400">
            <div className="mb-3">
              <p className="font-medium">Price tag</p>
              <p>Ksh:{curr_pet.price + ".00"}</p>
            </div>
            <hr />
            <div className="mb-3">
              <p className=" text-lg font-medium">Delivery fee</p>
              <p className=" text-md font-light">Ksh: 0.00</p>
            </div>
            <hr />
            <div className="font-semibold">
              <b className=" mr-3">Total-</b>
              <b>Ksh: {curr_pet.price + ".00"}</b>
            </div>
          </div>
          <button
            onClick={makePayment}
            className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]"
          >
            {isLoading ? "Processing request..." : "MAKE PAYMENT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;

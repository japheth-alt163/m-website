import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, errMessage, isLoggedIn, profileData } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [passMatchErr, setPassMatchErr] = useState(false);
  const [emptyFieldsErr, setEmptyFieldsErr] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!userData.fullName || !userData.email || !userData.password) {
      setEmptyFieldsErr(true);
      setTimeout(() => {
        setEmptyFieldsErr(false);
      }, 3000);
      return;
    }

    if (userData.password != confirmPass) {
      setPassMatchErr(true);
      setTimeout(() => {
        setPassMatchErr(false);
      }, 3000);
      return;
    }

    await dispatch(RegisterUser(userData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      return;
    }
  }, [profileData, isLoggedIn, dispatch]);

  return (
    <div className="pt-8  items-center justify-center bg-orange-100 h-screen ">
      <form class="max-w-md mx-auto bg-slate-100 p-14 rounded-lg shadow-md">
        <div className="my-3 flex justify-center">
          {emptyFieldsErr && (
            <small className="text-center text-red-500">
              All fields are required
            </small>
          )}
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your full name
          </label>
          <input
            type="text"
            id="text"
            name="fullName"
            value={userData.fullName}
            onChange={onChangeHandler}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="full name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={onChangeHandler}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@domain.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            id="password"
            value={userData.password}
            onChange={onChangeHandler}
            name="password"
            type="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>

          {passMatchErr && (
            <small className="text-center text-red-500">
              Passwords do not match
            </small>
          )}
          <input
            id="confirm password"
            name="confirmPass"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          onClick={!isLoading && onSubmitHandler}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? "Processing..." : "Create account"}
        </button>
      </form>
    </div>
  );
};

export default Register;

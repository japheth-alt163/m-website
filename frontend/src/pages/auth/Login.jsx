import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoggedIn, isLoading, errMessage, profileData } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [emptyFieldsErr, setEmptyFieldsErr] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      setEmptyFieldsErr(true);
      setTimeout(() => {
        setEmptyFieldsErr(false);
      }, 3000);
      return;
    }

    await dispatch(LoginUser(userData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      return;
    }
  }, [profileData, dispatch]);
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
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={userData.email}
            onChange={onChangeHandler}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
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
            name="password"
            type="password"
            autoComplete="current-password"
            value={userData.password}
            onChange={onChangeHandler}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          onClick={!isLoading && onSubmitHandler}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? "Processing..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

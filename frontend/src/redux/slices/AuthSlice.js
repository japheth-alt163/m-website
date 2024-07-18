import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKENDURL } from "../../constants/BackendUrl";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  profileData: {} || localStorage.getItem("user"),
  token: "",
  errMessage: "",
  successMsg: "",

  curr_pet: {},
};

export const RegisterUser = createAsyncThunk(
  "auth,register",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BACKENDURL}/user/register`, data);
      return response;
    } catch (error) {
      console.log(error);
      let errMsg;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errMsg = error.response.data.message;
      } else {
        // If no custom message, use a generic error message
        errMsg = "An error occurred while creating account";
      }
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "auth,login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BACKENDURL}/user/login`, data);
      return response;
    } catch (error) {
      console.log(error);
      let errMsg;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errMsg = error.response.data.message;
      } else {
        // If no custom message, use a generic error message
        errMsg = "An error occurred while loging in";
      }
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ERR_MSG(state, action) {
      state.errMessage = action.payload;
    },

    SET_SUCC_MSG(state, action) {
      state.successMsg = action.payload;
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
    },
    setCurrPet: (state, action) => {
      state.curr_pet = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // register user

      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Registration successfull");
        state.isLoggedIn = true;
        state.profileData = action.payload.data?.user;
        state.token = action.payload.data?.token;
        localStorage.setItem("user", JSON.stringify(action.payload.data?.user));
      })

      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
        state.errMessage = action.payload;
      })

      // Login user

      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Login successfull");
        state.isLoggedIn = true;
        state.profileData = action.payload.data?.user;
        state.token = action.payload.data?.token;
        localStorage.setItem("user", JSON.stringify(action.payload.data?.user));
      })

      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
        state.errMessage = action.payload;
      });
  },
});

export const { SET_ERR_MSG, SET_SUCC_MSG, setCurrPet, logoutUser } =
  AuthSlice.actions;

export default AuthSlice.reducer;

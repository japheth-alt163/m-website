import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ABOUT_PAGE,
  ADOPT_PET_FORM,
  ANIMALS_PAGE,
  CONTACT_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  REQUESTS_PAGE,
  REVIEW_PAGE,
  VET_PAGE,
  WELCOME_PAGE,
} from "../constants/route-paths";
import {
  AboutPage,
  AnimalsPage,
  ContactsPage,
  Login,
  MyRequestsPage,
  Register,
  Welcome,
} from "../pages";
import WelcomeNavbar from "../components/navbars/WelcomeNavbar";
import Footer from "../components/containers/Footer";
import Profile from "../pages/profile/Profile";
import AdoptPetForm from "../pages/adopt/AdoptPetForm";
import DeliveryInfo from "../pages/animals/components/DeliveryInfo";
import PayWith from "../pages/animals/components/PayWith";
import VetPage from "../pages/vet/VetPage";
import ReviewPage from "../pages/review/ReviewPage";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div className="bg-slate-50">
      <WelcomeNavbar />
      <Routes location={location} key={location.pathname}>
        <Route path={WELCOME_PAGE} element={<Welcome />} />

        <Route path={REGISTER_PAGE} element={<Register />} />
        <Route path={LOGIN_PAGE} element={<Login />} />

        <Route path={PROFILE_PAGE} element={<Profile />} />

        <Route path={ANIMALS_PAGE} element={<AnimalsPage />} />
        <Route path={ADOPT_PET_FORM} element={<AdoptPetForm />} />
        <Route path={VET_PAGE} element={<VetPage />} />
        <Route path={REQUESTS_PAGE} element={<MyRequestsPage />} />
        <Route path={REVIEW_PAGE} element={<ReviewPage />} />
        <Route path={ABOUT_PAGE} element={<AboutPage />} />
        <Route path={CONTACT_PAGE} element={<ContactsPage />} />

        <Route path="/order" element={<DeliveryInfo />} />
        <Route path="/pay" element={<PayWith />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoutes;

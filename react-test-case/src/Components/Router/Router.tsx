import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ProfilePage from "../ProfilePage/ProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/profile/:id" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
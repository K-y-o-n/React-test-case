import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ProfilePage from "../ProfilePage/ProfilePage";

function Router() {
  const basename:string = document.querySelector('base')?.getAttribute('href') ?? '/'

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/profile/:id" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
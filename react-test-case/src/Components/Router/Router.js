import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ProfilePage from "../ProfilePage/ProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/profile/:id" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
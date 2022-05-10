import React from "react";
import UsersList from "../UsersList/UsersList";
import Filter from "../Filter/Filter";
import "./MainPage.css"

function MainPage() {
  return (
    <div className="container">
      <Filter />
      <main>
        <UsersList />
      </main>
    </div>
  );
}

export default MainPage;
import React from "react"
import Filter from "../Filter/Filter"
import UserProfile from "../UserProfile/UserProfile"
import "../MainPage/MainPage.css"

function ProfilePage() {
  return (
    <div className="container">
      <Filter />
      <UserProfile />
    </div>
  )
}

export default ProfilePage;
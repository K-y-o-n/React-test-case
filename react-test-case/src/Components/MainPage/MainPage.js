import UsersList from "../UsersList/UsersList";
import Filter from "../Filter/Filter";

function MainPage() {
  return (
    <>
      <Filter />
      <main>
        <UsersList />
      </main>
    </>
  );
}

export default MainPage;
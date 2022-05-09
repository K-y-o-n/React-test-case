import { getAllUsers } from "../../store/actions/usersListAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const users = useSelector(
    (state) => state.users,
    shallowEqual
  );

  return (
    <>
      <h2>Список пользователей</h2>
      {users.length ? users.map(user => {
        return (
          <div key={user.id}>
            <p><span>ФИО:</span>{user.name}</p>
            <p><span>город:</span>{user.address.city}</p>
            <p><span>компания:</span>{user.company.name}</p>
            <Link to={`/profile/${user.id}`}>Подробнее</Link>
          </div>
        )
      }) : "Ничего не найдено"}
      <p>Найдено {users.length} пользователей</p>
    </>
  );
}

export default UsersList;
import { getAllUsers } from "../../store/actions/usersListAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UserList.css"

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
    <div className="wrapper">
      <div className="userList">
        <h2>Список пользователей</h2>
        {users.length ? users.map(user => {
          return (
            <div className="userList__div" key={user.id}>
              <p><span>ФИО:</span>{user.name}</p>
              <p><span>город:</span>{user.address.city}</p>
              <p><span>компания:</span>{user.company.name}</p>
              <Link className="userList__link" to={`/profile/${user.id}`}>Подробнее</Link>
            </div>
          )
        }) : "Ничего не найдено"}
        <p className="userList__p">Найдено {users.length} пользователей</p>
      </div>
    </div>
  );
}

export default UsersList;
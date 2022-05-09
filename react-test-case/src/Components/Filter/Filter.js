import { useDispatch } from "react-redux";
import { filterByCity } from "../../store/actions/usersListAction";
import { filterByName } from "../../store/actions/usersListAction";
import "./Filter.css"

function Filter() {
  const dispatch = useDispatch();

  function handlerByName() {
    dispatch(filterByName())
  }

  function handlerByCity() {
    dispatch(filterByCity())
  }

  return (
    <div className="filter">
      <h2>Сортировка</h2>
      <button onClick={() => handlerByName()}>по имени</button>
      <button onClick={() => handlerByCity()}>по городу</button>
    </div>
  )
}

export default Filter;
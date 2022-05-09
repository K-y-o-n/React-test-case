import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";
import valid from "../../validation/validation";
import "./UserProfile.css"

function UserProfile() {
  const { id } = useParams();
  const user = useSelector((state) => state.users.find((el) => el.id === +id))
  const { name, username, email, address: { street, city, zipcode }, phone, website } = user
  const [form, setForm] = useState({
    name: name,
    username: username,
    email: email,
    street: street,
    city: city,
    zipcode: zipcode,
    phone: phone,
    website: website,
    comment: ""
  })
  const [readOnly, setReadOnly] = useState(true)
  const [notValidInput, setNotValidInput] = useState({})

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.name !== "comment" && !(valid[e.target.name].test(e.target.value))) {
      e.target.style.borderColor = "#D91313";
      setNotValidInput({ ...notValidInput, [e.target.name]: "notValid" })
    } else {
      e.target.style.borderColor = "#D8D8D8";
      setNotValidInput(() => {
        delete notValidInput[e.target.name];
        return notValidInput
      })
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (Object.keys(notValidInput).length !== 0) {
      console.log(`Некорректно заполнены следующие поля: ${Object.keys(notValidInput)}`);
      return;
    } else console.log(JSON.stringify(form))
  }

  const changeReadOnly = () => {
    setReadOnly(!readOnly)
  }


  return (
    <div className="wrapper">
      <div className="user-profile-header">
        <h2>Профиль пользователя</h2>
        <button onClick={changeReadOnly}>Редактировать</button>
      </div>
      <form className="form">
        <label className="form__label">
          Name
          <input readOnly={readOnly} value={form.name} name="name" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          User name
          <input readOnly={readOnly} value={form.username} name="username" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          E-mail
          <input readOnly={readOnly} value={form.email} name="email" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Street
          <input readOnly={readOnly} value={form.street} name="street" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          City
          <input readOnly={readOnly} value={form.city} name="city" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Zip code
          <input readOnly={readOnly} value={form.zipcode} name="zipcode" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Phone
          <input readOnly={readOnly} value={form.phone} name="phone" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Website
          <input readOnly={readOnly} value={form.website} name="website" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Comment
          <textarea readOnly={readOnly} value={form.comment} name="comment" onChange={updateForm} ></textarea>
        </label>
      </form>
      <button type="submit" onClick={submitForm}>Отправить</button>
    </div>
  )
}

export default UserProfile;
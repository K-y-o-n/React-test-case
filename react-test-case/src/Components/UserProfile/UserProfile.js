import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useRef, useState } from "react";
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
  const submitEl = useRef(null);
  const inputEl = useRef({
    name: null,
    username: null,
    email: null,
    street: null,
    city: null,
    zipcode: null,
    phone: null,
    website: null,
    comment: null
  });
  const [readOnly, setReadOnly] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)
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
    if (readOnly === true) {
      setReadOnly(false);
      setSubmitDisabled(false);
      for (let key in inputEl.current) {
        inputEl.current[key].style.color = "#000000"
      }
      submitEl.current.style.background = "#52CF4F";
    } else {
      setReadOnly(true);
      setSubmitDisabled(true);
      for (let key in inputEl.current) {
        inputEl.current[key].style.color = "rgba(0, 0, 0, 0.3)"
      }
      submitEl.current.style.background = "#AFAFAF";
    }
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
          <input ref={ref => inputEl.current.name = ref} readOnly={readOnly} value={form.name} name="name" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          User name
          <input ref={ref => inputEl.current.username = ref} readOnly={readOnly} value={form.username} name="username" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          E-mail
          <input ref={ref => inputEl.current.email = ref} readOnly={readOnly} value={form.email} name="email" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Street
          <input ref={ref => inputEl.current.street = ref} readOnly={readOnly} value={form.street} name="street" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          City
          <input ref={ref => inputEl.current.city = ref} readOnly={readOnly} value={form.city} name="city" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Zip code
          <input ref={ref => inputEl.current.zipcode = ref} readOnly={readOnly} value={form.zipcode} name="zipcode" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Phone
          <input ref={ref => inputEl.current.phone = ref} readOnly={readOnly} value={form.phone} name="phone" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Website
          <input ref={ref => inputEl.current.website = ref} readOnly={readOnly} value={form.website} name="website" onChange={updateForm}></input>
        </label>
        <label className="form__label">
          Comment
          <textarea ref={ref => inputEl.current.comment = ref} readOnly={readOnly} value={form.comment} name="comment" onChange={updateForm} ></textarea>
        </label>
      </form>
      <button disabled={submitDisabled} ref={submitEl} type="submit" onClick={submitForm}>Отправить</button>
    </div>
  )
}

export default UserProfile;
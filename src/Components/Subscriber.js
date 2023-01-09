import Header from "./header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Subscriber.css";

function Subscriber(props) {
  const navigate = useNavigate();
  const [name, updateName] = useState("");
  const [phone, updatePhone] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.setData((old) => {
      return [
        {
          name: name,
          phoneNumber: phone,
        },
        ...old,
      ];
    });
    navigate("/");
  }
  return (
    <div>
      <Header title="Add Subsriber" />
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
      <form action="" className="form" method="post" onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) => {
              updateName(e.target.value);
            }}
            className="input"
            id="name"
            required
            autoFocus
            autoComplete="name"
          />
        </div>
        <div className="group">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="text"
            onChange={(e) => {
              updatePhone(e.target.value);
            }}
            className="input"
            id="phone"
            required
            autoComplete="tel"
          />
        </div>
        <div className="group">
          <div>
            <b>Subscriber to be added</b>
          </div>
          <div>
            <b>Name: </b>
            {name}
          </div>
          <div>
            <b>Phone Number: </b>
            {phone}
          </div>
        </div>
        <div className="group">
          <button type="submit" className="add-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscriber;

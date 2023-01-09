import "./home.css";
import Header from "./header";
import { Link } from "react-router-dom";

function Home({ data, deleteItem }) {
  return (
    <>
      <Header title="Phone Directory" />
      <Link to="/add">
        <button className="add-btn">Add</button>
      </Link>
      <div className="contact-list-container">
        <div className="contact-list head">
          <p className="contact-listItem">Name</p>
          <p className="contact-listItem">Phone Number</p>
          <p className="contact-listItem">Action</p>
        </div>
        {data.map((item, key) => {
          return (
            <div key={key} className="contact-list">
              <p className="contact-listItem">{item.name}</p>
              <p className="contact-listItem">{item.phoneNumber}</p>
              <p className="contact-listItem">
                <button
                  className="delete-btn"
                  onClick={() => {
                    deleteItem(key);
                  }}
                >
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

// return (
//   <div className="contact-list">
//     <p className="contact-listItem">{item.name}</p>
//     <p className="contact-listItem">{item.phoneNumber}</p>
//     <p className="contact-listItem">
//       <button className="delete-btn">Delete</button>
//     </p>
//   </div>
// );
// })

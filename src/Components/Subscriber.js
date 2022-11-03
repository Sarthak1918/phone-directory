import Header from "./header";
import { Link } from "react-router-dom";

function Subscriber() {
  return (
    <div>
      <Header title="Add Subsriber" />
      <Link to="/"><button className="back-btn">Back</button></Link>
      <button className="add-btn">Add</button>
    </div>
  );
}

export default Subscriber;

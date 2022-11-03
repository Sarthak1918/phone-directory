import Home from "./Components/Home";
import Subscriber from "./Components/Subscriber";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  let [data, setData] = useState([
    {
      id: 1,
      name: "dev1",
      phoneNumber: 1234567897,
    },
    {
      id: 2,
      name: "dev2",
      phoneNumber: 121212121,
    },
  ]);

  const deleteItem = (id) => {
    console.log("delete", id);
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  };

  return (
    <div className="MyApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} deleteItem={deleteItem} />}></Route>
          <Route path="add" element={<Subscriber />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Counter/> */}
      {/* <Home data={data}/>
      <Subscriber/> */}
    </div>
  );
}

export default App;

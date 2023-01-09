import Home from "./Components/Home";
import Subscriber from "./Components/Subscriber";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [data, setData] = useState([
    {
      name: "dev1",
      phoneNumber: "1234567897",
    },
    {
      name: "dev2",
      phoneNumber: "121212121",
    },
  ]);

  const deleteItem = (index) => {
    console.log("delete", index);
    setData((old) => {
      const newList = [...old];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className="MyApp">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} deleteItem={deleteItem} />}
          ></Route>
          <Route path="add" element={<Subscriber setData={setData} />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Counter/> */}
      {/* <Home data={data}/>
      <Subscriber/> */}
    </div>
  );
}

export default App;

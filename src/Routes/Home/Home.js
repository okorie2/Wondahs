import React, { useEffect, useReducer, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";
import "../Home/Home.css";

function HomePage(props) {
  const [print, setPrint] = useState(false);
  const cards = [1, 2, 3, 4, 5, 6];
  // const dispatch = useDispatch()
  const myReducer = (state, action) => {
    switch (action.type) {
      case "open_card":
        console.log(action.payload, "hey");
        return { id: action.payload === state.id ? null : action.payload };
      default:
        return state;
    }
  };
  const initialstate = {
    id: "",
  };
  const [state, dispatch] = useReducer(myReducer, initialstate);
  console.log(state, "state");

  const openPrint = (data) => {
    dispatch({ type: "open_card", payload: data });
    console.log(data, "data");
  };

  return (
    <>
      <Navbar />
      <div className="bg">
        <div>
          <h2>Purchase Local and International Numbers</h2>
        </div>
      </div>
      <div className="maincard">
        {cards.map((data) => {
          return (
            <div className="card" key={data}>
              <h4> Nigeria</h4>
              <div className="flag" onClick={() => openPrint(data)}></div>
              {state.id === data ? (
                <div className="print">
                  <p>080332765423</p>
                  <p>080332765423</p>
                  <p>080332765423</p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

import React, { useState } from "react";
import DisplayProfile from "./DisplayProfile";
import "./comp.css";
function Showprofile() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((originalData) => {
        console.log(originalData);
        if (originalData) {
          setData(originalData);
        }
      });
  };
  return (
    <>
      <div>
        <div>
          <div>
            <form id="myform" autoComplete="off" onSubmit={onSubmitHandler}>
              <input onChange={onChangeHandler} />
              <button
                onClick={onSubmitHandler}
                style={{
                  height: "36px",
                  width: "100px",
                  color: "white",
                  backgroundColor: "#2B4EDB",
                }}
              >
                search
              </button>
            </form>
          </div>
        </div>
      </div>
      <DisplayProfile data={data} />
    </>
  );
}

export default Showprofile;

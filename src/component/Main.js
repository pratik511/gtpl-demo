import React, { useState } from "react";
import HomeLogo from ".././utils/img/pratik.jpeg";
import N from ".././utils/img/n.png";

function Main() {
  const [page, setPage] = useState(0);
  const [obj1, setObj1] = useState({
    userName: "Pratik",
    userPhoneNumber: "1234567890",
  });
  const [errorMsg1, setErrorMsg1] = useState({
    userName: "",
    userPhoneNumber: "",
  });

  const onChangeObj1 = (e) => {
    // debugger
    // e.preventdefault()
    const { name, value } = e.target;
    setErrorMsg1({ ...errorMsg1, [name]: "" });
    setObj1({ ...obj1, [name]: value });
    // objValidation1()
    console.log("namename", name);
    if (name === "userName") {
      nameVali(value);
    } else if (name === "userPhoneNumber") {
      numberVali(value);
    }
  };

  // onChangeName = (e) =>{
  //     const{name,value} =e.target;
  //     setObj1({})
  // }

  console.log("obj1obj1", obj1);
  const nameVali = (value) => {
    let error = true;
    let userNameMsg = "";
    if (!value) {
      userNameMsg = "Username is Required!";
      error = false;
    }
    setErrorMsg1({
      userName: userNameMsg,
    });
  };

  const numberVali = (value) => {
    // console.log("value",value);
    let error = true;
    let userPhoneNumberMsg = "";
    if (!value) {
      userPhoneNumberMsg = "Mobile Number is Required!";
      error = false;
    } else if (value.length !== 10) {
      userPhoneNumberMsg = `Mobile Number Must be 10 Digit`;
      error = false;
    }
    setErrorMsg1({
      userPhoneNumber: userPhoneNumberMsg,
    });
  };

  const onSubmitObj1 = () => {
    let pattern = /[^A-Za-z_.]/;
    const string = obj1.userName.match(pattern);

    if (!obj1.userName && !obj1.userPhoneNumber) {
      setErrorMsg1({
        userName: "Username is Required!",
        userPhoneNumber: "Mobile Number is Required!",
      });
    } else if (string) {
      setErrorMsg1({
        userName: "Username Not Allow Number!",
      });
    } else if (!obj1.userName) {
      setErrorMsg1({
        userName: "Username is Required!",
      });
    } else if (!obj1.userPhoneNumber) {
      setErrorMsg1({
        userPhoneNumber: "Mobile Number is Required!",
      });
    } else if (obj1.userPhoneNumber.length !== 10) {
      setErrorMsg1({
        userPhoneNumber: "Mobile Number Must be 10 Digit",
      });
    } else {
      Next();
    }
    
    console.log("obj", obj1);
};

const secondSubmit = () =>{

  } 

  const Next = () => {
    return setPage((currPage) => currPage + 1);
  };
  const Previous = () => {
    return setPage((currPage) => currPage - 1);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <>
          <div className="outside">
            <div className="container">
              <div className="imgDiv">
                <img className="imgSize" src={HomeLogo} />
              </div>
              <h2 className="center">Welcome,User</h2>
              <div className="hometext">
                <p>
                  <span>&#9679; </span> GTPL HD offers you advanced High
                  Definition picture quality for your HD TVs.
                </p>
                <p>
                  <span>&#9679; </span> Select from a range of packeges channels
                  to suit your viewing requirements.
                </p>
                <p>
                  <span>&#9679; </span> Access to GTPL local channels and city
                  specific channels
                </p>
              </div>
              <div className="HomeBtnMain">
                <button className="HomeBtn" onClick={Next}>
                  GET START
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else if (page === 1) {
      return (
        <>
          <div className="outside">
            <div className="container">
              <button className="mt-0 btnHide" onClick={Previous}>
                <i className="fa">&#xf177;</i>
              </button>
              <div className="mb-3 m-5">
                <div className="py-2">
                  <label className="form-label m-0">Enter Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="userName"
                    value={obj1.userName}
                    onChange={onChangeObj1}
                    placeholder="Enter Name"
                    aria-label="default input example"
                  />
                  <div className="errorClass">
                    {errorMsg1.userName !== "" && (
                      <p className="m-0" style={{ color: "red" }}>
                        {errorMsg1.userName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="py-2">
                  <label className="form-label m-0">Enter Number</label>
                  <input
                    className="form-control"
                    name="userPhoneNumber"
                    type="number"
                    maxLength="10"
                    value={obj1.userPhoneNumber}
                    onChange={onChangeObj1}
                    placeholder="Enter number"
                    aria-label="default input example"
                  />
                  <div className="errorClass">
                    {errorMsg1.userPhoneNumber !== "" && (
                      <p className="m-0" style={{ color: "red" }}>
                        {errorMsg1.userPhoneNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="HomeBtnMain mt-5">
                <button className="HomeBtn" onClick={onSubmitObj1}>
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else if (page === 2) {
      return (
        <>
          <div className="outside">
            <div className="container">
              <button className="mt-0 btnHide" onClick={Previous}>
                <i className="fa ">&#xf177;</i>
              </button>
              <div className="mb-0 m-3">
                <label className="form-label mt-3 mb-0 font">
                  Packege_Type
                </label>
                <select className="form-select" id="ddlView" aria-label="Default select example" >
                  <option value="Select" selected disabled>Select Type</option>
                  <option value="SD">SD</option>
                  <option value="HD">HD</option>
                  <option value="Normal">Normal</option>
                  <option value="HD+">HD+</option>
                  <option value="UHD">UHD</option>
                </select>
              </div>
              <div className="mb-3 m-4">
                <label className="form-label mt-3 mb-0 font">
                  <li>SD - Standara Definition/720.</li>
                </label>
                <br />
                <label className="form-label mt-3 mb-0 font">
                  <li>HD - High Definition/2k.</li>
                </label>
                <br />
                <label className="form-label mt-3 mb-0 font">
                  <li>Normal - Normal Resolution</li>
                </label>
                <br />
                <label className="form-label mt-3 mb-0 font">
                  <li>HD+ - High Definition/4k.</li>
                </label>
                <br />
                <label className="form-label mt-3 mb-0 font">
                  <li>UHD - Ultra High Definition/8k.</li>
                </label>
              </div>
              <div className="HomeBtnMain mt-4">
                <button className="HomeBtn" onClick={secondSubmit()}>
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else if (page === 3) {
      return (
        <>
          <div className="outside">
            <div className="container">
              <button className="mt-0 btnHide" onClick={Previous}>
                <i className="fa ">&#xf177;</i>
              </button>
              <div className="mb-0 m-3">
                <label className="form-label mb-0 font">Start Date</label>
                <br />
                <input
                  type="date"
                  id=""
                  name=""
                  style={{ width: "324px", height: "40px" }}
                />
              </div>
              <div className="mb-0 m-3">
                <label className="form-label mt-2 mb-0 font">
                  Packege_Type
                </label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select Plane</option>
                  <option value="1">1-Month</option>
                  <option value="2">3-Month</option>
                  <option value="3">6-Month</option>
                  <option value="3">1-Year</option>
                </select>
              </div>
              <div className="d-flex mx-5 mt-2">
                <div className="mb-3 mx-3 mt-5">
                  <label className="form-label mx-4 mb-0 font">Plane</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">1-Month</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">3-Month</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">6-Month</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">1-Year</label>
                  <br />
                </div>
                <div className="mb-3 mt-5">
                  <label className="form-label mx-4 mb-0 font">Price</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">250</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">625</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">1000</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">1750</label>
                  <br />
                </div>
              </div>
              <div className="HomeBtnMain mt-2">
                <button className="HomeBtn" onClick={Next}>
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="outside">
            <div className="container">
              <div className="imgDiv">
                <img className="imgSizeL" src={N} />
              </div>
              <h2 className="center">Thanks You</h2>
              <div className="d-flex m-4 mt-4">
                <div className="mb-3 mt-5">
                  <label className="form-label mx-4 mb-0 font">Name</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Packege_Type
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Start_Date
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Packege_Plane
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">Price</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">Status</label>
                  <br />
                </div>
                <div className="mb-3 mt-5">
                  <label className="form-label mx-4 mb-0 font">Name</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Packege_Type
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Start_Date
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">
                    Packege_Plane
                  </label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">Price</label>
                  <br />
                  <label className="form-label mx-4 mb-0 font">Status</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div>{PageDisplay()}</div>
    </>
  );
}

export default Main;

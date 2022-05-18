import React, { useEffect, useState } from "react";
import HomeLogo from ".././utils/img/pratik.jpeg";
import N from ".././utils/img/n.png";
import { useSelector, useDispatch } from "react-redux";
import { backPage, nextPage } from "../redux/action/action.Count";
import DatePicker from "react-date-picker";
import {
  Addcontact,
  Addname,
  PackagePlane,
  PackageType,
  Price,
  StartDate,
  TotalPrice,
} from "../redux/action/action.Detail";

function Main() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const detail = useSelector((state) => state.detail);
  console.log("detaildetaildetail", detail);
  const [obj1, setObj1] = useState({
    userName: "Pratik",
    userPhoneNumber: "1234567890",
  });
  const [errorMsg1, setErrorMsg1] = useState({
    userName: "",
    userPhoneNumber: "",
    packgeTypeError: "",
    monthTypeError: "",
    dateError: "",
  });
  const [selectValue, setSelectValue] = useState("");
  const [selectValue1, setSelectValue1] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [plane, setPlane] = useState([
    {
      Packege_Type: "SD",
      price: 250,
      Start_Date: "",
      Select_Plane: "",
      Packege_Plane: "",
      Packege_Price: "",
    },
    {
      Packege_Type: "HD",
      price: 350,
      Start_Date: "",
      Select_Plane: "",
      Packege_Plane: "",
      Packege_Price: "",
    },
    {
      Packege_Type: "Normal",
      price: 150,
      Start_Date: "",
      Select_Plane: "",
      Packege_Plane: "",
      Packege_Price: "",
    },
    {
      Packege_Type: "HD+",
      price: 400,
      Start_Date: "",
      Select_Plane: "",
      Packege_Plane: "",
      Packege_Price: "",
    },
    {
      Packege_Type: "UHD",
      price: 450,
      Start_Date: "",
      Select_Plane: "",
      Packege_Plane: "",
      Packege_Price: "",
    },
  ]);
  const pattern = /[^A-Za-z_./ /]/;

  const Next = () => {
    // if (count == 2) {
    //   dispatch()
    // } else {

    // }

    dispatch(nextPage());
  };
  const Back = () => {
    dispatch(backPage());
  };

  const onChangeObj1 = (e) => {
    const { name, value } = e.target;
    setObj1({ ...obj1, [name]: value });
    if (name === "userName") {
      if (!value) {
        setErrorMsg1({ ...errorMsg1, userName: "Username is Required!" });
      } else if (value.match(pattern)) {
        setErrorMsg1({ ...errorMsg1, userName: "Username Not Allow Number!" });
      } else {
        setErrorMsg1({ ...errorMsg1, userName: "" });
      }
    } else if (name === "userPhoneNumber") {
      if (!value) {
        setErrorMsg1({
          ...errorMsg1,
          userPhoneNumber: "Mobile Number is Required!",
        });
      } else if (value.length !== 10) {
        setErrorMsg1({
          ...errorMsg1,
          userPhoneNumber: "Mobile Number Must be 10 Digit",
        });
      } else {
        setErrorMsg1({ ...errorMsg1, userPhoneNumber: "" });
      }
    }
  };

  const onSubmitObj1 = () => {
    if (!obj1.userName && !obj1.userPhoneNumber) {
      setErrorMsg1({
        userName: "Username is Required!",
        userPhoneNumber: "Mobile Number is Required!",
      });
    } else if (!obj1.userName) {
      setErrorMsg1({ ...errorMsg1, userName: "Username is Required!" });
    } else if (!obj1.userPhoneNumber) {
      setErrorMsg1({
        ...errorMsg1,
        userPhoneNumber: "Mobile Number is Required!",
      });
    } else if (errorMsg1.userName || errorMsg1.userPhoneNumber) {
      return true;
    } else {
      dispatch(Addname(obj1.userName));
      dispatch(Addcontact(obj1.userPhoneNumber));
      Next();
    }
  };

  const PackegePlane = (e) => {
    const { value, name } = e.target;
    if (name === "packgeType") {
      if (value === "") {
        setSelectValue(value);
        setErrorMsg1({ ...errorMsg1, packgeTypeError: "Select Packege Type!" });
      } else {
        setSelectValue(value);
        setErrorMsg1({ ...errorMsg1, packgeTypeError: "" });
      }
    }
  };

  useEffect(() => {
    selectValue && dispatch(PackageType(selectValue))
  }, [dispatch,selectValue])
  

  const addPrice = () => {
    plane &&
      plane.map((p) => {
        if (p.Packege_Type === detail.Package_Type) {
          dispatch(Price(p.price));
        }
      });
  };
  const totalPrice = () => {
    plane &&
      plane.map((p) => {
        debugger
        if (p.Packege_Type === detail.Package_Type) {
          if ("1-Month" === selectValue1) {
            dispatch(TotalPrice(detail.Price));
          }
           else if("3-Month" === selectValue1){
            dispatch(TotalPrice(detail.Price * 2.8));
          }
           else if("6-Month" === selectValue1){
            dispatch(TotalPrice(detail.Price * 5.5));
          }
           else if("1-Year" === selectValue1){
            dispatch(TotalPrice(detail.Price * 11));
          }
        }
      });
  };

  const packageNext = () => {
    if (selectValue === "") {
      setErrorMsg1({ ...errorMsg1, packgeTypeError: "Select Packege Type!" });
    } else {
      // dispatch(PackageType(selectValue))
      addPrice();
      Next();
    }
  };

  const MonthPlane = (e) => {
    const { value, name } = e.target;
    if (name === "monthType") {
      if (value === "") {
        setSelectValue1(value);
        setErrorMsg1({ ...errorMsg1, monthTypeError: "Select Month Plane!" });
      } else {
        setSelectValue1(value);
        setErrorMsg1({ ...errorMsg1, monthTypeError: "" });
      }
    }
  };

  const DateChange = (date) => {
    if (!date) {
      setErrorMsg1({ ...errorMsg1, dateError: "Please Select date" });
      setDateValue(date);
    } else {
      setErrorMsg1({ ...errorMsg1, dateError: "" });
      setDateValue(date);
    }
  };

  const planPriceSelect = () => {
    if (selectValue1 === "" && dateValue === null) {
      setErrorMsg1({
        ...errorMsg1,
        monthTypeError: "Select Month Plane!1",
        dateError: "Please Select date!",
      });
    } else if (selectValue1 === "") {
      setErrorMsg1({ ...errorMsg1, monthTypeError: "Select Month Plane!" });
    } else if (dateValue === null) {
      setErrorMsg1({ ...errorMsg1, dateError: "Please Select date!" });
    } else {
      const getDate =  dateValue.getDate() + '-' + (dateValue.getMonth() + 1) + '-' + dateValue.getFullYear();
      dispatch(StartDate(getDate))
      dispatch(PackagePlane(selectValue1))
      totalPrice()
      Next();
    }
  };

  const PageDisplay = () => {
    switch (count) {
      case 1:
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
                    <span>&#9679; </span> Select from a range of packeges
                    channels to suit your viewing requirements.
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
      case 2:
        return (
          <>
            <div className="outside">
              <div className="container">
                <button className="mt-0 btnHide" onClick={Back}>
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
      case 3:
        return (
          <>
            <div className="outside">
              <div className="container">
                <button className="mt-0 btnHide" onClick={Back}>
                  <i className="fa ">&#xf177;</i>
                </button>
                <div className="mb-0 m-3">
                  <label className="form-label mt-3 mb-0 font">
                    Packege_Type
                  </label>
                  <select
                    name="packgeType"
                    className="form-select"
                    value={selectValue}
                    onChange={(e) => PackegePlane(e)}
                  >
                    <option value="">Select Type</option>
                    <option value="SD">SD</option>
                    <option value="HD">HD</option>
                    <option value="Normal">Normal</option>
                    <option value="HD+">HD+</option>
                    <option value="UHD">UHD</option>
                  </select>
                  <div>
                    {errorMsg1.packgeTypeError !== "" ? (
                      <p className="m-0" style={{ color: "red" }}>
                        {errorMsg1.packgeTypeError}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
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
                  <button className="HomeBtn" onClick={packageNext}>
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="outside">
              <div className="container">
                <button className="mt-0 btnHide" onClick={Back}>
                  <i className="fa ">&#xf177;</i>
                </button>
                <div style={{ height: "80px" }}>
                  <div className="mb-0 m-3">
                    <label className="form-label mb-0 font">Start Date</label>
                    <br />
                    <DatePicker
                      minDate={new Date()}
                      maxDate={new Date()}
                      format="dd-MM-y"
                      className="datePicker"
                      value={dateValue}
                      onChange={DateChange}
                    />
                  </div>
                  <div>
                    {errorMsg1.dateError !== "" ? (
                      <p className="mx-4 m-0" style={{ color: "red" }}>
                        {errorMsg1.dateError}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div style={{ height: "60px" }}>
                  <div className="mb-0 m-3">
                    <label className="form-label mt-2 mb-0 font">
                      Packege_Plane
                    </label>
                    <select
                      className="form-select"
                      name="monthType"
                      aria-label="Default select example"
                      value={selectValue1}
                      onChange={(e) => MonthPlane(e)}
                    >
                      <option value="">Select Plane</option>
                      <option value="1-Month">1-Month</option>
                      <option value="3-Month">3-Month</option>
                      <option value="6-Month">6-Month</option>
                      <option value="1-Year">1-Year</option>
                    </select>
                  </div>
                  <div>
                    {errorMsg1.monthTypeError !== "" ? (
                      <p className="mx-4 m-0" style={{ color: "red" }}>
                        {errorMsg1.monthTypeError}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
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
                    <label className="form-label mx-4 mb-0 font">{detail.Price}</label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                      {detail.Price * 2.8}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                      {detail.Price * 5.5}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                      {detail.Price * 11}
                    </label>
                    <br />
                  </div>
                </div>
                <div className="HomeBtnMain mt-2">
                  <button className="HomeBtn" onClick={planPriceSelect}>
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 5:
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
                    <label className="form-label mx-4 mb-0 font">
                      {detail.Name}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                    {detail.Package_Type}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                    {detail.Start_Date}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                    {detail.Package_Plane}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">
                    {detail.Total_Price}
                    </label>
                    <br />
                    <label className="form-label mx-4 mb-0 font">Activated</label>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        <div>
          <p>404-Page Not Found</p>
        </div>;
        break;
    }
  };

  return (
    <>
      <div>{PageDisplay()}</div>
    </>
  );
}

export default Main;

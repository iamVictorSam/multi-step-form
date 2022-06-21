import './App.css';
import { useState } from 'react';
import SignUp from "./components/SignUp";
import PersonalInfo from "./components/PersonalInfo";
import LocationInfo from "./components/LocationInfo";
import OtherInfo from "./components/OtherInfo";

function App() {

  const [page, setPage] = useState(0);

  const formTitles = ["Sign Up", "Location Info", "Personal Info",  "Other"];
  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    nationality: "",
    zipcode: "",
    highestQualification: "",
    occupation: "",
    about: "",
  });

  const componentList = [
    <SignUp formData={formData} setFormData={setFormData} x={x} />,
    <PersonalInfo formData={formData} setFormData={setFormData} x={x} />,
    <LocationInfo formData={formData} setFormData={setFormData} x={x} />,
    <OtherInfo formData={formData} setFormData={setFormData} x={x} />,
  ];
  return (
    <div className="App">
      <div className="progress-bar">{
        <div style={{width: page ===0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>}
      </div>

      <div >
        <h1>{formTitles[page]}</h1>

        <div className="body">{componentList[page]}</div>

        {page > 0 && (
          <button
            onClick={() => {
              setPage(page - 1);
                setX(-1000);

            }}
          >
            Previous
          </button>
        )}

        {page === formTitles.length - 1 ? (
          <button
            onClick={() => {
              alert("You've successfully submitted your form");
            }}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => {
                setPage(page + 1);
                setX(1000);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

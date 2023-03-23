// import React from "react";
// import { useState } from "react";
// import { Button, Form, Modal, Col, Row, Container } from "react-bootstrap";
// import bg from "../assets/bg.png";

// const FormPersonalData = () => {
//   const date = new Date();
//   const currentYear = date.getFullYear();

//   const [NPM, setNPM] = useState(0);
//   const [FirstName, setFirstName] = useState("");
//   const [MiddleName, setMiddleName] = useState("");
//   const [LastName, setLastName] = useState("");
//   const [Birthdate, setBirthdate] = useState("");
//   const [show, setShow] = useState(false);
//   const [validated, setValidated] = useState(false);

//   const handleClose = () => setShow(false);

//   const handleSubmit = (e) => {
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//     } else {
//       e.preventDefault();
//       setShow(true);
//     }
//     setValidated(true);
//   };

//   const Age = currentYear - parseInt(Birthdate.slice(0, 4));

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="mw-50 mx-auto border rounded p-4 bg-white drop-shadow">
//         <h2 className="mb-5 text-center">Personal Data Form </h2>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="NPM">
//             <Form.Label>NPM</Form.Label>
//             <Form.Control
//               type="text"
//               pattern="[0-9]*"
//               placeholder="Enter NPM"
//               onChange={(e) => setNPM(e.target.value)}
//               required
//               maxLength={10}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             <Form.Control.Feedback type="invalid">
//               NPM is a required field with a maximum of 10 numeric digits
//             </Form.Control.Feedback>
//           </Form.Group>

//           <div className="d-flex justify-content-between">
//             <Form.Group className="mb-3 me-2" controlId="FName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter First Name"
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               <Form.Control.Feedback type="invalid">
//                 Firstname is a required field
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3 me-2" controlId="MName">
//               <Form.Label>Middle Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Middle Name"
//                 onChange={(e) => setMiddleName(e.target.value)}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3 me-2" controlId="LName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Last Name"
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               <Form.Control.Feedback type="invalid">
//                 Lastname is a required field
//               </Form.Control.Feedback>
//             </Form.Group>
//           </div>

//           <Form.Group className="mb-3 me-2" controlId="LName">
//             <Form.Label>Birthdate</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="YYYY-MM-DD"
//               onChange={(e) => setBirthdate(e.target.value)}
//               required
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             <Form.Control.Feedback type="invalid">
//               Birthdate is a required field
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" className="mt-2" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton className="d-flex justify-content-center">
//           <Modal.Title>Your Personal Data</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Container>
//             <Row>
//               <Col xs="3">NPM</Col>
//               <Col xs="1">:</Col>
//               <Col>{NPM}</Col>
//             </Row>
//             <Row>
//               <Col xs="3">Fullname</Col>
//               <Col xs="1">:</Col>
//               <Col>
//                 {FirstName} {MiddleName} {LastName}
//               </Col>
//             </Row>
//             <Row>
//               <Col xs="3">Age</Col>
//               <Col xs="1">:</Col>
//               <Col>
//                 {Age}{" "}
//                 {Age.toString().slice(-1) === "1"
//                   ? "st"
//                   : Age.toString().slice(-1) === "2"
//                   ? "nd"
//                   : Age.toString().slice(-1) === "3"
//                   ? "rd"
//                   : "th"}
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default FormPersonalData;

// import React from "react";

// export default function FormPersonalDataMultiple() {
//   const date = new Date();
//   const currentYear = date.getFullYear();

//   const objBiodata = {
//     id: 0,
//     npm: 0,
//     fname: "",
//     mname: "",
//     lname: "",
//     bdate: date,
//   };

//   const handleClose = () => setShow(false);

//   const handleSubmit = (e) => {
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//     } else {
//       e.preventDefault();
//       setShow(true);
//     }
//     setValidated(true);
//   };

//   const [biodata, setBiodata] = useState([objBiodata]);

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="mw-50 mx-auto border rounded p-4 bg-white drop-shadow">
//         <h2 className="mb-5 text-center">Personal Data Form </h2>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="NPM">
//             <Form.Label>NPM</Form.Label>
//             <Form.Control
//               type="text"
//               pattern="[0-9]*"
//               placeholder="Enter NPM"
//               onChange={(e) => setBiodata(...biodata, objBiodata.npm )}
//               required
//               maxLength={10}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             <Form.Control.Feedback type="invalid">
//               NPM is a required field with a maximum of 10 numeric digits
//             </Form.Control.Feedback>
//           </Form.Group>

//           <div className="d-flex justify-content-between">
//             <Form.Group className="mb-3 me-2" controlId="FName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter First Name"
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               <Form.Control.Feedback type="invalid">
//                 Firstname is a required field
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3 me-2" controlId="MName">
//               <Form.Label>Middle Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Middle Name"
//                 onChange={(e) => setMiddleName(e.target.value)}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3 me-2" controlId="LName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Last Name"
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               <Form.Control.Feedback type="invalid">
//                 Lastname is a required field
//               </Form.Control.Feedback>
//             </Form.Group>
//           </div>

//           <Form.Group className="mb-3 me-2" controlId="LName">
//             <Form.Label>Birthdate</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="YYYY-MM-DD"
//               onChange={(e) => setBirthdate(e.target.value)}
//               required
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             <Form.Control.Feedback type="invalid">
//               Birthdate is a required field
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" className="mt-2" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton className="d-flex justify-content-center">
//           <Modal.Title>Your Personal Data</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Container>
//             <Row>
//               <Col xs="3">NPM</Col>
//               <Col xs="1">:</Col>
//               <Col>{NPM}</Col>
//             </Row>
//             <Row>
//               <Col xs="3">Fullname</Col>
//               <Col xs="1">:</Col>
//               <Col>
//                 {FirstName} {MiddleName} {LastName}
//               </Col>
//             </Row>
//             <Row>
//               <Col xs="3">Age</Col>
//               <Col xs="1">:</Col>
//               <Col>
//                 {Age}{" "}
//                 {Age.toString().slice(-1) === "1"
//                   ? "st"
//                   : Age.toString().slice(-1) === "2"
//                   ? "nd"
//                   : Age.toString().slice(-1) === "3"
//                   ? "rd"
//                   : "th"}
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormMulti() {
  var today = new Date();
  const currDate = formatDate(today);
  const objProfile = {
    npm: 0,
    fname: "",
    mname: "",
    lname: "",
    birthdate: currDate,
  };
  const [postData, setPostData] = useState([objProfile]);
  const [mymodal, setMymodal] = useState({
    show: false,
    message: "",
  });
  const modalHandleClose = () => {
    setMymodal({ ...mymodal, show: false });
  };

  const RowItem = ({ data, index }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="npm"
            className="form-control"
            placeholder="type numeric"
            pattern="^[0-9]*$"
            defaultValue={data.npm ? data.npm : ""}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].npm = parseInt(e.target.value);
                return newData;
              })
            }
          />
        </td>
        <td>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="enter firstname"
            defaultValue={data.fname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].fname = e.target.value;
                return newData;
              })
            }
          />
        </td>
        <td>
          <input
            type="text"
            name="mname"
            className="form-control"
            placeholder="enter middlename"
            defaultValue={data.mname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].mname = e.target.value;
                return newData;
              })
            }
          />
        </td>
        <td>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="enter lastname"
            defaultValue={data.lname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].lname = e.target.value;
                return newData;
              })
            }
          />
        </td>
        <td>
          <DatePicker
            selected={new Date(data.birthdate)}
            onChange={(value) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].birthdate = formatDate(value);
                return newData;
              })
            }
            className="form-control"
            dateFormat="yyyy-MM-dd"
            placeholderText="Choose Date"
          />
        </td>
        {index !== 0 ? (
          <td>
            <button
              className="btn btn-icon btn-sm btn-danger"
              type="button"
              onClick={(e) =>
                setPostData((prev) => {
                  const newData = [...prev];
                  delete newData[index];
                  return newData;
                })
              }
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  };

  const resultPost = (obj) => {
    return (
      <div className="result">
        {obj.map((v, index) =>
          v ? (
            <div className="border-bottom mb-3" key={index}>
              <p>
                <span className="fw-bolder">NPM:</span> {v.npm}
              </p>
              <p>
                <span className="fw-bolder">Fullname:</span> {v.fname} {v.mname}{" "}
                {v.lname}{" "}
              </p>
              <p>
                <span className="fw-bolder">Birthdate:</span> {v.birthdate}{" "}
              </p>
              <p>
                <span className="fw-bolder">Age:</span>{" "}
                {calculateAge(v.birthdate)} years old{" "}
              </p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let myresult = resultPost(postData);
    setMymodal({ ...mymodal, show: true, message: myresult });
  };

  return (
    <div id="form-multiple" className="card mb-5 mb-xl-10">
      <div className="card-header">
        <div className="card-title">
          <h3>Widget Two</h3>
        </div>
      </div>
      <div className="card-body p-0">
        <form
          method="post"
          autoComplete="off"
          onSubmit={(e) => handlerSubmit(e)}
        >
          <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
            <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
              <tr>
                <th>NPM</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Birthdate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {postData.map((v, index) =>
                v ? <RowItem key={index} data={v} index={index} /> : ""
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <button
                    className="btn btn-sm btn-light-primary"
                    type="button"
                    onClick={() =>
                      setPostData((prev) => {
                        return [...prev, objProfile];
                      })
                    }
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add new row
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="text-end p-10">
            <div className="btn-group">
              <button className="btn btn-lg btn-secondary" type="button">
                Clear
              </button>
              <button className="btn btn-lg btn-primary" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <ModalPopUP
        show={mymodal.show}
        handleClose={modalHandleClose}
        message={mymodal.message}
      />
    </div>
  );
}

const formatDate = (datestring) => {
  const today = new Date(datestring);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

const calculateAge = (birthdate) => {
  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const ModalPopUP = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
};

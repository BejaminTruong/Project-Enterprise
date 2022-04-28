import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Signup.module.css"
export default function Signup() {
  const [formValue, setFormValue] = useState(null);
  const [departmentList, setDepartmentList] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const formRef = useRef(null);
  useEffect(async () => {
    const departmentList = await axios.get("/api/departments");
    setDepartmentList(departmentList.data);
  }, []);
  useEffect(() => {
    console.log(avatar);
  }, [avatar]);

  const handleChange = (e) => {
    if (e.target.files) setAvatar(e.target.files[0]);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    if (e.target.name === "departmentId") {
      setFormValue({ ...formValue, [e.target.name]: +e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formValue) {
      formData.append(key, formValue[key]);
    }
    formData.append("avatar", avatar);
    await axios.post("/api/auth/signup", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("New User created!!!");
    formRef.current.reset();
  };
  return (
    <div className={`container ${styles.signUpContainer}`}>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="staffId" className="form-label">
            Staff ID:
          </label>
          <input
            type="text"
            className="form-control"
            name="staffId"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            Avatar:
          </label>
          <input
            type="file"
            className="form-control"
            name="avatar"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <select
            onChange={handleChange}
            name="departmentId"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue={""}>Choose a department</option>
            {departmentList.map((d, index) => {
              return (
                <option key={index} value={d.id}>
                  {d.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
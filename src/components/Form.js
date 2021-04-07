import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Form = () => {
  const {
    name,
    setName,
    age,
    setAge,
    post,
    setPost,
    salary,
    setSalary,
    country,
    setCountry,
    handleModal,
    handleAdd2db,
  } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd2db();
  };
  return (
    <div className="form">
      <button className="cancel" onClick={handleModal}>
        <FaTimes />
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          required
          type="number"
          value={age}
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="post">Post</label>
        <input
          required
          type="text"
          value={post}
          name="post"
          onChange={(e) => setPost(e.target.value)}
        />
        <label htmlFor="country">Country</label>
        <input
          required
          type="text"
          value={country}
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          required
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button className="add-btn" type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Form;

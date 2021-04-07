import React, { useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Form from "./Form";
const Home = () => {
  const {
    handleModal,
    show,
    employees,
    handleDelete,
    setName,
    setAge,
    setCountry,
    setPost,
    setSalary,
  } = useGlobalContext();
  return (
    <>
      <button className="add-employee" onClick={handleModal}>
        <p className="add-txt">Add</p>
        <FaPlus className="plus" />
      </button>
      <div className={`form-container ${show && "show-form-container"}`}>
        <Form />
      </div>
      <div className="employees">
        {employees.length
          ? employees.map((emp) => {
              var formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              });
              const sal = formatter.format(emp.salary);
              return (
                <div className="employee" key={emp.id}>
                  <h1 className="name">{emp.name}</h1>
                  <p className="sal">{sal}</p>
                  <p className="post">{emp.post}</p>
                  <button className="del" onClick={() => handleDelete(emp.id)}>
                    DELETE
                  </button>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Home;

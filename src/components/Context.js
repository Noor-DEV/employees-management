import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const Context = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState();
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([]);
  const base_url = "https://noor-emp-api.herokuapp.com/";

  useEffect(() => {
    fetch(`${base_url}/employees`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => console.log(err, "Error in fetching Employees F.E"));
  }, []);
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    fetch(`${base_url}/employees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  const handleAdd2db = () => {
    fetch(`${base_url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        post,
        country,
        salary,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees((prev) => [
          {
            id: toString(new Date().getTime()),
            name,
            age,
            post,
            country,
            salary,
          },
          ...prev,
        ]);
        handleModal();
        setName("");
        setAge("");
        setPost("");
        setSalary("");
        setCountry("");
        console.log(data, "dataAfterPost");
      })
      .catch((err) => console.log(err, "error in fetchpost"));
  };

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <AppContext.Provider
      value={{
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
        show,
        setShow,
        employees,
        handleModal,
        handleAdd2db,
        handleDelete,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Context;

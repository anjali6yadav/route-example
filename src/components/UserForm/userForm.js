import React, { useState } from "react";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pinCode: "",
  });

  const [item, setItem] = useState("");

  const [itemList, setItemList] = useState([]);

  const handleChange = (e, type) => {
    if (type === "name") {
      setUserData({ ...userData, name: e.target.value });
    } else if (type === "email") {
      setUserData({ ...userData, email: e.target.value });
    } else {
      setUserData({ ...userData, pinCode: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  const handleItemName = (e) => {
    setItem(e.target.value);
  };

  const handleItemList = () => {
    setItemList((prev) => [item, ...prev]);
    setItem("");
  };

  return (
    <div>
      UserForm
      <form autoComplete="off" onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => handleChange(e, "name")}
          value={userData.name}
        />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => handleChange(e, "email")}
          value={userData.email}
        />
        <input
          type="text"
          placeholder="Enter pin code "
          onChange={(e) => handleChange(e, "pincode")}
          value={userData.pinCode}
        />
        <button type="submit">submit</button>
      </form>
      Add the item in list and show the last added in top of list
      <input
        type="text"
        placeholder="Enter Item name "
        onChange={(e) => handleItemName(e)}
        value={item}
      />
      <button type="submit" onClick={handleItemList}>
        store item
      </button>
      {itemList.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default UserForm;

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const [userTitle, setUserTitle] = useState("");

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "body",
      headerName: "Body",
      width: 150,
      editable: true,
    },
    {
      field: "userId",
      headerName: "User Id",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
  ];

  useEffect(() => {
    getTableData();
    getUserData();
  }, []);

  const getTableData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  const getUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      /* headers: {
        "Content-type": "application/json; charset=UTF-8",
      }, */
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.id);
        setUserTitle(result.id);
      });
  };

  return (
    <div>
      <h1>fetch the data and display in table format using fetch method</h1>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <h1>fetch the individual user data using fetch method</h1>
      <h4>title is {userTitle}</h4>
    </div>
  );
};

export default Dashboard;

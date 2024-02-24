import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function About() {
  const [data, setData] = useState([]);

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
  }, []);

  const getTableData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      fetch data for user using axios method
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
    </div>
  );
}

export default About;

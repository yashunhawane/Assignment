import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Component2 from "./Component2";

interface ApiData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: false,
  },
  {
    field: "body",
    headerName: "Body",
    width: 400,
    editable: false,
  },
];

const Component1: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <>
      <center>
        <Box
          sx={{
            height: 500,
            width: 900,
            padding: 5,
          }}
        >
          <DataGrid
            rows={apiData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 50,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </center>
      <Component2 />
    </>
  );
};

export default Component1;

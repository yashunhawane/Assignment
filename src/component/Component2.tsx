import { Box } from "@mui/material";
import SubDepartment1 from "./SubDepartment1";
import SubDepartment2 from "./SubDepartment2";

const Component2: React.FC = () => {
  return (
    <Box
      sx={{
        width: 400,

        marginBottom: 20,
        border: "1px solid #ccc",
        borderRadius: "8px",

        padding: "16px",
      }}
    >
      <SubDepartment1 />
      <SubDepartment2 />
    </Box>
  );
};

export default Component2;

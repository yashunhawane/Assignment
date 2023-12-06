import { Box, Button, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
  });
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  //
  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      alert("Please fill in all fields");
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/Component1");
    }
  };
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "300px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <Typography variant="h5" component="div" align="center">
        Enter Detail
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter Name"
          type="text"
          name="name"
          sx={{ width: "300px", padding: "10px" }}
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          sx={{ width: "300px", padding: "10px" }}
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Enter Email"
          name="email"
          sx={{ width: "300px", padding: "10px" }}
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: "20px",
            backgroundColor: "#2B2B2B",
            color: "#D4D4D4",
          }}
        >
          Enter
        </Button>
      </form>
    </Box>
  );
};

export default Form;

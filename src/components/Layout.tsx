import "../App.scss";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Container className="authlayout-container">
      <Outlet />
    </Container>
  );
};

export default Layout;

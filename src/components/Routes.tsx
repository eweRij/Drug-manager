import { useRoutes } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Routes: React.FC = () => {
  const routes = useRoutes([ROUTES]);
  return routes;
};

export default Routes;

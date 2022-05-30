import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "./utils/hooks";
import Routes from "./components/Routes";
import { fetchUser, setLogged } from "./store/features/user/userSlice";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  const isLogged: string = useAppSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogged());
    dispatch(fetchUser(isLogged));
  }, []);

  return (
    <div>
      {isLogged && <Navigation></Navigation>}
      <Routes></Routes>
    </div>
  );
};

export default App;

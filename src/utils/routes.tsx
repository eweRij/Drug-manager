import DrugManager from "../components/DrugManager";
import Main from "../components/Main";
import Profile from "../components/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

export const ROUTES = {
  path: "/",
  element: (
    <>
      <Layout></Layout>
    </>
  ),
  children: [
    { path: "*", element: <div>No page is selected</div> },
    { path: "/", element: <SignIn></SignIn> },
    { path: "register", element: <SignUp></SignUp> },
    { path: "confirm/:confirmationCode", element: <Welcome></Welcome> },
    {
      path: "home",
      element: (
        <ProtectedRoute>
          <Main></Main>
        </ProtectedRoute>
      ),
    },
    {
      path: "drugManager",
      element: (
        <ProtectedRoute>
          <DrugManager></DrugManager>
        </ProtectedRoute>
      ),
    },
    {
      path: "profile",
      element: (
        <ProtectedRoute>
          <Profile></Profile>
        </ProtectedRoute>
      ),
    },
  ],
};

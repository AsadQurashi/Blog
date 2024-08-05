import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
// Dataprovider
import DataProvider from "./Context/Dataprovider";

// Components
import Login from "./component/account/login";
import CreatePost from "./component/Create/create_post";
import Header from "./component/Header/header";
import Home from "./component/Home/home";

const PrivateRoute = ({ isUserAuthenticated, ...props }) => {
  return isUserAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* Login or Home Page */}
            <Route
              path="/login"
              element={<Login setUserAuthenticated={setUserAuthenticated} />}
            />
            <Route
              path="/"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/" element={<Home />} />
            </Route>

            {/* Home Page Router */}
            <Route
              path="/"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

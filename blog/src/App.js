import { BrowserRouter, Outlet, Route, Routes , Navigate } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
// Dataprovider
import DataProvider from './Context/Dataprovider';

// Components
import Login from './component/account/login';
import Header from './component/Header/header';
import Home from './component/Home/home';
import CreatePost from './component/Create/create_post';

const PrivateRoute = ({ isUserAuthenticated , ...props }) =>
{
  return isUserAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
}
function App() {
  const [isUserAuthenticated , setUserAuthenticated] = useState(false)
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

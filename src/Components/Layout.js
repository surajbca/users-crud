import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid text-center">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link ">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/loginform" class="nav-link ">
                LoginForm
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/customform" class="nav-link ">
                CustomForm
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/VideoPlayer" class="nav-link ">
                VideoPlayer
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

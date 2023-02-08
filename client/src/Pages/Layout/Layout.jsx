import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">Employees</Link>
        </li>
        <li>
          <Link to="/create">
            <button type="button">Create Employee</button>
          </Link>
          <Link to="/equipment/create">
            <button type="button">Create Equipment</button>
          </Link>
          <Link to="/missing">
            <button type="button">Missing Employees</button>
          </Link>
          <Link to="/robert">
            <button type="button">Roberts</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;

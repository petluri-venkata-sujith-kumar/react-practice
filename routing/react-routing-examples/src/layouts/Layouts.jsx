import { Link, Outlet } from "react-router-dom";

const Layouts = () => {
  const users = [
    {
      id: 1,
      name: "shashi",
      company: "qspiders",
    },
    {
      id: 2,
      name: "dixith",
      company: "jspiders",
    },
    {
      id: 3,
      name: "sujith",
      company: "fireflink",
    },
  ];
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/users">
          {users.map((user) => {
            return (
              <>
                <li>
                  <Link to={`/${user.name}`}> {user.name}</Link>
                </li>
              </>
            );
          })}
        </Link>
      </li>
      <hr />
      {<Outlet />}
    </ul>
  );
};

export default Layouts;

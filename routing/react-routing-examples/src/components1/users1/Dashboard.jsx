import { NavLink, Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <h1>DASHBOARD</h1>
        <main className='dashboard-content'>
          <ul>
            <li>
              <NavLink to="/allusers" className={({isActive}) => (isActive ?"active":"")}>USERS</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({isActive}) => (isActive ?"active":"")}>PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/players" className={({isActive}) => (isActive ?"active":"")}>PLAYERS</NavLink>
            </li>
          </ul>
        </main>
        <Outlet/>
    </div>
  )
}

export default Dashboard
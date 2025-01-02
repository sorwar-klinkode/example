import { Link, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {


    return (
        <div className='bg-slate-100'>
            <ui-title-bar title="Products">
                <button onclick="console.log('Secondary action')">Secondary action</button>
                <button variant="primary" onclick="console.log('Primary action')">
                    Primary action
                </button>
            </ui-title-bar>

            <ui-nav-menu>
                <Link to="/">Booked List</Link>
                <Link to="/booking-service">Booking</Link>
            </ui-nav-menu>

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
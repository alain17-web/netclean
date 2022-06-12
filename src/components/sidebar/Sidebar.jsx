

import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration:"none"}}>
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration:"none"}}>
                    <li>
                        <SupervisedUserCircleIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration:"none"}}>
                    <li>
                        <InventoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SystemSecurityUpdateWarningIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <ManageSearchIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>

            </div>
        </div>
    )
}

export default Sidebar
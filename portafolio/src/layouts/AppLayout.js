import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/core/NavigationBar";
import MyFooter from "../pages/core/Footer";

export default function AppLayout() {
    return (
        <div className="fondo">
            <NavigationBar />
            <Outlet />
            <MyFooter />
        </div>
    )
}
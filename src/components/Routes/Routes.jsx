import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
//utils
import { PATHS } from '../utils/strings';

//screens
import LoginScreen from '../UI/Screens/LoginScreen/LoginScreen';
import Dashboard from '../UI/Screens/Dashboard/Dashboard';
import AlbumScreen from "../UI/Screens/AlbumsScreen/AlbumScreen";
import AboutScreen from "../UI/Screens/AboutScreen/AboutScreen";

//components
import Navbar from '../UI/UIComponents/NavBar/Navbar';

const RouterRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={PATHS.DASHBOARD}  element={<LayoutComponent><Dashboard/></LayoutComponent>} />
                    <Route path={PATHS.ALBUMS}  element={<LayoutComponent><AlbumScreen/></LayoutComponent>} />
                    <Route path={PATHS.ABOUT}  element={<LayoutComponent><AboutScreen/></LayoutComponent>} />
                </Route>
                <Route path={PATHS.LOGIN} element={<LayoutComponent navbarType={0}><LoginScreen /></LayoutComponent>} />
            </Routes>
        </BrowserRouter>
    )
}

const LayoutComponent = ({ children, navbarType = 1 }) => {
    return (
        <>
            <Navbar type={navbarType} />
            {children}
        </>
    )
}

export default RouterRoutes;
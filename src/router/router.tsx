import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../components/pages/LayoutPage";
import LoginPage from "../components/pages/LoginPage";
import LogoutPage from "../components/pages/LogoutPage";
import CustomersPage from "../components/pages/CustomersPage";
import AlbumsPage from "../components/pages/AlbumsPage";
import PlaylistsPage from "../components/pages/PlaylistsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        children: [
            {path: "login", element: <LoginPage/>},
            {path: "logout", element: <LogoutPage/>},
            {path: "customers", element: <CustomersPage/>},
            {path: "albums", element: <AlbumsPage/>},
            {path: "playlists", element: <PlaylistsPage/>}
        ]
    }
]);

export default router;
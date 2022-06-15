
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {FC} from "react";
import {publicRoutes} from "./index";

const prefix = "/token"
const AppRouter: FC = () => {
    return <BrowserRouter>
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={prefix+route.path} element={route.element}  key={route.path} />
                ))}
            </Routes>
        </BrowserRouter>
};

export default AppRouter;
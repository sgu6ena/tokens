import React from "react";
import {RouteNames} from "../../common/variables/RouteNames";
import Home from "../../pages/home/Home";
import Documents from "../../pages/documents/Documents";
import Downloads from "../../pages/downloads/Downloads";


export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.DOCUMENTS, element: <Documents/>},
    {path: RouteNames.DOWNLOADS, element: <Downloads/>},
    {path:'/tokens', element:<Home/>}
];

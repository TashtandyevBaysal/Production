import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import RequierAuth from "./RequierAuth";
import { AppRouteProps, routerConfig } from "../config/routerConfig";

const AppRouter = () => {
    
    const render = useCallback((route: AppRouteProps) => {
        
        const { path, element, authOnly } = route; 

        return (
            <Route 
                path={route.path}
                element={
                    authOnly 
                        ? <RequierAuth>{element}</RequierAuth> 
                        : element
                }
            />
        );
    }, []);
    
    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;
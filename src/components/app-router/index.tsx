

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from '../../const/routes';
import { userState } from '../../state/user/auth-user-atom';




const AppRouter = () => {
    const authUser = useRecoilValue(userState);

    const getRouter = React.useCallback(() => {
        if (authUser) {
            return PRIVATE_ROUTER
        } else {
            return PUBLIC_ROUTER
        }
    }, [authUser])


    return <RouterProvider router={getRouter()} />
};



export default AppRouter;
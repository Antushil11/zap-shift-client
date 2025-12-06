import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
import useRole from '../hooks/useRole';


const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const {role, roleLoading} = useRole()

    if(loading || !user || roleLoading){
        return <Loading></Loading>
    }

    if(role !== 'admin'){
        return <Forbidden></Forbidden>
    }


    return children;
};

export default AdminRoute;
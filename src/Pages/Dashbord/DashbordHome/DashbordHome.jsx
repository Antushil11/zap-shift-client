import React from 'react';
import useRole from '../../../hooks/useRole';
import Loading from '../../../components/Loading/Loading';
import AdminDashBordHomepage from './AdminDashBordHomepage';
import RiderDashBordHomepage from './RiderDashBordHomepage';
import UserDashBordHomepage from './UserDashBordHomepage';

const DashbordHome = () => {
    const {role, roleLoading} = useRole();
    if(roleLoading){
        return <Loading></Loading>
    }
    if(role === 'admin'){
        return <AdminDashBordHomepage></AdminDashBordHomepage>
    }
    else if(role === 'rider'){
        return <RiderDashBordHomepage></RiderDashBordHomepage>
    }
    else{
        return  <UserDashBordHomepage></UserDashBordHomepage>
    }
    
};

export default DashbordHome;
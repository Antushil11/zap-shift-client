import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../Pages/Dashbord/MyParcels/MyParcels";
import Payment from "../Pages/Dashbord/Payment/Payment";
import PaymentSuccess from "../Pages/Dashbord/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashbord/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashbord/PaymentHistory/PaymentHistory";
import ApprovedRiders from "../Pages/Dashbord/ApprovedRiders/ApprovedRiders";
import UsersManagement from "../Pages/Dashbord/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../Pages/Dashbord/AssignRiders/AssignRiders";

import AssigentDeliveries from "../Pages/Dashbord/AssigentDeliveries/AssigentDeliveries";
import RiderRoute from "./RiderRoute";
import CompletedDeliveres from "../Pages/Dashbord/CompletedDeliveres/CompletedDeliveres";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader:() => fetch('/serviceCenters.json').then(res => res.json())

      },
      {
          path:"/send-parcel",
          element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
          loader:() => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path:"/coverage",
        Component: Coverage,
        loader:() => fetch('/serviceCenters.json').then(res => res.json())
      },
    ],
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path: '/login',
        Component: Login
      },
      {
        path:'/register',
        Component: Register
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path:'my-parcels',
        element: <MyParcels></MyParcels>
      },
      {
        path: 'payment/:parcelId',
        element: <Payment></Payment>
      },
      {
        path:"payment-history",
        element: <PaymentHistory></PaymentHistory>

      },
      {
        path:'payment-success',
        Component: PaymentSuccess,
      },
      {
        path:'payment-cancelled',
        Component: PaymentCancelled
      },

      //rider only routes
      {
        path:'assigned-deliveries',            
        element:<RiderRoute><AssigentDeliveries></AssigentDeliveries></RiderRoute>
      },
      {
        path:'completed-deliveries',            
        element:<RiderRoute><CompletedDeliveres></CompletedDeliveres></RiderRoute>
      },


      // admin only routes
      {
        path:'approve-riders',            
        element: <AdminRoute><ApprovedRiders></ApprovedRiders></AdminRoute>
      },
      {
        path:'assign-riders',            
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      },
      {
        path:'users-management',       
        element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
      },
    ]
  }
]);

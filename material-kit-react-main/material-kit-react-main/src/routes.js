import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Salesorders from 'src/pages/Salesorders';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Salesdetails from 'src/pages/Salesdetails';
import Addsalesorder from 'src/pages/Addsalesorder';
import Updatesalesorder from 'src/pages/Updatesalesorder';
import Addsalesdetail from 'src/pages/Addsalesdetail';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'salesorders', element: <Salesorders /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'salesdetails', element: <Salesdetails /> },
      { path: 'settings', element: <Settings /> },
      { path: 'Addsalesorder', element: <Addsalesorder /> },
      { path: 'Updatesalesorder', element: <Updatesalesorder /> },
      { path: 'Addsalesdetail', element: <Addsalesdetail /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

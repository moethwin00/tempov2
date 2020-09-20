import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import Users from '../components/Users';

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
  },
  {
    path: '/profile',
    component: Profile,
    name: 'profile',
  },
  {
    path: '/users',
    component: Users,
    name: 'users',
  },
]
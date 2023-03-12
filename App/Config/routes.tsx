import Dashboard from 'public/Assets/Svgs/dashboard.svg'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CategoryIcon from '@mui/icons-material/Category';

const sidebarRoutes = [
    {
        type: "menu-item",
        displayName: "Dashboard",
        icon:
            <Dashboard
                width={22}
                height={22}
            />
        ,
        path: '/'
    },
    {
        type: "menu-item",
        displayName: "Car",
        icon:
            <DirectionsCarIcon
                fontSize="medium"
            />
        ,
        path: '/car'
    },
]

export {
    sidebarRoutes,
};


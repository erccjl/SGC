import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { routes } from '../constants/routes'

const items = [
    {
        name: 'Home',
        icon: <HomeIcon />,
        path: routes.HOME
    },
    {
        name: 'Consorcios',
        icon: <LocationCityIcon />,
        path: routes.CONSORCIOS
    }
];

const StyledListItemButton = styled(ListItemButton, { shouldForwardProp: (prop) => prop !== 'isActive' })(
    ({ theme, isActive }) => ({
        backgroundColor: isActive ? theme.palette.action.selected : 'inherit',
        borderRadius: '8px',
    }),
);


const Menu = () => {
    const location = useLocation();

    const getMenu = (item, index) => {
        const isActive = location.pathname === item.path;
        return (
            <ListItem key={index} disablePadding>
                <StyledListItemButton component={NavLink}
                    to={item.path}
                    isActive={isActive}
                    activeclassname="active-link">
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </StyledListItemButton>
            </ListItem>)
    }
    return (<>
        <Divider />
        <List>
            {items.map((item, index) => (
                getMenu(item, index)
            ))}
        </List>
    </>);
}

export default Menu;
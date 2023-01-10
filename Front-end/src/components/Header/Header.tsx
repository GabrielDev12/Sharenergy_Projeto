import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Menu, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { isAuthenticated, signOut } from "../../Apis/auth";

interface Props {

    window?: () => Window;
}


const drawerWidth = 240;
const navItems = [
    { label: 'Random User', to: '/RandomUser' },
    { label: 'HTTP Cat', to: '/CAT' },
    { label: 'Random Dogs', to: '/Dogs' },
    { label: 'Users', to: '/Users' }
];

export default function DrawerAppBar(props: Props) {
    let isLogged = isAuthenticated()
    let loggout = ()=>{
        signOut()
        location.reload()
    }
    const navigate = useNavigate()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Sharenergy
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={e => navigate(item.to)}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {isLogged &&
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={loggout}>
                            <ListItemText primary={'Sair'} />
                        </ListItemButton>
                    </ListItem>
                }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Sharenergy
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.label} onClick={e => navigate(item.to)} sx={{ color: '#fff' }}>
                                {item.label}
                            </Button>
                        ))}
                        {isLogged &&
                            <Button onClick={loggout} sx={{ color: '#fff' }}>
                                <Logout />
                            </Button>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
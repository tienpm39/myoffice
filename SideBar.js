import React from 'react';
import {
    Typography,
    Drawer,
    Paper,
    MenuList,
    MenuItem,
    ListItemIcon,
    useMediaQuery,
    useTheme,
    makeStyles,
} from '@material-ui/core';
import HeaderWrapper from './Sidebar.styles';
import { RiPieChart2Line } from 'react-icons/ri';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 265,
        [theme.breakpoints.up('1200')]: {
            position: 'fixed',
            top: 100,
            left: 30,
            borderRadius: 9,
            height: 'calc(100vh - 130px)',
            overflowY: 'auto',
            boxShadow: 'none',
        }
    },
    scrollbar: {
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "100%",
        '&::-webkit-scrollbar': {
            width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-track:hover': {
            backgroundColor: '#eee'
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(0,0,0,.3)',
        },
    },
    selected: {
        borderRadius: 9,
        padding: '12px 16px',
        margin: '0px 0px 8px',
        "&.Mui-selected": {
            backgroundColor: "orange",
            color: 'white'
        }
    },
    activeIcon: {
        color: "white",
        minWidth: 40
    },
    inActiveIcon: {
        minWidth: 40
    },
    icon: {
        width: 20,
        height: 20
    }
}))

export default function Sidebar({ open, handleOpen, window }) {
    const classes = useStyles();
    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.down('1200'));
    const mb = useMediaQuery(theme.breakpoints.up('1200'));

    const drawer = (
        <Paper elevation={0} className={classes.scrollbar}>
            <HeaderWrapper>
                <MenuList className={classes.container} autoFocusItem={true}>
                    <Typography variant='h6'>DASHBOARDS</Typography>
                    <MenuItem selected className={classes.selected}
                    >
                        <ListItemIcon className={classes.activeIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        <Typography> Analytical</Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        eCommerce
                    </MenuItem>
                    <Typography variant='h6'>OPERATION</Typography>
                    <MenuItem className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        <Typography> Tour</Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        Visa
                    </MenuItem>
                    <MenuItem className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        <Typography> Hotel</Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        Tickets
                    </MenuItem>
                    <Typography variant='h6'>REPORT</Typography>
                    <MenuItem className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        <Typography> Tour</Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        Visa
                    </MenuItem>
                    <MenuItem className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        <Typography> Hotel</Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.selected}
                    >
                        <ListItemIcon className={classes.inActiveIcon}>
                            <RiPieChart2Line className={classes.icon} />
                        </ListItemIcon>
                        Tickets
                    </MenuItem>
                </MenuList>
            </HeaderWrapper>
        </Paper>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <nav>
            {pc &&
                <Drawer
                    container={container}
                    variant="temporary"
                    // BackdropProps={{ invisible: true }}
                    anchor='left'
                    open={open}
                    onClose={handleOpen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            }
            {mb && 
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
           }
        </nav>
    )
}


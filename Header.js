import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    makeStyles,
    Divider,
    Badge,
    Avatar,
} from '@material-ui/core';
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line, RiChat3Line, RiArrowDownSLine } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import Search from '../Search/Search';
import BootstrapButton from '../Button/BootstrapButton';
import Cart from '../Cart/Cart';
import Message from '../Notifycation/Message';
import Notify from '../Notifycation/Notify';
import UserInfo from '../Authentication/UserInfo';
import Sidebar from './SideBar';
import DashBoard from '../../pages/Dashboard/Dashboard';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        color: 'black'
    },
    toolbar: {
        backgroundColor: 'white'
    },
    menu: {
        marginLeft: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(18),
        }
    },
    search: {
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
        }
    },
    sectionDesktops: {
        display: 'flex',
    },
    divider: {
        height: 30,
        marginTop: theme.spacing(1)
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: theme.spacing(1)
    },
    user: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    content: {
        [theme.breakpoints.up('1200')]: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -28,
        }
    },
    contentShift: {
        [theme.breakpoints.up('1200')]: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 265,
        }
    },
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);
    const [showPopMessage, setShowPopMessage] = useState(null);
    const [showPopNotify, setShowPopNotify] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(null);

    //search open
    const handleOpenToggle = () => setOpen(!open);

    //side bar toggle
    const handleOpenSidebar = () => setOpenSideBar(!openSideBar);

    //cart open
    const handleOpenCart = () => setOpenCart(!openCart)

    //popover Message
    const handleOpenMessage = event => setShowPopMessage(event.currentTarget);
    const handleCloseMessage = () => setShowPopMessage(null);
    const openPopMessage = Boolean(showPopMessage);
    const id = openPopMessage ? 'popover-message' : undefined;

    //popover Notify
    const handleOpenNotify = event => setShowPopNotify(event.currentTarget)
    const handleCloseNotify = () => setShowPopNotify(null);
    const openPopNotify = Boolean(showPopNotify);
    const id1 = openPopNotify ? 'popover-notify' : undefined;

    //show user menu
    const handleShowMenu = event => setShowUserMenu(event.currentTarget);
    const handleCloseMenu = () => setShowUserMenu(null);
    const openMenu = Boolean(showUserMenu);
    const uid = openMenu ? 'popover-user' : undefined;

    return (
        <Box className={classes.grow}>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        className={classes.title}
                    >
                        TripFinder
                    </Typography>
                    <IconButton
                        aria-label='menu'
                        edge='start'
                        className={classes.menu}
                        onClick={handleOpenSidebar}
                    >
                        <IoIosMenu />
                    </IconButton>
                    <Sidebar
                        open={openSideBar}
                        handleOpen={handleOpenSidebar}
                    />
                    <IconButton
                        aria-label='search'
                        edge='start'
                        onClick={handleOpenToggle}
                        className={classes.search}
                    >
                        <IoIosSearch />
                    </IconButton>
                    <Search
                        open={open}
                        handleOpenToggle={handleOpenToggle}
                    />
                    <Box className={classes.grow} />
                    <Box className={classes.sectionDesktops}>
                        <IconButton
                            aria-label='cart'
                            onClick={handleOpenCart}
                        >
                            <RiShoppingCart2Line />
                        </IconButton>
                        <Cart
                            open={openCart}
                            handleOpen={handleOpenCart}
                        />
                        <IconButton
                            aria-describedby={id}
                            aria-label='message'
                            onClick={handleOpenMessage}
                        >
                            <Badge color="error" variant="dot">
                                <RiChat3Line />
                            </Badge>
                        </IconButton>
                        <Message
                            id={id}
                            open={openPopMessage}
                            anchorEl={showPopMessage}
                            handleClose={handleCloseMessage}
                        />
                        <IconButton
                            aria-label='notification'
                            aria-describedby={id1}
                            edge='end'
                            onClick={handleOpenNotify}
                        >
                            <Badge color="secondary" variant="dot">
                                <FaRegBell />
                            </Badge>
                        </IconButton>
                        <Notify
                            id={id1}
                            open={openPopNotify}
                            anchorEl={showPopNotify}
                            handleClose={handleCloseNotify}
                        />
                        <Divider orientation='vertical' flexItem variant='middle' className={classes.divider} />
                        <BootstrapButton
                            variant='text'
                            startIcon={<Avatar className={classes.small} >R</Avatar>}
                            endIcon={<RiArrowDownSLine className={classes.user} />}
                            onClick={handleShowMenu}
                        >
                            <Typography component='div' className={classes.user}>
                                <Box fontWeight='bold'> Romeo</Box>
                            </Typography>
                        </BootstrapButton>
                        <UserInfo
                            id={uid}
                            open={openMenu}
                            anchorEl={showUserMenu}
                            handleClose={handleCloseMenu}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <main className={clsx(classes.content, {
                [classes.contentShift]: openSideBar,
            })}>
                <DashBoard />
            </main>
        </Box>
    )
}

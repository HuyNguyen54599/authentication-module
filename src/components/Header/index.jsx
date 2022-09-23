import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function ButtonAppBar() {
    const activeClassName = ({ isActive }) => {
        return isActive ? 'header-link header-link-active' : 'header-link';
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const disableBackdropClick = (reason) => {
    //     if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
    //         setOpen(false);
    //     }
    // };

    return (
        <header className="header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News Shop
                        </Typography>
                        <NavLink to="/todos" className={activeClassName}>
                            <Button color="inherit">Todos</Button>
                        </NavLink>
                        <NavLink to="/albums" className={activeClassName}>
                            <Button color="inherit">Albums</Button>
                        </NavLink>
                        <Button color="inherit" onClick={handleClickOpen}>
                            Register
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog open={open} onClose={handleClose} disableEscapeKeyDown={true} /*onClose={disableBackdropClick}*/>
                <DialogTitle>Form Here</DialogTitle>
                <DialogContent>
                    <DialogContentText>Register</DialogContentText>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </header>
    );
}

import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import { List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { Logout, SupervisedUserCircle, VerifiedUser } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));
const SideBar = ({ handleDrawerClose, open, drawerWidth, handleLogOut }) => {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                border: 0
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_5_10)">
                        <path d="M8 12.2319L22.1933 11.9591L28.5316 0L29.8531 14.1478L40.7635 20.5316L27.5732 22.1267L20.2319 32.7635L19.9134 19.938L8 12.2319Z" fill="#21978B" />
                        <path d="M28.5194 29.2277L34.1313 29.1198L36.6374 24.3913L37.1599 29.9852L41.4737 32.5093L36.2584 33.14L33.3557 37.3456L33.2298 32.2746L28.5194 29.2277Z" fill="url(#paint0_linear_5_10)" />
                        <path d="M0 19.8363L5.61186 19.7284L8.11794 15L8.64045 20.5938L12.9543 23.1179L7.739 23.7486L4.83633 27.9543L4.71042 22.8832L0 19.8363Z" fill="url(#paint1_linear_5_10)" />
                    </g>
                    <defs>
                        <filter id="filter0_i_5_10" x="0" y="0" width="41.4737" height="41.3457" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_10" />
                        </filter>
                        <linearGradient id="paint0_linear_5_10" x1="20.7368" y1="0" x2="20.7368" y2="37.3456" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#01211E" />
                            <stop offset="1" stopColor="#0D4833" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_5_10" x1="4.05897" y1="17.4183" x2="8.89531" y2="25.5362" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#21978B" />
                            <stop offset="1" stopColor="#000905" />
                        </linearGradient>
                    </defs>
                </svg>
                <Typography sx={{ fontWeight: 'bold', mx: 3 }} variant="h4">Auth</Typography>
            </DrawerHeader>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem component={Link} to={`/${text}`} key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <VerifiedUser /> : <SupervisedUserCircle />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <ListItem component='button' onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;
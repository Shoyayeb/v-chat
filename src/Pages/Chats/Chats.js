
import { Box, Paper } from '@mui/material';
import React from 'react';

const Chats = (drawerWidth, open) => {

    return (
        <Paper sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, width: "100%", height: "100vh", ml: drawerWidth }} style={{ background: "#E9E9E9" }}>
            <Box sx={{ my: "auto", ml: { md: 20, xs: 5 }, width: 3 / 4, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <input type="text" />
                <button>Send Message</button>
                <div>
                    <h1>Message</h1>
                </div>
            </Box>
        </Paper>
    );
};

export default Chats;
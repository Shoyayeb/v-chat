import styled from '@emotion/styled';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = ({ token, setToken, handleLogin }) => {

    const GenerateButton = styled(Button)(({ theme }) => ({
        color: "white",
        textTransform: 'none',
        backgroundColor: "#21978B",
        '&:hover': {
            backgroundColor: "#21978B",
        },
    }));

    return (
        <Paper sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, width: "100%", height: "100vh", m: 0 }} style={{ background: "#E9E9E9" }}>
            {/* <SideBar /> */}
            <Box sx={{ my: "auto", ml: { md: 20, xs: 5 }, width: 3 / 4, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography sx={{ fontWeight: 'bold', mx: 0, fontFamily: "Inter" }} variant="h4">Enter Your Token</Typography>
                <TextField
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    sx={{ width: 3 / 4, my: 3, backgroundColor: "#ffff", border: 1, borderRadius: 1, borderColor: "#11cb5f" }}
                    size="small"
                    variant='outlined'
                    aria-readonly
                    color="success"
                />
                <GenerateButton variant="contained" sx={{ display: "flex", flexDirection: "column", fontFamily: "Inter", borderRadius: 10, px: 4 }} color="success" className='generateButton' onClick={handleLogin}>
                    Login
                </GenerateButton>
            </Box>
        </Paper>
    );
};

export default Login;
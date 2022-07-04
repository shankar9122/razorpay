import { Button, Grid, Typography } from '@mui/material'
import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom"


const PaymentSuccess = () => {

    const navigate = useNavigate();
    const searchQuery = useSearchParams()[0];
    console.log(searchQuery)

    const refrenceNum = searchQuery.get("reference")

    return (
        <>
            <Grid container justifyContent={"center"} alignItems={"Center"} height="100Vh" direction={"column"}>
                <Grid item sm={3}>
                    <Typography variant='h5'>Payment Success</Typography>
                    <Typography variant='body2'>Refrence No. {refrenceNum}</Typography>
                </Grid>
                <Grid item sm={3}>
                    <Button onClick={() => navigate("/")} variant="contained" color="secondary">Go To Home Page</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default PaymentSuccess
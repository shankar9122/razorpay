import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Card = ({ amount, img, handleCheckout }) => {
    return (
        <>
            <Grid item
                container
                justifyContent="center"
                alignItems={"center"}
                spacing={2}
                direction="column"
                sm={2}>
                <img src={img} alt="img" style={{ objectFit: "cover", maxWidth: "100%" }} />
                <Typography variant='body2' padding={"15px"}>{amount}</Typography>
                <Button variant='contained' color='primary' onClick={() => handleCheckout(amount)}>Buy Now</Button>
            </Grid>
        </>
    )
}

export default Card
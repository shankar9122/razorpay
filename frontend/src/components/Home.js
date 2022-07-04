import { Grid } from '@mui/material'
import React from 'react'
import Card from './Card'

const Home = () => {


    const handleCheckout = async(amount) => {

        let keydata = await fetch("http://localhost:4040/api/v1/getkey");
        keydata = await keydata.json()

        fetch("http://localhost:4040/api/v1/checkout", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                amount
            })
        }).then(resp => resp.json())
            .then(data => {

                var options = {
                    key: keydata.key,
                    amount: data.order.amount,
                    currency: "INR",
                    name: "Ahir Shankar",
                    description: "Test Transaction",
                    image: "https://avatars.githubusercontent.com/u/78684673?s=400&u=1dad0a8e55943005b8abd43895252fd7e0b444ea&v=4",
                    order_id: data.order.id,
                    callback_url: "http://localhost:4040/api/v1/paymentVerification",
                    prefill: {
                        name: "Gaurav Kumar",
                        email: "gaurav.kumar@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        address: "Razorpay Corporate Office"
                    },
                    theme: {
                        color: "#381919"
                    }
                };
                const razor = new window.Razorpay(options);
               
                razor.open();
            })
    }

    return (
        <>
            <Grid container direction={"row"} height={"100vh"} justifyContent="center" alignItems="center" padding={"20px"} spacing={4}>
                <Card
                    amount={3000}
                    img={"https://m.media-amazon.com/images/I/81upmtX7l4L._SX569_.jpg"}
                    handleCheckout={handleCheckout}
                />
                <Card
                    amount={2000}
                    img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"}
                    handleCheckout={handleCheckout}
                />
            </Grid>
        </>
    )
}

export default Home
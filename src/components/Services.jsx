import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./../style.css"
import img1 from "./../assets/images/re.png"
import img2 from "./../assets/images/infra.png"
import img3 from "./../assets/images/trans.png"
import img4 from "./../assets/images/suppliers.png"
import img5 from "./../assets/images/consultants.png"
import img6 from "./../assets/images/industry.png"




export default function Services() {
    const serviceDetails = [
        {
            img: img1,
            title: "REAL ESTATE"
        },
        {
            img: img2,
            title: "INFRA AND ROADS"
        },
        {
            img: img3,
            title: "TRANSPORTERS"
        },
        {
            img: img4,
            title: "SUPPLIERS"
        },
        {
            img: img5,
            title: "CONSULTANTS"
        },
        {
            img: img6,
            title: "INDUSTRY"
        },
    ]
    const result = serviceDetails.map(item => <>
        <Grid item xs={6} sm={4} md={2} spacing={3}  >
            <img src={item.img} style={{ maxWidth: "8vw" }} alt="" />
            <Typography color="#FFFFFF" sx={{ marginBottom: "2px", marginTop: "4px" }}>{item.title}</Typography>
        </Grid>
    </>
    )
    return <>
        <Grid container className='service'>
            {result}
        </Grid>

    </>
}

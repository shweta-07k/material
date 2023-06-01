import { Box, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import group1 from "./../assets/images/Group 1558.png"
import group2 from "./../assets/images/Group 1547.png"
import group3 from "./../assets/images/Group 1551.png"
import group4 from "./../assets/images/Group 1554.png"
import group5 from "./../assets/images/Group 1543.png"
import group6 from "./../assets/images/Group 1550.png"




export default function Key() {
    const card = [
        { img: group1, title: "Get noticed by right customer", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: group2, title: "Get noticed by right customer", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: group3, title: "Increase chances of deal closure", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: group4, title: "Profile visitors analytics", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: group5, title: "Technology trends of industry", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
        { img: group6, title: "Search analytics", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perferendis voluptates optio, dolores nam aut libero recusandae consequuntur veniam quidem." },
    ]
    const cardContent = card.map((item, i) => <Grid item xs={12} sm={4}  >

        <Box sx={{ marginLeft: "40px", textAlign: "center", maxWidth: 350, backgroundColor: "transparent", color: "#eee", marginTop: "60px", marginBottom: "42px" }} >
            <Box
                sx={{ textAlign: "center", padding: "1rem" }}
            >
                <img src={item.img} alt="" />

            </Box>
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "18px", fontWeight: "500px" }}>
                        {item.title}
                    </Typography>
                </Stack>
                <Typography variant="body2" color="#ccc">
                    {item.desc}
                </Typography>
            </CardContent>

        </Box>
    </Grid>)
    return <>

        <div style={{ backgroundColor: "#2B2B2B" }}>
            <Stack

                direction="row"
                justifyContent="center"
                sx={{ paddingTop: "69px" }}>
                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "600px", lineHeight: "28.13px" }}>Our Key Value</Typography>
            </Stack>

            <Grid container sx={{ textAlign: "center", padding: "0 50px" }} >
                {cardContent}
            </Grid>


        </div>
    </>
}

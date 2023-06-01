import { Avatar, CardMedia, Paper, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Unstable_Grid2';
export default function CustomerFeedback() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    )
    const carousel = [
        [{
            img: "https://mui.com/static/images/avatar/1.jpg",
            desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                    -Kate software Engineer"
        },
        {
            img: "https://mui.com/static/images/avatar/1.jpg",
            desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                    -Kate software Engineer"
        },
        {
            img: "https://mui.com/static/images/avatar/1.jpg",
            desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                    -Rahul "
        }
        ],
        [
            {
                img: "https://mui.com/static/images/avatar/1.jpg",
                desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                    -Rahul "
            },
            {
                img: "https://mui.com/static/images/avatar/1.jpg",
                desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                     -Kate software Engineer"
            },
            {
                img: "https://mui.com/static/images/avatar/1.jpg",
                desc: "Amazing product and company Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec,pellentesque.                      -Rahul "
            }
        ]
    ]
    const card = <Carousel>
        {

            carousel.map((arr, i) => {
                return <Grid container spacing={2} >
                    {arr.map((item, i) => <Grid md={4}>
                        <Stack direction="row" marginTop={4} >
                            <Card sx={{ backgroundColor: "#46B19D", padding: "4em" }}>
                                <Avatar alt="Remy Sharp" sx={{ marginY: "20px" }} src={item.img} />
                                <Typography variant='body2' fontWeight={2}>{item.desc}</Typography>
                            </Card>
                        </Stack>
                    </Grid>)}
                </Grid>
            }

            )
        }
    </Carousel >


    return <>
        <Typography sx={{ fontWeight: 'bold' }} fontSize={40} marginTop={10} textAlign="center">Customer Feedback</Typography>
        <Box sx={{ paddingX: "3rem" }}>{card}</Box>
        <div style={{ height: "500px" }}></div>

    </>
}
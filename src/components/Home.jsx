import React from 'react'
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, Input, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./../style.css"
import Services from './Services';


const Home = () => {

    return <>
        <div className='bg-img' >
            <Stack
                direction="row"
                justifyContent="end"
                sx={{ marginX: "auto", width: "80%", pt: "20px" }}>
                <Button spacing={2} sx={{ borderRadius: 6, backgroundColor: "#46B19D" }} variant="contained" disableElevation><PersonSharpIcon />LOG IN</Button>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "80%", marginTop: "4rem" }}>
                <Stack sx={{ width: "60%" }}>

                    <Typography sx={{ marginX: "auto", marginBottom: "10px", color: "#fff", fontSize: "25px", fontWeight: "bold" }}>Search Engines Of Construction Industry</Typography>

                    <Box sx={{ position: "relative", }}>
                        <TextField className="inputRounded" sx={{
                            color: "white",
                            width: "100%",
                            // backgroundColor: "white",
                            border: "none",
                            outline: "none"
                        }} label="" />

                        <IconButton sx={{
                            position: "absolute",
                            right: "10px",
                            top: "10%",
                            backgroundColor: "#46B19D"
                        }}
                            variant="contained" >
                            <SearchRoundedIcon />
                        </IconButton>
                    </Box>

                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={1}
                    spacing={2}
                    marginX="auto"

                >
                    <Typography sx={{ fontSize: "15px", color: "white" }} >Search By:</Typography>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            size="small"
                            sx={{
                                color: "white",

                            }}
                        >
                            <FormControlLabel value="female" control={<Radio size="small" color="success" sx={{
                                color: "white",
                            }} />} label="Company Name" />
                            <FormControlLabel value="male" control={<Radio size="small" color="success" sx={{
                                color: "white",
                            }} />} label="Product/Services Name" />
                            <FormControlLabel value="other" control={<Radio size="small" color="success" sx={{
                                color: "white",
                            }} />} label="All Profile" />

                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Services />
            </Stack>


        </div>
    </>
}

export default Home

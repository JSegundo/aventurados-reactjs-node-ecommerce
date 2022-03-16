import { useSelect } from "@mui/base"
import {
  Button,
  Grid,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from "@mui/system"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SingleView = () => {
  const data = useSelector((state) => state.dataCard)

  const navigate = useNavigate()

  useEffect(() => {
    if (!data.id) {
      navigate("/")
    }
  }, [data])

  return (
    <Grid
      container
      spacing={5}
      paddingX={6}
      paddingTop={6}
      sx={{ height: "77vh" }}
    >
      <Grid item xs={6}>
        <Grid content>
          <Grid item xs={12}>
            <ImageListItem>
              <img src={`${data.image}`} />
            </ImageListItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container paddingTop={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid content>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1>{data.name}</h1>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            paddingBottom={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack  paddingBottom={3}>
              <Rating
                name="half-rating-read"
                defaultValue={data.rating}
                precision={0.5}
                readOnly
                size="large"
              />
            </Stack>

            <Typography
              sx={{ flexGrow: 1 }}
              gutterBottom
              variant="h4"
              component="div"
            >
              ${data.price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h3>
                {data.description}
              </h3>
            </Box>
          </Grid>
          <Grid item xs={12} paddingTop={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                  <Button sx= {{bgcolor: '#DBF227', color:'black', borderRadius: '20px'}} endIcon={<FavoriteBorderIcon sx= {{color:'black'}} />} variant="contained">favoritos</Button>

                  </Box>
                  <Box>
                  <Button sx= {{bgcolor: '#DBF227', color:'black', borderRadius: '20px'}} endIcon={<ShoppingCartIcon sx= {{color:'black'}} />} variant="contained">Comprar</Button>
                  </Box>
                </Box>
              </Grid>
          <br></br>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SingleView
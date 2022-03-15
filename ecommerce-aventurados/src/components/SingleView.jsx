import { useSelect } from "@mui/base"
import { Button, Grid, ImageListItem } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import React, { useEffect, useState } from "react"



const SingleView = () => {

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
              <img src="https://www.aventurasengalicia.com/upload/excursiones/21031104133.jpg?crc=4091525304" />
            </ImageListItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container paddingTop={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <Button variant="contained">fav</Button>
                  </Box>
                  <Box>
                    <Button variant="contained" color="secondary">
                      comprar
                    </Button>
                  </Box>
                </Box>
              </Grid>
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
              <h1>Experiencia en equipo</h1>
            </Box>
          </Grid>
          <Grid item xs={12} paddingBottom={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Raiting: 5
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    cantidad de usuarios
                  </Box>
                  <Box>
                    precio
                  </Box>
                </Box>
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
              <p>
                El Paintball es una actividad que combina el ejercicio físico,
                con la estrategia, habilidad, inteligencia y la compenetración
                con el resto de componentes del juego. Consiste en un juego de
                colaboración-oposición, dónde el objetivo principal es la
                eliminación del equipo contrario o bien la consecución de un
                objetivo secundario que se nos plantee. En una actividad se
                plantean diferentes situaciones jugadas, utilizando un campo
                equipado con trincheras y otros escondites, donde los jugadores
                de ambos equipos tratarán de eliminar a sus oponentes. Para ello
                se utiliza comouna especie de pistola o marcadora que dispara
                bolas de pintura. ¡Adversario tocado, adversario eliminado!
              </p>
            </Box>
          </Grid>
          <br></br>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SingleView

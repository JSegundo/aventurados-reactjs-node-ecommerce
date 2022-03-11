import { Button, Grid, ImageListItem } from "@mui/material"
import React from "react"

function Paintboll() {
  return (
    <Grid container spacing={5} sx={{height:'77vh'}}>
      <Grid item xs={6}>
        <ImageListItem>
          <img src="https://www.aventurasengalicia.com/upload/excursiones/21031104133.jpg?crc=4091525304" />
        </ImageListItem>
      </Grid>
      <Grid item xs={6}>
        <Grid content>
          <br></br>
          <Grid item xs={12}>
            <h1>Experiencia en equipo</h1>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            El Paintball es una actividad que combina el ejercicio físico, con
            la estrategia, habilidad, inteligencia y la compenetración con el
            resto de componentes del juego. Consiste en un juego de
            colaboración-oposición, dónde el objetivo principal es la
            eliminación del equipo contrario o bien la consecución de un
            objetivo secundario que se nos plantee. En una actividad se plantean
            diferentes situaciones jugadas, utilizando un campo equipado con
            trincheras y otros escondites, donde los jugadores de ambos equipos
            tratarán de eliminar a sus oponentes. Para ello se utiliza comouna
            especie de pistola o marcadora que dispara bolas de pintura.
            ¡Adversario tocado, adversario eliminado!
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                Precio: $8200
              </Grid>
              <Grid item xs={6}>
                Raiting: 5
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Button variant="contained">fav</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary">
                  comprar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Paintboll

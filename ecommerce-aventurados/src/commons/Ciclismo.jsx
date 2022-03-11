import { Button, Grid, ImageListItem } from "@mui/material"
import React from "react"

function Ciclismo() {
  return (
    <Grid container spacing={5} sx={{height:'77vh'}}>
      <Grid item xs={6}>
        <ImageListItem>
          <img src="https://forriders.es/wp-content/uploads/2019/11/mountain-bike.jpg" />
        </ImageListItem>
      </Grid>
      <Grid item xs={6}>
        <Grid content>
          <br></br>
          <Grid item xs={12}>
            <h1>Experiencia ciclismo extrema</h1>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            El ciclismo de montaña es un deporte de aventura que ya no es
            exclusivo de ciclistas experimentados, pues cada vez va teniendo más
            adeptos. Es un deporte que, como todos los de aventura, mezcla el
            propio deporte con el turismo rural. Se trata de recorrer diversos
            caminos en bicicleta, algunos más fáciles, y otros más complicados,
            por eso se le considera un deporte de riesgo. Y este recorrido se
            hace en bicicletas de montaña, que requieren cierta preparación
            física para su dominio, y que son especiales para este deporte. No
            se trata de bicicletas de paseo al uso, ni mucho menos. Las
            bicicletas de montaña son más complicadas de dominar para conseguir
            una buena técnica. Pero nada es imposible si nos esforzamos, y si
            nos apetece probar una nueva experiencia.
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                Precio: $3700
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

export default Ciclismo

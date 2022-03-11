import { Button, Grid, ImageListItem } from '@mui/material'
import React from 'react'

function Spa() {
  return (
    <Grid container spacing={5} sx={{height:'77vh'}}>
      <Grid item xs={6}>
        <ImageListItem>
          <img src="https://www.nupciasmagazine.com/wp-content/uploads/2019/02/portada-2.jpg" />
        </ImageListItem>
      </Grid>
      <Grid item xs={6}>
        <Grid content>
          <br></br>
          <Grid item xs={12}>
            <h1>Experiencia relax</h1>
          </Grid>
          <br></br>
          <Grid item xs={12}>
          Cierra los ojos e imagina una sesión de spa y masajes relajantes, ayurvédicos o tailandeses en un centro especializado, un hamam o un spa. Haz realidad tu sueño con una de nuestras experiencias, regalo de tratamientos de bienestar llenas de masajes y relajación para dos. Los hay para todos los gustos y presupuestos, ocasiones especiales como aniversarios de boda, días para sorprender como regalo de San Valentín para ella o como un capricho en pareja para daros un homenaje: ¡cualquier momento es bueno para ponerle freno al estrés con una de nuestras cajas regalo de spa y masajes más relajantes!
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                Precio: $4500
              </Grid>
              <Grid item xs={6}>
                Raiting: 3
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

export default Spa
import { Button, Grid, ImageListItem } from "@mui/material"
import React from "react"

function Campestre() {
  return (
    <Grid container spacing={5} sx={{height:'77vh'}}>
      <Grid item xs={6}>
        <ImageListItem>
          <img src="https://www.ecuestre.es/upload/images/article/5c920e080ee6945001349906/5c920ead0de6949f0b34964a-que-titulacion-se-requiere-para-organizar-rutas-a-caballo.jpg" />
        </ImageListItem>
      </Grid>
      <Grid item xs={6}>
        <Grid content>
          <br></br>
          <Grid item xs={12}>
            <h1>Experiencia Campestre</h1>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            Cuando planeamos un fin de semana en el campo, preferimos intimidad.
            Salir de la ciudad y buscar una experiencia rural plena implica
            cierta soledad. Estar en familia, sin nadie más. Además, esos
            lugares tienen que ser especiales, tener su propio encanto. En los
            alojamientos rurales, por ejemplo, solemos pasar mucho más tiempo
            que en un hotel urbano. Por eso, se valora muy positivamente que un
            alojamiento rural tenga lugares acogedores desde los que tener una
            auténtica experiencia rural: una terraza con cómodas butacas desde
            las que disfrutar del paisaje, una chimenea en el salón para
            calentar las sobremesas en el invierno, o una sala de estar en la
            que poder charlar con los propietarios del alojamiento y el resto de
            huéspedes.
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                Precio: $7500 
              </Grid>
              <Grid item xs={6}>
                Raiting: 4
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
                <Button variant="contained" color='secondary'>comprar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Campestre

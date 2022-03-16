import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const Carrito = () => {
  return (
    <Grid
      container
      spacing={1}
      paddingLeft={1}
      paddingX={10}
      paddingTop={20}
      sx={{ height: "77vh" }}
    >
      <br />
      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://forriders.es/wp-content/uploads/2019/11/mountain-bike.jpg"
          alt="Ciclismo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ciclismo Aventura
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El ciclismo de montaña es un deporte de aventura que ya no es
            exclusivo de ciclistas experimentados, pues cada vez va teniendo más
            adeptos. Es un deporte que, como todos los de aventura, mezcla el
            propio deporte con el turismo rural. Se trata de recorrer diversos
            caminos en bicicleta, algunos más fáciles, y otros más complicados,
            por eso se le considera un deporte de riesgo
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="small">Añadir</Button>
          <br />
          <Button size="small">Quitar</Button>
          <TextField
            required
            id="outlined-required"
            label="Destinatario"
            defaultValue="Dirección de email"
          />
        </CardActions>
      </Card>

      <Grid item xs={6}>
        <Grid content>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1>Carrito</h1>
            </Box>
          </Grid>
          <Grid item xs={12} paddingBottom={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
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

          <Grid item xs={8}>
            <br />
            <br />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Nombre del Titular</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nombre y Apellido"
                  />
                </div>
                <br />
                <div class="form-group">
                  <label for="formGroupExampleInput">Numero de Tarjeta</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ingrese el numero de su tarjeta"
                  />
                </div>
                <br />
                <div
                  _ngcontent-vay-c171=""
                  class="-icon- -icon-right -md -top-left chk-input eva-3-input eva-3-validation-inline"
                  id="formData.paymentData.cardPayments[0].card.expirationDate"
                >
                  <label
                    _ngcontent-vay-c171=""
                    class="chk-label eva-label-form eva-3-label-form"
                  >
                    Vencimiento
                  </label>
                  <div _ngcontent-vay-c171="" class="input-container">
                    <input
                      _ngcontent-vay-c171=""
                      class="input-tag ng-untouched ng-pristine ng-invalid"
                      type="tel"
                      placeholder="MM/AA"
                      name="formData.paymentData.cardPayments[0].card.expirationDate"
                      autocomplete="cc-exp"
                    />
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label for="formGroupExampleInput2">
                    Codigo de Seguridad
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Localizado en los 3 últimos dígitos detrás de la tarjeta."
                  />
                </div>

                <br />
              </form>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Monto"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append"></div>
              </div>
              <br />
              <div _ngcontent-vay-c171="" class="input-container"></div>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  justifyContent="center"
                  type="button"
                  class="btn btn-primary btn-lg"
                >
                  PAGAR
                </button>
              </Box>
            </Box>
          </Grid>
          <br></br>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Carrito;

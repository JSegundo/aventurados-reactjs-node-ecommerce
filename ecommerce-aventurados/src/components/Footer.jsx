import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Grid } from "@mui/material"

function Copyright() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}
          <Link color="inherit">AventuraDos</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
    </Grid>
  )
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "20vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer

import { Box } from '@mui/material'
import React from 'react'

const Fav = () => {
  return (
    <Box
    component="img"
    sx={{
      height: '100vh',
      width: '100vw',
      // maxHeight: { xs: 233, md: 167 },
      // maxWidth: { xs: 350, md: 250 },
    }}
    alt="Fav vacio"
    src="https://estaticos-cdn.elperiodico.com/clip/98916304-e033-4d66-bb48-cb438327b9e2_alta-libre-aspect-ratio_default_0.jpg"
  />
  )
}

export default Fav
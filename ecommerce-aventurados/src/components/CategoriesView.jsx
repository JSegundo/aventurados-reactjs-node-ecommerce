import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card2 from '../commons/Card'

const CategoriesView = () => {
    const { id, cat } = useParams()

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/categories/${id}`)
            .then(res => setProducts(res.data))
    }, [id])

  return (
    <div>
    
      <Typography
        variant="h4"
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        {cat}
      </Typography>
      <Grid container spacing={5} wrap='wrap' sx={{display:'flex', justifyContent: 'center', marginTop: "1em" }}>
        {products.map((producto, i) => (
          <Grid item>
            <Card2 data={producto} />
          </Grid>
        )) }
      </Grid>
    </div>
  )
}

export default CategoriesView
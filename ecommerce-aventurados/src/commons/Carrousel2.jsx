import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { Link } from 'react-router-dom';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
     
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

 const Carrousel2 = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
  return (
    <>
      <Grid sx={{overflowX: 'scroll'}} classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        <Grid item>
          <Link to='/paintboll'>
          <CustomCard
            classes={styles}
            title={'Paint Ball'}
            subtitle={'Be a Legend!'}
            image={
              //'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'
              'https://www.aventurasengalicia.com/upload/excursiones/21031104133.jpg?crc=4091525304'
            }
            />
            </Link>
        </Grid>
        <Grid item>
        <Link to='/spa'>
          <CustomCard
            classes={styles2}
            title={'Dia de Spa'}
            subtitle={'Relajate!'}
            image={
              //'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'
              'https://www.nupciasmagazine.com/wp-content/uploads/2019/02/portada-2.jpg'
            }
            />
            </Link>
        </Grid >
        <Grid item>
          <Link to='/ciclismo'>
          <CustomCard
            classes={styles3}
            title={'Ciclismo'}
            subtitle={'What are you waiting?'}
            image={//'https://images5.alphacoders.com/690/thumb-1920-690653.png'
              'https://forriders.es/wp-content/uploads/2019/11/mountain-bike.jpg'}
              />
              </Link>
        </Grid>
        <Grid item>
          <Link to='/campestre'>
          <CustomCard
            classes={styles4}
            title={'Campestre'}
            subtitle={'Are you ready?'}
            image={
              //'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
              'https://www.ecuestre.es/upload/images/article/5c920e080ee6945001349906/5c920ead0de6949f0b34964a-que-titulacion-se-requiere-para-organizar-rutas-a-caballo.jpg'
            }
            />
            </Link>
        </Grid>
      </Grid>
    </>
  );
});
export default Carrousel2;
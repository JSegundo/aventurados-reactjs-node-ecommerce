import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ParallaxSlide from "@mui-treasury/components/slide/parallax";
import DotIndicator from "@mui-treasury/components/indicator/dot";
import { useArrowDarkButtonStyles } from "@mui-treasury/styles/button/arrowDark";
import { FormHelperText, Box, Grid } from "@material-ui/core";

const data = [
  {
    id: 1,
    /* title: 'Huarache',
    subtitle: 'Gripp', */
    image:
      // eslint-disable-next-line max-len
      //"https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media",
      'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/11/cena.jpg'
    },
  {
    id: 2,
    /* title: 'Air Max',
    subtitle: '270 P', */
    image:
      // eslint-disable-next-line max-len
      //"https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media",
        'https://img.blogs.es/anexom/wp-content/uploads/2020/01/photo-1519904981063-b0cf448d479e.jpeg'
    },
  {
    id: 3,
    /* title: 'Air Max',
    subtitle: 'Deluxe', */
    image:
      // eslint-disable-next-line max-len
     // "https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media",
    'https://cdn.atrapalo.com/common/photo/event/4/7/9/4722/370006/vertic_880_0.jpg'
    },
    {
      id: 4,
      /* title: 'Air Max',
      subtitle: 'Deluxe', */
      image:
        // eslint-disable-next-line max-len
       // "https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media",
      'https://welcometoibiza.com/wp-content/uploads/Ibiza-Gran-Hotel-Open-Spa-1.jpg'
      },
      {
        id: 5,
        /* title: 'Air Max',
        subtitle: 'Deluxe', */
        image:
          // eslint-disable-next-line max-len
         // "https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media",
        'https://www.es-paintball.com/Imagenes/mejores-tacticas-estrategias-jugar-a-paintball.jpg'
        },
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: "relative",
    width: "95%",
  },
  slide: {
    perspective: 1000, // create perspective
    overflow: "hidden",
    // relative is a must if you want to create overlapping layers in children
    position: "relative",
    paddingTop: spacing(5),
   
    [breakpoints.up("sm")]: {
      paddingTop: spacing(10),
    },
    [breakpoints.up("md")]: {
      paddingTop: spacing(2),
    },
  },
  imageContainer: {
    display: "block",
    position: "relative",
    zIndex: 2,
    paddingBottom: "56.25%",
  },
  image: {
    display: "block",
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginLeft: "12%",
    [breakpoints.up("sm")]: {
      marginLeft: "4%",
    },
  },
  arrow: {
    display: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [breakpoints.up("sm")]: {
      display: "inline-flex",
    },
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up("sm")]: {
      left: 64,
    },
  },
  arrowRight: {
    right: 0,
    [breakpoints.up("sm")]: {
      right: 2,
    },
  },
  text: {
    // shared style for text-top and text-bottom
    fontFamily: "Poppins, san-serif",
    fontWeight: 900,
    position: "absolute",
    color: palette.common.white,
    padding: "0 8px",
    transform: "rotateY(45deg)",
    lineHeight: 1.2,
    [breakpoints.up("sm")]: {
      padding: "0 16px",
    },
    [breakpoints.up("md")]: {
      padding: "0 24px",
    },
  },
   title: {
    top: 20,
    left: "20%",
    height: "40%",
    fontSize: 40,
    zIndex: 1,
    background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)",
    [breakpoints.up("sm")]: {
      top: 40,
      fontSize: 72,
    },
    [breakpoints.up("md")]: {
      top: 52,
      fontSize: 72,
    },
  }, 
  subtitle: {
    top: 60,
    left: "0%",
    height: "52%",
    fontSize: 56,
    zIndex: 2,
    background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)",
    [breakpoints.up("sm")]: {
      top: 112,
      left: "6%",
      fontSize: 96,
    },
    [breakpoints.up("md")]: {
      top: 128,
      fontSize: 104,
    },
  }, 
  indicatorContainer: {
    textAlign: "center",
  },
}));

const Carrousel1 = () => {
  const classes = useStyles();
  const arrowStyles = useArrowDarkButtonStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
        classes={arrowStyles}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
        classes={arrowStyles}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <KeyboardArrowRight />
      </Button>
    
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={"slide"} />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

export default Carrousel1;

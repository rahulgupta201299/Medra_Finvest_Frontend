import { Box, makeStyles } from "@material-ui/core";
import MenuBar from "./component/MenuBar/MenuBar.Layout";

const useStyles = makeStyles(() => {
  return {
    container: {
      marginBottom: '70px',
      '@media screen and (max-width: 899px)': {
        marginBottom: '65px'
      },
      '@media screen and (max-width: 599px)': {
        marginBottom: '57px'
      }
    }
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <>
      <MenuBar />
      <Box className={classes.container} />
    </>
  );
}

export default App;

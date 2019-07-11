import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import SearchIcon from '@material-ui/icons/Search'
import { Container } from '@material-ui/core';
import Package from '../../package.json'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textDecorationColor: 'red',
    color: 'red',
    // backgroundColor: 'blue',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    marginLeft:'200px'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: 0,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 200,
      },
    },
  },
  difftabs: {
    justifyContent: 'center'
  }
}));


//  const MyFlag = (props) => (
//     <Flag code={ props.code } height="18" />
//   )
  

  const Header = (props) => {

 
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Container>
        <Toolbar>
      <Typography className={classes.title} component="h1" variant="h5" align="left">
              {Package.name}
            </Typography>

            <form className={classes.search} onSubmit={props.searchValue}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
             className={classes.inputInput}
             label="Search Keyword"
             placeholder="Search Keyword"
             inputProps={{ 'aria-label': 'Search' }}
                onChange={props.changeQuery}
            />
          </form>
       </Toolbar>
      </Container>
      
      <Container>
      <AppBar position="static">
        <Toolbar className={classes.difftabs}>
          
        <Tabs value={props.currentTab} onChange={props.changeTabVlaue} centered  >


<Tab value="in" label="India"  />

<Tab value="us" label="USA"  />

<Tab value="sr" label="Search Results"  />

<Tab value="ca" label="Canada"  />

<Tab value="au" label="Australia"  />


</Tabs>

        
         
        </Toolbar>
      </AppBar>
      </Container>
    </div>
  );
}
// MaterialUI

export default Header

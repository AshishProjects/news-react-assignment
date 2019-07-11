import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  
  footerDisp: {

 backgroundColor:'#3f51b5',
 height:'100px',

 footerprag: {
   backgroundColor: 'white',

footerValue: {
  alignItems: 'center',
  fontStyle: 'bold',
}


 }
  }

})
);



const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerDisp}>
    
      <p className={classes.footerprag}>Powered by
         <a className={classes.footerValue} href="https://newsapi.org">News API</a>
      </p>
    
    
    </div>
  )
}


export default Footer

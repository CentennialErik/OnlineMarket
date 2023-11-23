import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LogoOne from './../assets/images/thread1.jpg';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
   
  },
  title: {
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },

  
}));

export default function Home() {
  const classes = useStyles()
  return (
   
 <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>Placeholder text</Typography>

      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to Threads.
        </Typography>
           <CardMedia className={classes.media}
        image={LogoOne}/>
      </CardContent>
      </Card>
      
  )
}

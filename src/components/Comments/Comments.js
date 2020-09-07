import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Comments = (props) => {
    const classes = useStyles();
    const {name, email, body} = props.comment;
    const history = useHistory();
    const handelClick = (comment) => {
        const url = `/comments/${comment}`
        history.push(url)
    }
    return (

        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                 {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                 {email} 
                </Typography>
                <Typography variant="body2" component="p">
                comments:
                <br />
               " {body}"
                </Typography>
            </CardContent>
      
    </Card>

        // <div>

        //     This is comments : {body}
        //     <p> name: {name} </p>
        //     <p> email: {email} </p>
        // </div>
    );
};

export default Comments;
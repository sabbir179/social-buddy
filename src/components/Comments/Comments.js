import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
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
    const {name, email, body, id, postId} = props.comment;
    const history = useHistory();
    const handelClick = (comment) => {
        const url = `/comments/${comment}`
        history.push(url)
    }
    return (
        <Grid container spacing={10} direction="row"
        justify="center"
        alignItems="center" >
            <Grid item  xs={12} sm= {6}>

            <Grid item>
            <Avatar alt="Remy Sharp" src="../image/1.jpg">{postId}  </Avatar>
            </Grid>
        <Card className={classes.root}>

            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 postID {postId}; userID {id} 
                
                </Typography>
                comments:
                <Typography variant="h5" component="h2">
                 
                
               " {body}"
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                 Name: {name}
                </Typography>
                <Typography variant="body2" component="p">
                {email}
                </Typography>
            </CardContent>
      
    </Card>
    </Grid>
    </Grid>
    
    );
};

export default Comments;
import React from 'react';
import PostDetail from '../PostDetail/PostDetail';
import Comments from '../Comments/Comments';
import NoteIcon from '@material-ui/icons/Note';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    // width: '200px',
    root: {
      minWidth: 200,
     
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


const Post = (props) => {
   
const classes = useStyles();

const {userId, id, title, body} = props.post;

const history = useHistory();

const handelClick = (post) => {
    const url = `/post/${post}`;
    history.push(url);
}
    return (
        <Grid container spacing={5} >
            <Grid item  xs={12} sm= {3}>
        <Card className={classes.root} variant="outlined">
        <CardContent>
          
          <Typography variant="body2" component="p">
              <NoteIcon style={{color:'lightgrey'}} > </NoteIcon> User Id: {userId}
            
            <br />
            <h4>{title}</h4> 
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick= {()=> handelClick(id)} size="small">Read more</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    );
};

export default Post;
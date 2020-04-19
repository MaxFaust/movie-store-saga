// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';

// const mapStateToProps = reduxState => ({
//     movieList: reduxState.movies,
// });

// class MovieItem extends Component {

//     render() {
//         return (
//             <Card>
//             </Card>
//         );
//     }
// }

// export default connect(mapStateToProps)(MovieItem);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 100,
    },
});

export default function MediaCard(key) {
    const classes = useStyles();

    console.log('HIT', key.title)

    return (
        <Grid>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={key.poster}
                        title="Movie Poster"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {key.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {key.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" name={key.title}>
                        Edit
        </Button>
                </CardActions>
            </Card>
        </Grid>

    );
}

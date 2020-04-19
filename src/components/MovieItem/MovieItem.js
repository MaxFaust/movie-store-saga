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
    grid: {
        display: 'flex'
    },
    root: {
        flexGrow: 1,
        maxWidth: 400,
        margin: 20,

    },
    media: {
        height: 400,
    },
});

export default function MediaCard(key) {
    const classes = useStyles();

    console.log('Movies in MovieItem:', key)
    return (
        <Grid className={classes.grid}>
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
                    <Button size="small" color="primary" key={key.title}>
                        Edit
        </Button>
                </CardActions>
            </Card>
        </Grid>

    );
}

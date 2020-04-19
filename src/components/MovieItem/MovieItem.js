import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux';



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

function MediaCard(key) {

    console.log('HIT', key)


    //GO to details page
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Dispatching movie details payload:', key);

        //TODO-  HIT table join through "router.get('/details'... "
        key.dispatch({ type: 'DETAILS', payload: key.title});
        // this.props.history.push('/details');

    }
    const classes = useStyles();

    // console.log('Movies in MovieItem:', key)
    return (
        <Grid className={classes.grid}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={key.poster}
                        title="Movie Poster"

                        //GO to details page
                        onClick={handleClick}
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
            </Card>
        </Grid>

    );
}

const mapReduxStateToProps = reduxState => ({
    movieList: reduxState.movies,
});

export default connect(mapReduxStateToProps)(MediaCard)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box'
import MovieItem from '../MovieItem/MovieItem';


const mapStateToProps = reduxState => ({
    movieList: reduxState.movies,
});

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
        this.props.dispatch({ type: 'GET_GENRES' });
    }

    render() {
        console.log('Movie array:', this.props.movieList)

        return (

            <Box width="90%" margin="auto" align="center" >
                {this.props.movieList.map(item => <MovieItem key={item.id} title={item.title} poster={item.poster} description={item.description} />)}
            </Box >
        );
    }
}

export default connect(mapStateToProps)(Home);
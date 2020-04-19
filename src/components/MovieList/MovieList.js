import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

const mapStateToProps = reduxState => ({
    movieList: reduxState.movies,
});


class SearchResults extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    render() {
        return (
            <Box width="90%" margin="auto" align="center">
                {this.props.movieList.map(item => <MovieItem name={item.title} />)}
            </Box>
        );
    }
}

export default connect(mapStateToProps)(SearchResults);
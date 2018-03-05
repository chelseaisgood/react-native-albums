import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }))
        .catch();
    }

    renderAlbums = () => this.state.albums.map(album => <AlbumDetail key={album.title + album.artist} album={album} />);

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
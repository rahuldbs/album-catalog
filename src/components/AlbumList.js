import React from "react";
import { connect } from "react-redux";
import { album } from "../actions/album";
import { Album } from "./Album";
import { Spinner } from "react-bootstrap"

import styles from "./AlbumList.module.css";

class AlbumList extends React.Component {

    componentDidMount() {
        this.props.getAlbums();
    }

    render() {
        return (
            <main className={styles.container}>
                {this.props.inProgress &&
                    <div className={styles.spinner}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                }
                {this.props.albums && this.props.albums.map(album =>
                    <Album
                        key={album.id}
                        albumId={album.id}
                        title={album.title}
                        url={album.url}
                        thumbnailUrl={album.thumbnailUrl}
                    />
                )}
                {this.props.error &&
                    <div className={styles.message}>{this.props.error.message}</div>
                }
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums,
        inProgress: state.inProgress,
        error: state.error
    };
};

const mapDispatchToProps = {
    getAlbums: album.request
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
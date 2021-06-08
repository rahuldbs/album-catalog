import React from "react";
import { album } from "../actions/album";

import styles from "./AlbumList.module.css";

export class Album extends React.Component {
    render() {
        return (
            <div key={album.id} className={styles.albumCard}>
                <div className={styles.albumId}>{this.props.albumId}</div>
                <img src={this.props.thumbnailUrl} alt={"album image"} />
                <div className={styles.description}>{this.props.title}</div>
            </div>
        )
    }
}
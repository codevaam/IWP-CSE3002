import React, { useState } from 'react';
import styles from '../stylesheets/components/favorites.module.scss';
import Helmet from 'react-helmet';
import Artists from '../static/test.json';
import { Link } from 'react-router-dom';
import axios from 'axios';


function FavoriteSelect() {
    const [ArtistHtml, updateArtistHtml] = useState([]);
    const [result, updateResult] = useState([]);
    const [addedArtists, updateArtists] = useState([]);
    function searchArtist(event) {
        var name = event.target.value;
        var lowercasedFilter = name.toLowerCase();
        const filteredData = Artists.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        updateResult(filteredData);
    }
    function addArtist(event) {
        addedArtists.push({ artistName: event.target.value, spotifyURI: event.target.id })
        updateArtists(addedArtists);

        ArtistHtml.push(<div key={event.target.value} className={`mt-4 mr-2 d-flex ${styles.circle}`}><span className={`m-auto`}>event.target.value</span></div>)
        updateArtistHtml(ArtistHtml)
        updateResult([])
    }
    const handleNext = async () => {
        const res = await axios.post('/artists/favorites/add', {
            uname: sessionStorage.getItem('user'),
            artists: addedArtists,
        })
        console.log(res);
    }
    return (
        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <h2 className={styles.title}>ADD YOUR FAVORITE ARTISTS</h2>
            <input type="text" placeholder="SEARCH" className={`m-auto ${styles.search}`} onChange={searchArtist} />
            <div className="d-flex justify-content-center w-100">
                {addedArtists.map(item => (
                    <div key={item.spotifyURI} className={`mt-4 mr-2 d-flex ${styles.circle}`}><span className={`m-auto`}>{item.artistName}</span></div>
                ))}
                {addedArtists}
                <div className={`mt-4 mr-2 d-flex ${styles.circle}`}><span className={`m-auto`}>ADD +</span></div>
            </div>

            <div className="d-flex flex-column align-items-center">
                {result.map(item => (
                    <div key={item.URI}>
                        <div className={`mt-4 d-flex justify-content-between ${styles.resultDiv}`}>
                            <span>{item.Artist}</span>
                            {/* item.URI */}
                            <button className={`${styles.followBtn}`} id={item.URI} value={item.Artist} onClick={addArtist}>Follow +</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-end mr-5">
                <button onClick={() => handleNext()} className={`mb-4 ${styles.nextBtn}`}>NEXT</button>
            </div>
        </div>
    )
}

export default FavoriteSelect;
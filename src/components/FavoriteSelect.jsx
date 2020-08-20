import React, { useState } from 'react';
import styles from '../stylesheets/components/interests.module.scss';
import Helmet from 'react-helmet';
import Artists from '../static/test.json';


function FavoriteSelect() {
    const [result, updateResult] = useState([]);
    function searchArtist(event) {
        var name = event.target.value;
        var lowercasedFilter = name.toLowerCase();
        const filteredData = Artists.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        updateResult(filteredData);
        console.log(result)
    }

    return (
        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <h2 className={styles.title}>ADD YOUR FAVORITE ARTISTS</h2>
            <input type="text" placeholder="SEARCH" className={styles.search} onChange={searchArtist} />
            <div className="d-flex justify-content-center w-50">
                <div className={`mt-4 mr-2 d-flex ${styles.circle}`}><span className={`m-auto`}>JOJI</span></div>
                <div className={`mt-4 mr-2 d-flex ${styles.circle}`}><span className={`m-auto`}>ARCTIC MONKEYS</span></div>
            </div>

            {result.map(item => (
                <div key={item.email}>
                    <div className={styles.resultDiv}>
                        {item.Artist} {item.URI}
                    </div>
                </div>
            ))}

            <div className="d-flex justify-content-end mr-5">
                <button className={`align-self-right mb-4 ${styles.nextBtn}`}>NEXT</button>
            </div>
        </div>
    )
}

export default FavoriteSelect;
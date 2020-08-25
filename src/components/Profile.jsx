import React from 'react';
import styles from '../stylesheets/components/profile.module.scss';

function Profile() {
    return (
        <div className="p-2">
            <h1>Hello Devam</h1>

            <div className="d-flex mt-4">
                <div className={styles.profilePic}></div>
                <div className="d-flex flex-column justify-content-center ml-2">
                    <span className="h2 bold font-weight-bold">Devam Trivedi</span>
                    <span className="h4">Jamnagar, Gujarat</span>
                    <span className="h5">19</span>
                    <button className={styles.editBtn}>Edit profile</button>
                </div>
            </div>

            <div className="mt-4">
                <span className="h5 font-weight-bold">Connect to spotify</span><br/>
                <span>Integrate with spotify to add your favorite aritists</span>
            </div>
        </div>
    )
}

export default Profile;
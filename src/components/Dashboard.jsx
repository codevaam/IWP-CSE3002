import React from 'react';
import favStyle from '../stylesheets/components/favorites.module.scss';
import styles from '../stylesheets/components/dashboard.module.scss';

function Dashboard() {
    return (
        <div className={styles.fullHeight}>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <a href="/" className="navbar-brand">Home</a>
                <input className={favStyle.search} type="search" placeholder="Search" aria-label="Search" />
            </nav>
            <div className={`row no-gutters ${styles.row}`}>
                <div className={`col-3 p-2 d-flex flex-column ${styles.sideNav}`}>
                    <span>MESSAGES</span>
                    <div className={`mt-2 ${styles.chatBox}`}>
                        <b><span>Mark</span></b>
                        <div className="d-flex justify-content-between">
                            <div className={styles.lastText}>Hello asdfad sfasdfasd fasdfasdf asdfasdfasdfa sdfasdfasf</div> <span>1:24</span>
                        </div>
                    </div>
                    <span className="mt-auto mx-auto">Your chats will appear here.</span>
                </div>
                <div className="col p-2">
                    <span className="h2">Find people who match your interests</span>
                    <div className="row mt-2 no-gutters">
                        <div className="col">
                            <span>YOUR FAVORITES</span>
                            <div className="d-flex flex-wrap">
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Joji</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Arctic monkeys</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>The beatles</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Lumineers</div>
                            </div>
                        </div>

                        <div className="col">
                            <span>INTERESTS</span>
                            <div className="d-flex flex-wrap">
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Joji</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Arctic monkeys</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>The beatles</div>
                                <div className={`mr-2 mt-2 ${styles.artistDiv}`}>Lumineers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
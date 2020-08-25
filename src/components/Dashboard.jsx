import React from 'react';
import favStyle from '../stylesheets/components/favorites.module.scss';
import styles from '../stylesheets/components/dashboard.module.scss';
import DashboardMain from './DashboarMain';
import ChatMain from './ChatMain';
import Profile from './Profile';
import { useState } from 'react';

function Dashboard() {
    var [dashDisplay, updateDashDisp] = useState(true);
    var [chatDisplay, updateChatDisp] = useState(false);
    var [profileDisplay, updateProfileDisplay] = useState(false);
    function openChat() {
        updateDashDisp(false);
        updateProfileDisplay(false);
        updateChatDisp(true);
    }
    function showProfile() {
        updateProfileDisplay(true);
        updateChatDisp(false);
        updateDashDisp(false);
    }
    return (
        <div className={styles.fullHeight}>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <div>
                    <span className={styles.profile} onClick={showProfile}>Profile </span>
                    <a href="/" className="navbar-brand">Home</a>
                </div>
                <input className={favStyle.search} type="search" placeholder="Search" aria-label="Search" />
            </nav>
            <div className={`row no-gutters ${styles.row}`}>
                <div className={`col-3 p-2 d-flex flex-column ${styles.sideNav}`}>
                    <span>MESSAGES</span>
                    <div className={`mt-2 ${styles.chatBox}`} onClick={openChat}>
                        <b><span>Mark</span></b>
                        <div className="d-flex justify-content-between">
                            <div className={styles.lastText}>Hello asdfad sfasdfasd fasdfasdf asdfasdfasdfa sdfasdfasf</div> <span>1:24</span>
                        </div>
                    </div>
                    <span className="mt-auto mx-auto">Your chats will appear here.</span>
                </div>
                <div className="col d-flex flex-column p-2 main-content">
                    {dashDisplay ? <DashboardMain /> : null}
                    {chatDisplay ? <ChatMain /> : null}
                    {profileDisplay ? <Profile /> : null}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
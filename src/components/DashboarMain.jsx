import React from 'react';
import styles from '../stylesheets/components/dashboard.module.scss'

function DashboardMain() {
    return (
        <>
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

        <div>
             
        </div>
        </>
    )
}

export default DashboardMain;
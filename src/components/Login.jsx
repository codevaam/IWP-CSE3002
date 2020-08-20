import React, { useState } from 'react';
import styles from '../stylesheets/components/login.module.scss';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

function LoginPage() {
    // const [isLoggedin, setLoggedin] = useState(false);

    return (

        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <h2 className={styles.title}>LOGIN</h2>
            <form>
                <input type="text" placeholder="username" className={styles.loginInput} />
                <input type="text" placeholder="password" className={styles.loginInput} />
                <Link to="/interests" ><button type="submit" className={styles.btn}>Login</button></Link>
            </form>
        </div>
    );
}

export default LoginPage;

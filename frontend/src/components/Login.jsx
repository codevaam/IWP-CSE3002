import React from 'react';
import styles from '../stylesheets/components/login.module.scss';
import { Link, useHistory, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import axios from 'axios';
// import { TextField } from '@material-ui/core'
import { useState } from 'react'

function LoginPage() {
    const history = useHistory();
    const [uname, updateUname] = useState('');
    const [psw, updatePsw] = useState('');

    const handleSubmit = async () => {
        const res = await axios.post('/account/login', {
            uname: uname,
            psw: psw
        })
        console.log(res);
        if (res.data.success === true) {
            sessionStorage.setItem('isLoggedIn', true);
            sessionStorage.setItem('user', uname);
            if (res.data.newAccount === false) {
                history.push('/')
            }
            else {
                history.push('/interests')
            }
        }
        else {
            alert('wrong username/ password')
        }
    }
    return (
        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <h2 className={styles.title}>Login</h2>
            <input type="text" variant="filled" placeholder="username" onChange={(e) => updateUname(e.target.value)} className={styles.loginInput} />
            <input type="password" variant="filled" placeholder="password" onChange={(e) => updatePsw(e.target.value)} className={styles.loginInput} />
            <Link to="/register"><span style={{ display: 'block', marginTop: 20, textAlign: "center", color: "white" }}>Register here</span></Link>
            <button onClick={handleSubmit} className={styles.btn}>Login</button>
        </div>
    );
}

export default withRouter(LoginPage);

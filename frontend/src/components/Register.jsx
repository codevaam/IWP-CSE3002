import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import axios from 'axios';

// stylesheet
import styles from '../stylesheets/components/login.module.scss';

function Regsiter() {
    const [data, updateData] = useState({
        uname: '',
        psw: '',
        cpsw: ''
    })
    const handleChange = (prop) => (event) => {
        updateData({ ...data, [prop]: event.target.value });
    };

    const handlePost = async () => {
        if (data.uname === '') {
            alert('please enter a valid username');
            return;
        }
        else if (data.psw !== data.cpsw) {
            alert('Password and confime password dont match');
            return;
        }
        const res = await axios.post('/account/register', {
            uname: data.uname,
            psw: data.psw
        })
        console.log(res);
        window.location('/interests');
    }
    return (
        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <h2 className={styles.title}>Register</h2>
            <input type="text" name="uname" placeholder="username" onChange={handleChange('uname')} className={styles.loginInput} />
            <input type="password" name="psw" placeholder="password" onChange={handleChange('psw')} className={styles.loginInput} />
            <input type="password" name="cpsw" placeholder="confirm password" onChange={handleChange('cpsw')} className={styles.loginInput} />
            <Link to="/login"><span style={{ display: 'block', marginTop: 20, textAlign: "center", color: "white" }}>Login</span></Link>
            <button onClick={handlePost} className={styles.btn}>Register</button>
        </div>
    )
}

export default Regsiter
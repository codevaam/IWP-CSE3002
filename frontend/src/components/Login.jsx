import React from 'react';
import styles from '../stylesheets/components/login.module.scss';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useState } from 'react'

function LoginPage() {
    // const [isLoggedin, setLoggedin] = useState(false);
    function Item({ content }) {
        const [isOpen, setIsOpen] = useState(true)

        return (
            <li>
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{borderColor: color}}
                    transition={spring}
                >
                    {isOpen && content}
                </motion.div>
            </li>
        )
    }
    return (

        <div>
            <Helmet>
                <body className={styles.background} />
            </Helmet>
            <AnimateSharedLayout>
                <motion.ul>
                    <Item content="LOGIN" />
                    <Item content="REGISTER" />
                </motion.ul>
                {/* <h2 className={styles.title}>LOGIN</h2>
                <h2 className={styles.title}>REGISTER</h2> */}
            </AnimateSharedLayout>
            <form>
                <input type="text" placeholder="username" className={styles.loginInput} />
                <input type="text" placeholder="password" className={styles.loginInput} />
                <Link to="/interests" ><button type="submit" className={styles.btn}>Login</button></Link>
            </form>
        </div>
    );
}

export default LoginPage;

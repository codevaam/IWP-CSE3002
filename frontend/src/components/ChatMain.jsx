import { func } from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../stylesheets/components/chatmain.module.scss'

function ChatMain() {
    var [input, updateInput] = useState('')
    async function sendMessage() {
        const name = sessionStorage.getItem('name');
        var res = await axios.post('/chat/messages', {
            name: name,
            message: input
        })
        console.log(res);
        console.log(input);
        updateInput('')
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Mark</h1>
            </div>
            <div className="mt-auto d-flex">
                <input className={`mx-4 ${styles.textBox}`} value={input} onChange={(e) => { updateInput(e.target.value) }} placeholder="Type here..." type="text"></input>
                <button className={styles.sendBtn} onClick={sendMessage}>send</button>
            </div>
        </>
    )
}

export default ChatMain;
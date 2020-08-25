import React, {useState} from 'react';
import styles from '../stylesheets/components/chatmain.module.scss'

function ChatMain() {
    var [input, updateInput] = useState('')
    function sendMessage() {
        console.log(input);
        updateInput('')
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Mark</h1>
            </div>
            <div className="mt-auto d-flex">
                <input className={`mx-4 ${styles.textBox}`} value={input} onChange={(e)=>{updateInput(e.target.value)}} placeholder="Type here..." type="text"></input>
                <button className={styles.sendBtn} onClick={sendMessage}>send</button>
            </div>
        </>
    )
}

export default ChatMain;
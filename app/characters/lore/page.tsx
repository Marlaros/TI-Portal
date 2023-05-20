"use client"
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './page.module.css';

const requestOpenAI = async (prompt: string, setState: Dispatch<SetStateAction<string>>) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.9,
        })
    });
    const parsed = await response.json();
    setState(parsed["choices"].pop()?.message.content || "");
}

export default function NewLore() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');

    return(
        <div className={styles.main}>
            <div className={styles.prompt}>

                <textarea value={prompt} onChange={e => setPrompt(e.target.value)}/>
                <button className={styles.send} onClick={() => {
                    setResult("Generando...")
                    requestOpenAI(prompt, setResult)
                }}>Generar</button>

            </div>

            {result && 
                <div className={styles.result}>
                    <span>{result}</span>
                </div>
            }

        </div>

    )
}

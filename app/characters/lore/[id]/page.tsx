"use client"
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
    })
    .then((res: Response) => res.json());
    
    setState(response["choices"].pop()?.message.content || "");
}

type Params = {
    params: {
        id: string
    }
}

export default function NewLore({params: {id}}: Params) {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        if (id) {
            let character: any
            fetch(`http://127.0.0.1:8090/api/collections/personajes/records`)
                .then((res: Response) => res.json())
                .then((res: any) => {
                    character = res.items.find((personaje: any) => personaje.id === id)
                    return fetch(`http://127.0.0.1:8090/api/collections/descripciones/records`)
                })
                .then((res: Response) => res.json())
                .then((res: any) => {
                    const description = res.items.find((description: any) => description.name === character.race)
                    console.log(character)
                    setPrompt(
`${character.race}: ${description?.description || ""}
Aspecto físico de los ${character.race}: ${description?.aspecto || ""}

Crear la historia de origen y descripción física de un personaje de un juego de rol llamado ${character.name}, un ${character.race}. Tener en cuenta sus atributos: Fuerza ${character.attributes.F || ""}, Agilidad ${character.attributes.A || ""}, Resistencia ${character.attributes?.R || ""}, Percepción ${character.attributes?.P || ""}, Liderazgo ${character.attributes?.L || ""}, Inteligencia ${character.attributes?.I || ""}. También tener en cuenta su estatus social de ${character.social_cat}, donde 0 es lo más bajo y 100 lo más alto.
`
                    );
                })
        }
    }, [id])

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

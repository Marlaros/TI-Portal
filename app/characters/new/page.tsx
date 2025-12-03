"use client"
import CharacterProvider from '@/app/contexts/characterContext';
import { CatalogProvider } from '@/app/contexts/catalogContext';
import NewCharacterStepper from '@/app/components/NewCharacterStepper/NewCharacterStepper';
import styles from './page.module.css';


export default function NewCharacter() {
    return(
        <CatalogProvider>
            <CharacterProvider>
                <section className={styles.canvas}>
                    <div className={styles.stack}>
                        <NewCharacterStepper />
                    </div>
                </section>
            </CharacterProvider>
        </CatalogProvider>
    )
}

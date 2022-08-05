import React from "react";
import styles from '../UI/ErrorModal.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ParcelForm from "./ParcelForm";

const EditParcel = (props) => {
    return (
        <>
            <div className={styles.backdrop} >
                <Card className={styles.modal}>
                    <header className={styles.header}>
                    <h2>Edit information about Parcel</h2>
                    </header>
                    <div className={styles.content}>
                        <ParcelForm dataToChange={props.dataToChange} checkIfDataPresentsHere={props.checkIfDataPresentsHere}/>
                    </div>
                    <footer className={styles.action}>
                        <Button onClick={props.onCloseHendler}>Cancel</Button>
                        <Button onClick={props.onSaveHandler}>Save</Button>
                    </footer>
                </Card>
            </div>
        </>
    )
}

export default EditParcel;

//passChangedParcel={props.passedNewInfoParcelHandler}
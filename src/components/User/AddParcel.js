import React, { useState } from "react";
import styles from './AddParcel.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal'


const AddParcel = props => {

    const [enteredFromCity, setEnteredFromCity] = useState('');
    const [enteredToCity, setEnteredToCity] = useState('');
    const [enteredtypeOfParcel, setEnteredtypeOfParcel] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredFromCity.trim().length === 0 || enteredToCity.trim().length === 0 || enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please, enter a valid information (non-empty values)'
            })
            return;
        }

        props.onAddParcel(enteredFromCity, enteredToCity, enteredtypeOfParcel, enteredDate, enteredDescription);
        setEnteredFromCity('');
        setEnteredToCity('');
        setEnteredtypeOfParcel('');
        setEnteredDate('');
        setEnteredDescription('')
    }

    const fromCityChangeHandler = event => {
        setEnteredFromCity(event.target.value);
    }

    const toCityChangeHandler = event => {
        setEnteredToCity(event.target.value);
    }

    const typeOfParcelChangeHandler = event => {
        setEnteredtypeOfParcel(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    const DescriptionChangeHandler = event => {
        setEnteredDescription(event.target.value);
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} >
                    <div>
                        <label htmlFor="fromWhichCity">From</label>
                        <input id='firstCity' type='text' maxLength='60' value={enteredFromCity} onChange={fromCityChangeHandler} />

                        <label htmlFor="toWhichCity">To</label>
                        <input id='seconCity' type='text' maxLength='60' value={enteredToCity} onChange={toCityChangeHandler} />

                        <label htmlFor="typeOfParcel">Type Of Parcel</label>
                        <select value={enteredtypeOfParcel} onChange={typeOfParcelChangeHandler}>
                            <option value=''></option>
                            <option value='gadgets'>gadgets</option>
                            <option value='drinks'>drinks</option>
                            <option value='clothes'>clothes</option>
                            <option value='medicines'>medicines</option>
                            <option value='other'>other</option>
                        </select>

                        <label htmlFor="date">Date</label>
                        <input id='age' type='date' value={enteredDate} onChange={dateChangeHandler} />

                        <label htmlFor="description">Description</label>
                        <textarea rows="2" cols="80" maxLength='60' id='descrtp' type='text' value={enteredDescription} onChange={DescriptionChangeHandler} />
                    </div>
                    <Button type="submit">Add Parcel</Button>
                </form>
            </Card>
        </>
    )
}

export default AddParcel;

import React, { useEffect, useState } from "react";


const ParcelForm = (props) => {

    const { from, to, type, date, description, id } = props.dataToChange[0];

    const [parcel, setParcel] = useState({})

    useEffect(() => {
        setParcel({
            from: from,
            to: to,
            type: type,
            date: date,
            description: description,
            id: id
        })
    }, [])

    const changeHandler = (field, value) => {
        setParcel({
            ...parcel,
            [field]: value
        })
    }

    useEffect(() => {
        if (parcel !== undefined) {
            props.checkIfDataPresentsHere(parcel)
        }
    }, [parcel])


    return (
        <>
            <label htmlFor="fromWhichCity">From</label>
            <input
                id='firstCity'
                type='text'
                maxLength='60'
                defaultValue={from}
                onChange={(event) => changeHandler("from", event.target.value)} />

            <label htmlFor="toWhichCity">To</label>
            <input
                id='seconCity'
                type='text'
                maxLength='60'
                defaultValue={to}
                onChange={(event) => changeHandler("to", event.target.value)} />

            <label htmlFor="typeOfParcel">Type Of Parcel</label>
            <select defaultValue={type} onChange={(event) => changeHandler("type", event.target.value)}>
                <option value=''></option>
                <option value='gadgets'>gadgets</option>
                <option value='drinks'>drinks</option>
                <option value='clothes'>clothes</option>
                <option value='medicines'>medicines</option>
                <option value='other'>other</option>
            </select>

            <label htmlFor="date">Date</label>
            <input
                id='age'
                type='date'
                defaultValue={date}
                onChange={(event) => changeHandler("date", event.target.value)} />

            <label htmlFor="description">Description</label>
            <textarea
                rows="2" 
                cols="80" 
                maxLength='60'
                id='descrtp'
                type='text'
                defaultValue={description}
                onChange={(event) => changeHandler("description", event.target.value)} />
        </>
    )
}

export default ParcelForm;
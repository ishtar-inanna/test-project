import React, { useEffect, useState } from 'react';
import AddParcel from './components/User/AddParcel';
import EditParcel from './components/User/EditParcel';
import UserList from './components/User/UserList'


const App = () => {

  const [usersParcels, setParcelsList] = useState([]);
  const [isClicked, setClick] = useState(false);
  const [localStoreInfo, setLocalStoreInfo] = useState();
  const [newParcel, setNewParcel] = useState();

  const addParcelHandler = (cityFrom, cityTo, type, date, description) => {
    setParcelsList([...usersParcels,
    {
      from: cityFrom,
      to: cityTo,
      type: type,
      date: date,
      description: description,
      id: Math.random().toString()
    }]);
  }

  const deleteParcelHandler = (id) => {
    const newList = usersParcels.filter((item) => item.id !== id);
    setParcelsList(newList);
  }

  const editPatcelHandler = (id) => {
    setClick(true);

    const infoFromLocalStro = localStorage.getItem('testObject');
    const info = JSON.parse(infoFromLocalStro).filter((item) => item.id === id);
    setLocalStoreInfo(info)
  }

  const closeEditPatcelHandler = () => {
    setClick(false);
  }

  useEffect(() => {
    localStorage.setItem('testObject', JSON.stringify(usersParcels));
  }, [usersParcels]);

  const checkIfDataPresentsHere = (parcel) => {
    setNewParcel(parcel)
  }

  const onSaveHandler = () => {
    const newList = usersParcels.map((el) => {

      if (el.id === newParcel.id) {
        return {
          from: newParcel.from,
          to: newParcel.to,
          type: newParcel.type,
          date: newParcel.date,
          description: newParcel.description,
          id: newParcel.id
        };
      }
      return el;
    })
    setParcelsList(newList)
    setClick(false)
  }

  return (
    <div>
      <AddParcel onAddParcel={addParcelHandler} />
      <UserList users={usersParcels} onDeleteHandler={deleteParcelHandler} onEditHandler={editPatcelHandler} />
      {isClicked ? <EditParcel
        dataToChange={localStoreInfo}
        onCloseHendler={closeEditPatcelHandler}
        onSaveHandler={onSaveHandler}
        checkIfDataPresentsHere={checkIfDataPresentsHere}
      /> : null}
    </div>
  );
}

export default App;
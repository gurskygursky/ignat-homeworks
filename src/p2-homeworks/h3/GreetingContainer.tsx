import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
    users: UserType[]; // need to fix any
    addUserCallback: (name: string) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trim = e.currentTarget.value.trim();
        setName(trim);// need to fix
        if (trim !== '') {
            setError(null);
        }
    }
    const addUser = () => {
        if (name !== '') {
            addUserCallback(name);
        }
        if (name === '') {
            setError('Invalid Value');
        }
        // alert(`Hello ${name} !`);
        setName('')// need to fix
    }
    const onClickEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onClickEnter={onClickEnter}
        />
    )
}

export default GreetingContainer

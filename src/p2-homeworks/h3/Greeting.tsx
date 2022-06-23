import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string; // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
    addUser: () => void; // need to fix any
    error: string | null; // need to fix any
    totalUsers: number; // need to fix any
    onClickEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onClickEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const textError = error ? s.textError : ''
    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onClickEnter}
            />
            <div className={textError}>{error}</div>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

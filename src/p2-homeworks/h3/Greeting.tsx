import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const disabledInput = name === ''

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={keyPressEnter}/>
            <span>{error}</span>
            <button onClick={addUser} disabled={disabledInput}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

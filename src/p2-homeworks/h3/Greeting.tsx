import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error    // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={addUserEnter}

            />
            <span>{error}</span>
            <button onClick={addUser} disabled={!name}> add </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

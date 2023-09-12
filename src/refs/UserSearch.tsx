import { useState, useRef, useEffect } from 'react'




const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 41},
    {name: 'Frank', age: 53}
];



const UserSearch: React.FC = () => {

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    }, [])

    const inputRef = useRef<HTMLInputElement | null>(null)

    const[name,setName] = useState('')
    const[user,setUser] = useState<{name:string, age:number} | undefined>()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser)
    }

    return ( 
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} />
        <button onClick={onClick}>Search</button>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
    </div>
)}

export default UserSearch;
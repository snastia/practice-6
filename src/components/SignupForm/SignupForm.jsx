import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(window.localStorage.getItem(key) ??
    initialValue)

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export function SignupForm(){

    const [name, setName] = useLocalStorage("name", "")
    const [password, setPassword] = useLocalStorage("password", "")

    const handleChange = (e) => {
        const name = e.currentTarget.name
        switch(name){
            case "name":
                setName(e.currentTarget.value)
                return;
            case "password":
                setPassword(e.currentTarget.value)
                return;

                default:
                    return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name" id="" value={name} onChange={handleChange}/>
            </label>
            <br/>
           <label>
             Password
           <input type="password" name="password" value={password} onChange={handleChange}/>
           </label>
           <br/>
           <button type="submit">Submit</button>
        </form>
    )
}
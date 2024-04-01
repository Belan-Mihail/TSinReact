import React, { useState } from 'react'
import '../App.css'

//TS with useState

type UserType = {
    name:string,
    sessionId: number,
}

const PageForUseState = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState<UserType | null>(null)


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: username,
            sessionId: Math.random(),
        })
    }

  return (
    <div className="useStateExample">
        {user ? (`${user.name} logged in`) : (<form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>)}
        {/* {user?.name} */}
    </div>
  )
}

export default PageForUseState
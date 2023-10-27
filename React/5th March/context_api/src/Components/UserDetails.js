import { useContext } from "react";
import { myContext } from "../App";



const UserDetails = () => {
    const data = useContext(myContext)
    return(
        <>
        <p>Name:{data.name}</p>
        <p>Surname: {data.surname}</p>
        </>
        )
}

export default UserDetails;
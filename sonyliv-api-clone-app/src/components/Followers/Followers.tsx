import axios from "axios";
import { FC, useEffect, useState } from "react";

const Followers: FC = ({followers_url}) =>{
    
    const [followers, setFollowers] = useState([])

 
    useEffect(()=>{
        getFollowers(followers_url)
    }, [])

    async function getFollowers(followers_url) {
        axios.get(followers_url)
        .then((res) => {
            setFollowers(res)
            console.log(followers)
        })   
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
            <h2>Followers</h2>
        </>
    )
}

export default Followers;

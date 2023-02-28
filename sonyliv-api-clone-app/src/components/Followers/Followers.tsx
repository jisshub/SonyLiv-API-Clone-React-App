import axios from "axios";
import { FC, useEffect, useState } from "react";

const Followers: FC = ({followers_url}) =>{
    
    const [followers, setFollowers] = useState([])
    useEffect(()=>{
        getFollowers(followers_url)
    }, [])

    async function getFollowers(followers_url: string) {
        const followers_data = await fetch(followers_url)
        const res = await followers_data.json()
        setFollowers(res)
        console.log(res)
        console.log(followers)
    }

    return(
        <div>
            <h2>Followers</h2>
            {followers.map((follower) => (
                <>
                    <li>{follower.id}</li>
                    <li>{follower.login}</li>
                    <li>{follower.type}</li>
                </>
            ))}
        </div>
    )
}

export default Followers;

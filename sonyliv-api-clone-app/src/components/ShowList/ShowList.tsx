import { FC, useEffect, useState } from "react"

import axios from "axios";
import GithubUsersCard from "../GithubUsersCard/GithubUsersCard";
import './ShowList.css';

const ShowList: FC = () => {

    const [githubUsers, setgithubUsers] = useState([])

    const url = `https://api.github.com/users?since=135`

    async function getShows(url: string) {
        const response = axios.get(url)
        response.then((res)=>{
            setgithubUsers(res.data.slice(0, 20))
        })
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        getShows(url)
    }, [githubUsers])

    return(
        <>
            <div className="users-list">
                {
                    githubUsers.map((user: any)=>{
                        return(
                            <GithubUsersCard {...user}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShowList
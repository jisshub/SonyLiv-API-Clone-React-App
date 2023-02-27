import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import GithubUsersCard from "../GithubUsersCard/GithubUsersCard";

import './ShowList.css';
import Shimmer from "../Shimmer/Shimmer";
import Followers from "../Followers/Followers";


const ShowList: FC = () => {

    const [searchText, setsearchText] = useState('')
    const [githubUsers, setgithubUsers] = useState([])
    const [githubUsersFiltered, setgithubUsersFiltered] = useState([])

    const url = `https://api.github.com/users?since=135`

    useEffect(()=>{
        getShows(url)
    }, [])

    async function getShows(url: string) {
        const response = axios.get(url)
        response.then((res)=>{
            setgithubUsers(res.data.slice(0, 20))
            setgithubUsersFiltered(res.data.slice(0, 20))
        })
        .catch((error)=> console.log(error))
    }


    const handleClick=()=>{
        const data= filterGithubUsers(searchText, githubUsers)
        setgithubUsersFiltered(data)
        setsearchText('')
    }

    const filterGithubUsers = (searchText: any, githubUsers: any) => {
        const dataNew = githubUsers.filter((user: any) => user.login.toLowerCase().includes(searchText.toLowerCase())
        )
        return dataNew;
    }

    return (githubUsersFiltered.length>0) ? (
        <>
            <div>
                <TextField 
                    sx={{mb:3}}
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined"
                    onChange={e=>{setsearchText(e.target.value)}}
                    value={searchText}
                />
                <Button
                    sx={{ml:3, p:2}} 
                    variant="contained"
                    onClick={handleClick}
                    >
                    Search
                </Button>
            </div>
            <div className="users-list">
                {
                    githubUsersFiltered.map((user: any)=>{
                        return(
                        <>
                            <GithubUsersCard {...user} 
                            key={user.id}
                            />
                        </>
                        )
                    })
                }
            </div>
        </>
    ): <Shimmer />
}

export default ShowList
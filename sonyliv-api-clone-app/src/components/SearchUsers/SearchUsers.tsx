// import { useState } from 'react';

// // material UI
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';

// const SearchUsers = ({githubUsers}: any) => {

//     const [searchText, setsearchText] = useState('')
//     const [githubUsersFiltered, setgithubUsersFiltered] = useState([])

//     const handleClick=()=>{
//         const data= filterGithubUsers(searchText, githubUsers)
//         setgithubUsersFiltered(data)
//         console.log(githubUsersFiltered)
//     }

//     const filterGithubUsers = (searchText: any, githubUsers: any) => {
//         const dataNew = githubUsers.filter((user: any) => {
//             return user.login.toLowerCase().includes(searchText.toLowerCase())
//         })
//         return dataNew;
//     }

//     return(
//         <div>
//             <TextField 
//                 sx={{mb:3}}
//                 id="outlined-basic" label="Search" variant="outlined"
//                 onChange={e=>{setsearchText(e.target.value)}}
//             />
//             <Button
//                 sx={{ml:3, p:2}} 
//                 variant="contained"
//                 onClick={handleClick}
//                 >
//                 Search
//             </Button>
//         </div>
//     )
// }

// export default SearchUsers;

import { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import Followers from "../Followers/Followers";

const GithubUsersCard: FC = ({id, login, avatar_url, followers_url}) => {
    console.log(id, login, followers_url)
    return (
    <Card sx={{ maxWidth: 300, mr: 2, mb: 4}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="240"
            image={avatar_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eos tempore neque quas enim asperiores et eligendi nesciunt vero obcaecati.
            </Typography>
            </CardContent>
            <Link to={`/users/${login}/followers`}>
                <Followers followers_url={followers_url} />
            </Link>
        </CardActionArea>
    </Card>
    )
}

export default GithubUsersCard;

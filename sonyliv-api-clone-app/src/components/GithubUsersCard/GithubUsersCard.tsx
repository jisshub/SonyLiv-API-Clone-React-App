import { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const GithubUsersCard: FC = ({id, login, avatar_url}) => {
    return (
        // <div className="user-card">
        //     <div key={id}>
        //         <h2>{login}</h2>
        //         <img src={avatar_url} />
        //     </div>
        // </div>

    <Card sx={{ maxWidth: 300 }}>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eos tempore neque quas enim asperiores et eligendi nesciunt vero obcaecati. Eaque cumque ex quibusdam, obcaecati in explicabo porro perspiciatis incidunt.
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}

export default GithubUsersCard;

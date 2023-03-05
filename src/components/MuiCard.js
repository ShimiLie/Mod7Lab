import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




const MuiCard = () => {
return (
    <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
        <CardMedia
            component="img"
            image="IMG_0361.JPG"
            alt="avatar"
        />
<CardContent>
<Typography gutterBottom variant="h5" component="div">
Lie Anthony
</Typography>
<Typography variant="body2" color="text.secondary">
Software Engineer
</Typography>
</CardContent>
</Card>
)
}


export default MuiCard;
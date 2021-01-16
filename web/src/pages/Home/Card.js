import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    borderRadius: "22px",
    padding: "10px"
  },
});

export default function CardImage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://uploads.metropoles.com/wp-content/uploads/2020/06/12164958/O-p%C3%A3o-que-o-Viado-Amassou.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <span className='name-company'>
                Pão Que o Viado Amassou
            </span>
            <div className="rating-box">
                <Rating name="read-only" value={3} readOnly />
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

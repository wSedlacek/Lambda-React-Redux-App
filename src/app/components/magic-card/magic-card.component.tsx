import React from 'react';

import { Card, CardContent, Typography, makeStyles, CardMedia } from '@material-ui/core';
import { MagicCard } from '../../models/MagicCard';

interface StyleProps {
  color: string;
}

const useStyles = makeStyles({
  root: {
    backgroundColor: (props: StyleProps) => {
      switch (props.color) {
        case 'R':
          return 'red';
        case 'G':
          return 'green';
        case 'B':
          return 'black';
        case 'W':
          return 'yellow';
        case 'U':
          return 'blue';
        default:
          return 'white';
      }
    },
    color: (props: StyleProps) => {
      switch (props.color) {
        case 'W':
          return 'black';
        case undefined:
          return 'black';
        default:
          return 'white';
      }
    },
    height: 500,
    width: 600,
  },
  img: {
    height: 400,
    width: 600,
  },
});

type MagicCardProps = {
  card: MagicCard;
};

const MagicCardComponent = (props: MagicCardProps) => {
  const { card } = props;
  const classes = useStyles({ color: card.color_identity[0] });

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.img} component='img' image={card.image_uris.art_crop} />
      <CardContent>
        <Typography variant='h3' gutterBottom>
          {card.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { MagicCardComponent };

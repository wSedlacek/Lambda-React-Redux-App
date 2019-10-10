import React from 'react';

import { Card, Typography } from '@material-ui/core';
import { MagicCard } from '../../models/MagicCard';

type MagicCardProps = {
  card: MagicCard;
};

const MagicCardComponent = (props: MagicCardProps) => {
  const { card } = props;
  return (
    <Card>
      <Typography variant='h3' gutterBottom>
        {card.name}
      </Typography>
    </Card>
  );
};

export { MagicCardComponent };

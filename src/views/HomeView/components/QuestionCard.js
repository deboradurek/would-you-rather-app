import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function QuestionCard() {
  return (
    <Card variant="outlined">
      <div>avatar</div>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Olsen George asks:
        </Typography>
        <Typography variant="h5" component="h2">
          Would you rather
        </Typography>
        <br />
        <Typography color="textSecondary" variant="body2" component="p">
          ... be a dog ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Pull</Button>
      </CardActions>
    </Card>
  );
}

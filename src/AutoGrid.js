import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import ColorPicker from './ColorPicker';
import AlarmSetter from './AlarmSetter';
import background from './images/background.jpeg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(2),
    background: 'rgba(255,255,255,.90)',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={24}>
            <p>Start everything</p>
            <Button name="Killall" topic="/bedroom/killall" payload="1" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={24}>
            <p>Rainbow Colors</p>
            <Button name="Mirror" topic="/bedroom/bed/rainbow" payload="1" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={24}>
            <p>Mirror Lights</p>
            <Button name="Mirror" topic="/bedroom/mirror/toggle" payload="1" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={24}>
            <p>Color Picker</p>
            <ColorPicker name="ColorPicker" topic="/bedroom/rgb" payload="#ffffff" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
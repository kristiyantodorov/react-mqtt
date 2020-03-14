import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import ColorPicker from './ColorPicker';
import logo from './logo512.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs>
          <Paper className={classes.paper}>
          <img src={logo} className="App-logo" alt="logo" />
          </Paper>
        </Grid> */}
        <Grid item xs>
          <Paper className={classes.paper}>
            <p>All Lights</p>
            <Button name="Killall" topic="/bedroom/killall" payload="1" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <p>Mirror Lights</p>
            <Button name="Mirror" topic="/bedroom/mirror/toggle" payload="1" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <p>Rainbow Bed Lights</p>
            <Button name="Mirror" topic="/bedroom/bed/rainbow" payload="1" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <p>Color Picker</p>
            <ColorPicker name="ColorPicker" topic="/bedroom/rgb" payload="#ffffff" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
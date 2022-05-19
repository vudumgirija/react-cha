import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { borderRadius } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  borderRadius: '50%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="data:image/jpeg;base64,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" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                My profile
              </Typography>
              <Typography variant="body2" gutterBottom>
                   <TextField id="outlined-basic" label="Name" variant="outlined" />
                   
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <TextField id="outlined-basic" label="Email" variant="outlined" />
             
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <TextField id="outlined-basic" label="password" variant="outlined" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button variant="contained">Edit profile</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

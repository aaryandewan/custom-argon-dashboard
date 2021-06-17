import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:'white',
        '& .MuiFormControl-root': {
            backgroundColor:'white',
            width: "70%",
            marginTop:theme.spacing(2),
            marginLeft:theme.spacing(3),
            marginBottom:theme.spacing(2),

        }
    }
}))



const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function ArgonForm() {
    const [values, setValues] = useState(initialFValues)
    const classes = useStyles();

    const  handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]:value
        })

    }

    return (
        <div>
            <Paper variant="outlined">
            <form className={classes.root}>
                <Grid container direction="column">
                    <Grid item xs={6}>
                    <TextField variant="outlined" name='fullName' label="Full Name" value={values.fullName} onChange={handleInputChange}></TextField>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField variant="outlined" name='email' label="Email" value={values.email} onChange={handleInputChange}></TextField>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </div>
    )
}

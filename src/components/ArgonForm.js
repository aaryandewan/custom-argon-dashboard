import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Slider from "@material-ui/core/Slider";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    "& .MuiFormControl-root": {
      backgroundColor: "white",
      //   width: "100%",
      //   marginTop: theme.spacing(2),
      //   marginLeft: theme.spacing(3),
      //   marginRight: "auto",
      //   marginLeft: "auto",

      //   marginBottom: theme.spacing(2),
    },
    "& .MuiGrid-container": {
      backgroundColor: "white",
      // marginTop: "50px",
      marginBottom: "35px",
    },
  },
  paper: {
    backgroundColor: "white",
    width: "75%",
    padding: "20px",
    // margin: "0 auto",
  },
  formControl: {
    minWidth: 120,
    marginBottom: "35px",
  },
}));

const initialFValues = {
  id: 0,
  fullName: "",
  branch: "",
  grName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function ArgonForm() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const [radioValue, setRadioValue] = useState("CS");

  const [values, setValues] = useState(initialFValues);
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [passingYear, setPassingYear] = useState("");
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  const handlePassingYearChange = (event) => {
    setPassingYear(event.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper variant="outlined" className={classes.paper}>
        <form className={classes.root}>
          <Grid container direction="column">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  name="fullName"
                  label="Full Name"
                  value={values.fullName}
                  onChange={handleInputChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  name="email"
                  label="Thapar Email"
                  value={values.email}
                  onChange={handleInputChange}
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  id="filled-number"
                  name="mobile"
                  label="Roll Number"
                  type="number"
                  value={values.mobile}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  name="branch"
                  label="Branch"
                  value={values.branch}
                  onChange={handleInputChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  name="grName"
                  label="GR Name"
                  value={values.grName}
                  onChange={handleInputChange}
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={5}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Passing Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={passingYear}
                    onChange={handlePassingYearChange}
                  >
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container>
              <FormControl>
                <FormLabel component="legend">
                  Please choose your subjects
                </FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                      />
                    }
                    label="Microwave Engg."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                    label="Information and Communication Technology"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                      />
                    }
                    label="Optimization Techniques"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedD}
                        onChange={handleChange}
                        name="checkedD"
                      />
                    }
                    label="Engineering Design"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid container>
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose your minor</FormLabel>
                <RadioGroup
                  // aria-label="gender"
                  // name="gender1"
                  value={radioValue}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="CS"
                    control={<Radio />}
                    label="Computer Sci."
                  />
                  <FormControlLabel
                    value="AR"
                    control={<Radio />}
                    label="Augmented Reality"
                  />
                  <FormControlLabel
                    value="French"
                    control={<Radio />}
                    label="French"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

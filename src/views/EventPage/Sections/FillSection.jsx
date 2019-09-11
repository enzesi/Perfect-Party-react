import React from "react";
import axios from "axios";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import LocationSection from "./LocationSection.jsx";
import FlowerSection from "./FlowerSection.jsx";
import CateringSection from "./CateringSection.jsx";
import EntertainSection from "./EntertainSection.jsx";

import { Link } from "react-router-dom";

import TextField from '@material-ui/core/TextField';

import ls from 'local-storage';

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.jsx";
import { withRouter } from "react-router-dom";

import { createHashHistory } from 'history'

import fillStyle from "assets/jss/material-kit-react/views/eventPageSections/fillStyle.jsx";

export const history = createHashHistory()

class FillSection extends React.Component {
  constructor(props) {
    super(props)
	this.handleChange = this.handleChange.bind(this)
	this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
	console.log("on change ,", name)
  };
  
  handleAdd() {
    window.alert("Success! The window will close once you click OK")
	setTimeout(() => window.close(), 500)
  }

  state = {
  	  name: '',
	  size: 0,
	  budget: 0,
	  start: "",
	  end: "",
	  locationChoice: "a",
	  flowerChoice: "a",
	  cateringChoice: "a",
	  entertainChoice: "a",
	  location: 0,
	  flower: 0,
	  catering: 0,
	  entertain: 0,

	  type: 1,
	  emailList: "",
	  status: 1,
	  visibility: '1',
	  clientId: ls.get('clientId'),
  }

  handleSubmit = event => {
  	  event.preventDefault()
	  if (this.state.locationChoice === "a") {
	  	  this.state.location = 1
	  } else if (this.state.locationChoice === "b") {
	  	  this.state.location = 2
	  } else if (this.state.locationChoice === "c") {
	  	  this.state.location = 3
	  } else if (this.state.locationChoice === "d") {
	  	  this.state.location = 4
	  }
	  if (this.state.flowerChoice === "a") {
	  	  this.state.flower = 1
	  } else if (this.state.flowerChoice === "b") {
	  	  this.state.flower = 2
	  } else if (this.state.flowerChoice === "c") {
	  	  this.state.flower = 3
	  } else if (this.state.flowerChoice === "d") {
	  	  this.state.flower = 4
	  }
	  if (this.state.cateringChoice === "a") {
	  	  this.state.catering = 1
	  } else if (this.state.cateringChoice === "b") {
	  	  this.state.catering = 2
	  } else if (this.state.cateringChoice === "c") {
	  	  this.state.catering = 3
	  } else if (this.state.cateringChoice === "d") {
	  	  this.state.catering = 4
	  }
	  if (this.state.entertainChoice === "a") {
	  	  this.state.entertain = 1
	  } else if (this.state.entertainChoice === "b") {
	  	  this.state.entertain = 2
	  } else if (this.state.entertainChoice === "c") {
	  	  this.state.entertain = 3
	  } else if (this.state.entertainChoice === "d") {
	  	  this.state.entertain = 4
	  }
	  const data = {
	  	  eventname: this.state.name,
		  numattend: this.state.size,
		  budget: this.state.budget,
		  location: this.state.location,
		  flower: this.state.flower,
		  catering: this.state.catering,
		  entertain: this.state.entertain,
		  start: this.state.start,
		  end: this.state.end,
		  type: this.state.type,
		  emailList: this.state.emailList,
		  status: this.state.status,
		  visibility: this.state.visibility,
		  clientId: this.state.clientId,
	  }
	  axios.post('http://localhost:3003/createEvent', {data}).then(res => {
	  /*axios.post('https://jsonplaceholder.typicode.com/users', {user}).then(res => { */
	  		console.log(res)
			console.log(res.data)
	  })
  }
  render() {
    const { classes } = this.props;
	const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h3 className={classes.title}>
              To add a new event, please fill in the options bellow
            </h3>
			<form onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="name"
                        label="Event Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="size"
                        label="Number of Attendees"
						type="number"
                        className={classes.textField}
                        value={this.state.size}
                        onChange={this.handleChange('size')}
                        margin="normal"
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="budget"
                        label="Budget"
						type="number"
                        className={classes.textField}
                        value={this.state.budget}
                        onChange={this.handleChange('budget')}
                        margin="normal"
                  />
			    </GridItem>
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="start"
                        label="Start Date (YYYY-MM-DD)"
                        className={classes.textField}
                        value={this.state.start}
                        onChange={this.handleChange('start')}
                        margin="normal"
                  />
			    </GridItem>		
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="end"
                        label="End Date (YYYY-MM-DD)"
                        className={classes.textField}
                        value={this.state.end}
                        onChange={this.handleChange('end')}
                        margin="normal"
                  />
			    </GridItem>		

				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.locationChoice === "a"}
						onChange={this.handleChange('locationChoice')}
						value="a"
						name="radio button enabled"
						aria-label="A"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="PAC"
				  />
				</div>
				</GridItem>			
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.locationChoice === "b"}
						onChange={this.handleChange('locationChoice')}
						value="b"
						name="radio button enabled"
						aria-label="B"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="CIF"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.locationChoice === "c"}
						onChange={this.handleChange('locationChoice')}
						value="c"
						name="radio button enabled"
						aria-label="C"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="SLC"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.locationChoice === "d"}
						onChange={this.handleChange('locationChoice')}
						value="d"
						name="radio button enabled"
						aria-label="D"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="DC"
				  />
				</div>
				</GridItem>
				</GridContainer>

				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.flowerChoice === "a"}
						onChange={this.handleChange('flowerChoice')}
						value="a"
						name="radio button enabled"
						aria-label="A"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Floral Option 1"
				  />
				</div>
				</GridItem>			
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.flowerChoice === "b"}
						onChange={this.handleChange('flowerChoice')}
						value="b"
						name="radio button enabled"
						aria-label="B"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Floral Option 2"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.flowerChoice === "c"}
						onChange={this.handleChange('flowerChoice')}
						value="c"
						name="radio button enabled"
						aria-label="C"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Floral Option 3"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.flowerChoice === "d"}
						onChange={this.handleChange('flowerChoice')}
						value="d"
						name="radio button enabled"
						aria-label="D"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="No Flowers"
				  />
				</div>
				</GridItem>
				</GridContainer>



				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.cateringChoice === "a"}
						onChange={this.handleChange('cateringChoice')}
						value="a"
						name="radio button enabled"
						aria-label="A"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Catering Option 1"
				  />
				</div>
				</GridItem>			
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.cateringChoice === "b"}
						onChange={this.handleChange('cateringChoice')}
						value="b"
						name="radio button enabled"
						aria-label="B"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Catering Option 2"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.cateringChoice === "c"}
						onChange={this.handleChange('cateringChoice')}
						value="c"
						name="radio button enabled"
						aria-label="C"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Catering Option 3"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.cateringChoice === "d"}
						onChange={this.handleChange('cateringChoice')}
						value="d"
						name="radio button enabled"
						aria-label="D"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="No Food"
				  />
				</div>
				</GridItem>
				</GridContainer>

				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.entertainChoice === "a"}
						onChange={this.handleChange('entertainChoice')}
						value="a"
						name="radio button enabled"
						aria-label="A"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Entertainment Option 1"
				  />
				</div>
				</GridItem>			
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.entertainChoice === "b"}
						onChange={this.handleChange('entertainChoice')}
						value="b"
						name="radio button enabled"
						aria-label="B"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Entertainment Option 2"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.entertainChoice === "c"}
						onChange={this.handleChange('entertainChoice')}
						value="c"
						name="radio button enabled"
						aria-label="C"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="Entertainment Option 3"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.entertainChoice === "d"}
						onChange={this.handleChange('entertainChoice')}
						value="d"
						name="radio button enabled"
						aria-label="D"
						icon={
						  <FiberManualRecord
							className={classes.radioUnchecked}
						  />
						}
						checkedIcon={
						  <FiberManualRecord className={classes.radioChecked} />
						}
						classes={{
						  checked: classes.radio
						}}
					  />
					}
					classes={{
					  label: classes.label
					}}
					label="No Entertainment"
				  />
				</div>
				</GridItem>
				</GridContainer>


                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button type="submit" color="primary" onClick={this.handleAdd}>Create Your Event</Button>
					<br />
					<Link to="/" className={classes.dropdownLink}
					  color="transparent"
					  target="_blank"
					  className={classes.navLink}>
					  Back to Home Page
					</Link>
                  </GridItem>
                </GridContainer>
            </form>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

FillSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(fillStyle)(FillSection);

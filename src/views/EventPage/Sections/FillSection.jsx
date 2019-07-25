/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

import TextField from '@material-ui/core/TextField';

import ls from 'local-storage';

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.jsx";

import fillStyle from "assets/jss/material-kit-react/views/eventPageSections/fillStyle.jsx";

class FillSection extends React.Component {
  constructor(props) {
    super(props)
	this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
	console.log("on change ,", name)
  };

  state = {
  	  name: '',
	  size: 0,
	  budget: 0,
	  start: 0,
	  end: 0,
	  locationChoice: "a",
	  flowerChoice: "a",
	  cateringChoice: "a",
	  entertainChoice: "a",

	  type: 1,
	  emailList: "",
	  status: 1,
	  visibility: 1,
	  clientId: ls.get('clientId'),
  }

  handleSubmit = event => {
  	  event.preventDefault()
	  const user = {
	  	  eventname: this.state.name,
		  numattend: this.state.size,
		  budget: this.state.budget,
		  location: this.state.locationChoice,
		  flower: this.state.flowerChoice,
		  catering: this.state.cateringChoice,
		  entertain: this.state.entertainChoice,
		  start: this.state.start,
		  end: this.state.end,
		  type: this.state.type,
		  emailList: this.state.emailList,
		  status: this.state.status,
		  visibility: this.state.visibility,
		  clientId: this.state.clientId,
	  }
	  /*axios.post('http://localhost:3003/createEvent', {data}).then(res => {*/
	  axios.post('https://jsonplaceholder.typicode.com/users', {user}).then(res => {
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
              Please fill in the options bellow
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
                        label="Start Date (YYMMDDHHMM 24H)"
						type="number"
                        className={classes.textField}
                        value={this.state.start}
                        onChange={this.handleChange('start')}
                        margin="normal"
                  />
			    </GridItem>		
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="end"
                        label="End Date (YYMMDDHHMM 24H)"
						type="number"
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
                    <Button type="submit" color="primary">Create Your Event</Button>
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

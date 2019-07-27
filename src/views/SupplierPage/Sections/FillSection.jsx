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
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
	console.log("on change ,", name)
  };

  state = {
	sid: 0,
	pid: 0,
	price: 0,
	category: "a",
	type: "",
  }

  handleSubmit = event => {
  	  event.preventDefault()
	  if (this.state.category === "a") {
	  	  this.state.type = "Flower"
	  } else if (this.state.category === "b") {
	  	  this.state.type = "Entertainment"
	  } else if (this.state.category === "c") {
	  	  this.state.type = "Catering"
	  } 
	  const data = {
	  	  supplierId: this.state.sid,
		  productId: this.state.pid,
		  price: this.state.price,
		  type: this.state.type,
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
              Please fill in the options bellow
            </h3>
			<form onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="sid"
                        label="Supplier ID"
						type="number"
                        className={classes.textField}
                        value={this.state.sid}
                        onChange={this.handleChange('sid')}
                        margin="normal"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="pid"
                        label="Product ID"
						type="number"
                        className={classes.textField}
                        value={this.state.pid}
                        onChange={this.handleChange('pid')}
                        margin="normal"
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="price"
                        label="Unit Price"
						type="number"
                        className={classes.textField}
                        value={this.state.price}
                        onChange={this.handleChange('price')}
                        margin="normal"
                  />
			    </GridItem>

				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.category === "a"}
						onChange={this.handleChange('category')}
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
					label="Flower"
				  />
				</div>
				</GridItem>			
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.category === "b"}
						onChange={this.handleChange('category')}
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
					label="Entertainment"
				  />
				</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={3}>
				<div className={wrapperDiv}>
				  <FormControlLabel
					control={
					  <Radio
						checked={this.state.category === "c"}
						onChange={this.handleChange('category')}
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
					label="Catering"
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
                    <Button type="submit" color="primary">Add</Button>
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

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

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import LocationSection from "./LocationSection.jsx";
import FlowerSection from "./FlowerSection.jsx";
import CateringSection from "./CateringSection.jsx";
import EntertainSection from "./EntertainSection.jsx";

import TextField from '@material-ui/core/TextField';

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.jsx";

import fillStyle from "assets/jss/material-kit-react/views/eventPageSections/fillStyle.jsx";

class FillSection extends React.Component {
  constructor(props) {
    super(props)
    this.nameChange = this.nameChange.bind(this)
    this.sizeChange = this.sizeChange.bind(this);
    this.budgetChange = this.budgetChange.bind(this);
  }
  nameChange = event => {
  	  this.setState({ name: event.target.value});
  };
  
  sizeChange = event => {
  	  this.setState({ size: event.target.value});
	  console.log(this.size)
  };

  budgetChange = event => {
  	  this.setState({ budget: event.target.value});
	  console.log(this.budget)
  };

  state = {
  	  name: '',
	  size: '',
	  budget: '',
  }

  handleSubmit = event => {
  	  event.preventDefault()
	  const user = {
	  	  eventname: this.state.name,
		  numattend: this.state.size,
		  budget: this.state.budget,
	  }
	  axios.post('http://localhost:3003/createEvent', {user}).then(res => {
	  		console.log(res)
			console.log(res.data)
	  })
  }
  render() {
    const { classes } = this.props;
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
                        onChange={this.nameChange}
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
                        onChange={this.sizeChange}
                        margin="normal"
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={8}>
				  <TextField
                        id="size"
                        label="Budget"
						type="number"
                        className={classes.textField}
                        value={this.state.budget}
                        onChange={this.budgetChange}
                        margin="normal"
                  />
			    </GridItem>			

				<LocationSection />
				<FlowerSection />
				<CateringSection />
				<EntertainSection />

				<InfoArea
				  title="Cost"
				  icon={Timeline}
				  iconColor="green"
				/>
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

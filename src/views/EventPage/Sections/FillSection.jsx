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

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import InfoArea from "components/InfoArea/InfoArea.jsx";

import fillStyle from "assets/jss/material-kit-react/views/eventPageSections/fillStyle.jsx";

class FillSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h3 className={classes.title}>
              Please fill in the options bellow
            </h3>
            <form>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="Give the Event a Name..."
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="Number of Attendees..."
                    id="size"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
				<GridItem xs={12} sm={12} md={8}>
					<CustomInput
					  labelText="Budget in $..."
					  id="budget"
					  formControlProps={{
						fullWidth: true,
					  }}
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
                    <Button color="primary">Create Your Event</Button>
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

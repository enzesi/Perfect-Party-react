import React from "react";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class FlowerSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEnabled: "a",
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  render(){
    const { classes } = this.props;
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div>
	  	<GridContainer justify="center">
		<GridItem xs={12} sm={12} md={3}>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Radio
                checked={this.state.selectedEnabled === "a"}
                onChange={this.handleChangeEnabled}
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
                checked={this.state.selectedEnabled === "b"}
                onChange={this.handleChangeEnabled}
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
                checked={this.state.selectedEnabled === "c"}
                onChange={this.handleChangeEnabled}
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
                checked={this.state.selectedEnabled === "d"}
                onChange={this.handleChangeEnabled}
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
      </div>
    );
  }
}

export default withStyles(styles)(FlowerSection);
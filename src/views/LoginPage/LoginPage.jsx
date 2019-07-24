import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

import { withRouter } from "react-router-dom";
import ls from 'local-storage';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      clientId: null,
      password: null,
      email: null,
      showPassword: false
    };
    this.handleClickButton = this.handleClickButton.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  handleClickButton(state) {
    let path;
    if (state == 'logIn') {
      let data = {
        email: this.state.email,
        password: this.state.password
      }
      console.log('log client')
      console.log(data)
      axios.post('http://localhost:3003/clientPassword', { data })
        .then(res => {
          console.log(res)
          console.log(res.data)
          ls.set('clientId', res.data)
          path = '/profile-page'
        })
    } else if (state == 'signUp') {
      path = '/signup-page'
    }
    this.props.history.push(path)
  }

  handleEmailChange(event) {
    if (event) {
      this.setState({
        email: event.target.value
      })
      console.log('handleEmailChange called')
    }
  }

  handlePassChange(event) {
    if (event) {
      this.setState({
        password: event.target.value
      })
      console.log('handlePassChange called')
    }
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Perfect Party"
          rightLinks={<HeaderLinks />}
        // {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Let's get started</h4>
                    </CardHeader>
                    <CardBody>
                      <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        margin="normal"
                      />

                      <TextField
                        id="pass"
                        className={clsx(classes.margin, classes.textField)}
                        variant="filled"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handlePassChange}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={() => this.handleClickButton('logIn')}>
                        Log In
                      </Button>
                      <Button simple color="primary" size="lg" onClick={() => this.handleClickButton("singUp")}>
                        Sign Up
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(LoginPage);

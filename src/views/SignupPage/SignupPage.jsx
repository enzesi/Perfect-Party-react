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

import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import ls from 'local-storage';
import axios from 'axios';
import { thisExpression } from "@babel/types";


class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden",
            email: null,
            password: null,
            name: null,
            phone: null,
            billing: null,
            address: null,
            adver: true,
        };
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleClickButton(event) {
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            // billing: this.state.billing,
            // address: this.state.address,
            address: '',
            billing: '',
            password: this.state.password,
            adver: this.state.adver,
        }
        console.log('log client')
        console.log(data)
        axios.post('http://localhost:3003/createClient', { data })
            .then(res => {
                console.log(res)
                console.log(res.data)
                ls.set('clientId', res.data)
                let path = '/profile-page'
                this.props.history.push(path)
            })
    }

    handleNameChange(event) {
        if (event) {
            this.setState({
                name: event.target.value
            })
        }
    }

    handlePhoneChange(event) {
        if (event) {
            this.setState({
                phone: event.target.value
            })
        }
    }

    handleEmailChange(event) {
        if (event) {
            this.setState({
                email: event.target.value
            })
        }
    }

    handlePassChange(event) {
        if (event) {
            this.setState({
                password: event.target.value
            })
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
                                            <h4>Sign Up</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <TextField
                                                id="name"
                                                label="Name"
                                                className={classes.textField}
                                                value={this.state.name}
                                                onChange={this.handleNameChange}
                                                margin="normal"
                                            />
                                            <TextField
                                                id="phone"
                                                label="Phone Number"
                                                className={classes.textField}
                                                value={this.state.phone}
                                                onChange={this.handlePhoneChange}
                                                margin="normal"
                                            />
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
                                            <Button simple color="primary" size="lg" onClick={() => this.handleClickButton()}>
                                                Get Started
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

SignupPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(loginPageStyle)(SignupPage);

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Schedule from "@material-ui/icons/List";
import List from "@material-ui/icons/Schedule";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import axios from "axios";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import MaterialTable from 'material-table';
import ls from 'local-storage';

class ProfilePage extends React.Component {
  constructor(props) {
    let history = [
      { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]
    let upcoming = [
      { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]
    let favourites = [
      { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]

    let columns = [
      { title: 'Event Id', field: 'eventId'},
      { title: 'Title', field: 'title' },
      { title: 'Number of Invitees', field: 'invitees', type: 'numeric' },
      { title: 'Budget', field: 'budget', type: 'numeric' },
      { title: 'Start Date', field: 'start', type: 'date' },
      { title: 'End Date', field: 'end', type: 'date' },
      { title: 'Location', field: 'location' },
      { title: 'Menu', field: 'menu' },
      { title: 'Flower', field: 'flower' },
      { title: 'Music', field: 'music' },
    ]
    super(props);
    this.state = {
      columns: columns,
      history: history,
      upcoming: upcoming,
      favourites: favourites,
      clientId: ls.get('clientId'),
      name: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/getClientName', {
      params: {
        id: this.state.clientId
      }
    }).then(res => {
      console.log('1: ', res.clientname)
      this.setState({ name: res.clientname }, function () {
        axios.get('http://localhost:3003/pastEvent').then(res => {
          console.log('2: ', res)
          this.setState({ history: res }, function() {
            axios.get('http://localhost:3003/upComingEvent', {
              params: {
                id: this.state.clientId
              }
            }).then(res => {
              console.log('3: ', res)
              this.setState({ upcoming: res }, function() {
                axios.get('http://localhost:3003/favouriteEvents', {
                  params: {
                    id: this.state.clientId
                  }
                }).then(res => {
                  console.log('4: ', res)
                  this.setState({ favourites: res });
                })
              });
            })
          });
        })
      });
    })
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Perfect Party"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{this.state.name}}</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Event History",
                        tabIcon: List,
                        tabContent: (
                          <MaterialTable
                            title="Past Event"
                            columns={this.state.columns}
                            data={this.state.history}
                            actions={[
                              {
                                icon: 'save',
                                tooltip: 'Favourite',
                                onClick: (event, rowData) => {
                                  // Do favourtie operation
                                  let data = {
                                    clientId: this.state.clientId,
                                    eventId: rowData['eventId']
                                  }
                                  console.log('favourite event')
                                  console.log('log data')
                                  console.log(data)
                                  axios.get('http://localhost:3003/createFavEvent', { 
                                    params: {
                                      clientid: data.clientId,
                                      eventid: data.eventId
                                    }
                                   }).then(res => {
                                    
                                  })
                                }
                              }
                            ]}
                          />
                        )
                      },
                      {
                        tabButton: "Upcoming Events",
                        tabIcon: Schedule,
                        tabContent: (
                          <MaterialTable
                            title="Future Events"
                            columns={this.state.columns}
                            data={this.state.upcoming}
                            actions={[
                              {
                                icon: 'save',
                                tooltip: 'Favourite',
                                onClick: (event, rowData) => {
                                  // Do favourtie operation
                                  let data = {
                                    clientId: this.state.clientId,
                                    eventId: rowData['eventId']
                                  }
                                  console.log('favourite event')
                                  console.log('log data')
                                  console.log(data)
                                  axios.get('http://localhost:3003/createFavEvent', { 
                                    params: {
                                      clientid: data.clientId,
                                      eventid: data.eventId
                                    }
                                   }).then(res => {
                                    
                                  })
                                }
                              }
                            ]}
                          />
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <MaterialTable
                            title="My Favourites"
                            columns={this.state.columns}
                            data={this.state.favourites}
                            actions={[
                              {
                                icon: 'delete',
                                tooltip: 'Unfavourite',
                                onClick: (event, rowData) => {
                                  // Do unsave operation
                                  let data = {
                                    clientId: this.state.clientId,
                                    eventId: rowData['eventId']
                                  }
                                  axios.get('http://localhost:3003/deleteFavEvent', {
                                    params: {
                                      clientid: data.clientId,
                                      eventid: data.eventId
                                    } 
                                  }).then(res => {
                                    console.log(res.data)
                                    axios.get('http://localhost:3003/favouriteEvents', {
                                      params: {
                                        clientid: data.clientId,
                                      }
                                    }).then(res => {
                                    console.log(res.data)
                                    this.setState({                    
                                      favourites: res.data
                                    });
                                  })
                                  })
                                }
                              }
                            ]}
                          />
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);

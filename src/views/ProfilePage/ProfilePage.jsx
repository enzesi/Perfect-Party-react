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
    // let history = [
    //   { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
    //   { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    // ]
    // let upcoming = [
    //   { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
    //   { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    // ]
    // let favourites = [
    //   { eventId: '2', title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
    //   { eventId: '12', title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    // ]

    let columns = [
      { title: 'Event Id', field: 'eventid' },
      { title: 'Title', field: 'title' },
      { title: 'Number of Invitees', field: 'capacity', type: 'numeric' },
      { title: 'Budget', field: 'budget', type: 'numeric' },
      { title: 'Start Date', field: 'startdate', type: 'date' },
      { title: 'End Date', field: 'enddate', type: 'date' },
      { title: 'Location', field: 'location' },
      { title: 'Menu', field: 'catering' },
      { title: 'Flower', field: 'flower' },
      { title: 'Music', field: 'entertainment' },
    ]
    super(props);
    this.state = {
      columns: columns,
      history: [],
      upcoming: [],
      favourites: [],
      clientId: ls.get('clientId'),
      name: null,
    };
  }

  componentDidMount() {
    var id = this.state.clientId[0]['clientid']
    axios.get('http://localhost:3003/clientName/' + id).then(res => {
      console.log(res.data)
      this.setState({ name: res.data[0]['clientname']}, function () {
        axios.get('http://localhost:3003/pastEvent/' + id).then(res => {
          console.log('2: ', res)
          let history = []
          var data = res.data
          for(let i = 0; i < data.length; i++) {
            history.push({
              eventid: data[i]["eventid"],
              title: data[i]["eventid"],
              capacity: data[i]['capacity'],
              budget: data[i]['budget'],
              startdate: data[i]['startdate'],
              enddate: data[i]['enddate'],
              location: data[i]['location'],
              catering: data[i]['catering'],
              flower: data[i]['flower'],
              entertainment: data[i]['entertainment'],
            })
          }
          console.log(history)
          this.setState({ history: history}, function() {
            axios.get('http://localhost:3003/upComingEvent/' + id).then(res => {
              console.log('3: ', res)

              this.setState({ upcoming: res.data}, function() {
                axios.get('http://localhost:3003/favouriteEvents/' + id).then(res => {
                  console.log('4: ', res)
                  this.setState({ favourites: res.data });
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
                      <h3 className={classes.title}>{this.state.name}</h3>
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
                                  let clientId = this.state.clientId[0]['clientid']
                                  let eventId =  rowData['eventid']
  
                                  axios.get('http://localhost:3003/createFavEvent/' + clientId + '/' + eventId).then(res => {
                  
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
                                  let clientId = this.state.clientId[0]['clientid']
                                  let eventId =  rowData['eventid']
  
                                  axios.get('http://localhost:3003/createFavEvent/' + clientId + '/' + eventId).then(res => {
                  
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
                                  
                                  var id = this.state.clientId[0]['clientid']
                                  var eventid = rowData['eventid']
                                  console.log(id)
                                  console.log(eventid)
                          
                                  axios.get('http://localhost:3003/deleteFavEvent/' + id + '/' + eventid).then(res => {
                                    console.log(res.data)
                                    var id = this.state.clientId[0]['clientid']
                                    axios.get('http://localhost:3003/favouriteEvents/' + id).then(res => {
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

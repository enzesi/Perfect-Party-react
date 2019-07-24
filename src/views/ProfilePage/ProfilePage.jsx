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

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import MaterialTable from 'material-table';

class ProfilePage extends React.Component {
  constructor(props) {
    let history = [
      { title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]
    let upcoming = [
      { title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]
    let favourites = [
      { title: 'Mehmet', location: 'Baran', budget: 1987, menu: 63 },
      { title: 'Zerya Betül', menu: 'Baran', flower: 2017, budget: 34, },
    ]
    let columns = [
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
      favourites: favourites
    };
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
                      <h3 className={classes.title}>Christian Louboutin</h3>
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
                                  // Do save operation
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
                                  // Do save operation
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
                                icon: 'save',
                                tooltip: 'Favourite',
                                onClick: (event, rowData) => {
                                  // Do save operation
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

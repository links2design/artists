import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Search from "../Search/Search";
import Artist from "../Artist/Artist";
import Event from "../Events/Events";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "",
      searchKey: "",
      items: [],
      events: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler(e) {
    e.preventDefault();
    if (this.state.searchKey.length > 0) {
      const url =
        "https://rest.bandsintown.com/artists/" +
        this.state.searchKey +
        "?app_id=test";
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(myJson => {
          this.setState(prevState => ({
            items: []
          }));

          this.setState(prevState => ({
            items: [...prevState.items, myJson]
          }));
        });
      console.log(this.state);
    } else {
      this.setState({ items: [] });
    }
  }

  getEvents(e) {
    // e.preventDefault();
    const url =
      "https://rest.bandsintown.com/artists/" + e.name + "/events?app_id=test";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState(prevState => ({
          events: []
        }));

        if (myJson && myJson.length) {
          this.setState({ events: myJson });
        }
      });
    console.log(this.state);
  }

  render() {
    const { searchKey } = this.state; //destracting the states

    return (
      <Container>
        <Grid container justify="center">
          <Grid item lg={6} sm={8} xs={12}>
            <Search
              formsubmit={this.submitHandler}
              name="searchKey"
              placeholder="Search Artists"
              inputprops="search artist here"
              onChange={this.changeHandler}
              buttnlabel="search"
            />
          </Grid>
        </Grid>
        <Typography>
          {this.state.items.length ? (
            <span>Results found for " {this.state.searchKey} "</span>
          ) : this.state.searchKey.length ? (
            <span>no resulots found</span>
          ) : (
            <span>Enter query to continue</span>
          )}
        </Typography>

        <Grid container spacing={3}>
          {this.state.items.length
            ? this.state.items.map(item => (
                <Grid
                  item
                  sm={6}
                  key={item.id}
                  className={this.props.classes.resultWrap}
                >
                  <Artist
                    imgUrl={item.image_url}
                    name={item.name}
                    fbUrl={item.facebook_page_url}
                    getData={() => {
                      this.getEvents(item);
                    }}
                  />
                </Grid>
              ))
            : ""}
        </Grid>

        <Grid container spacing={3}>
          {this.state.events.map(event => (
            <Grid item sm={6} key={event.id}>
              <Event
                country={event.venue.country}
                city={event.venue.city}
                venue={event.venue.name}
                date={event.datetime}
              />
              <Box></Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Home);

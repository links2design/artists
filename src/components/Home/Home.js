import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      items: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler(e) {
    e.preventDefault();
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
  }
  render() {
    const { searchKey } = this.state; //destracting the states
    return (
      <Container>
        <Grid container>
          <Grid item sm={6}>
            <Paper>
              <form onSubmit={this.submitHandler}>
                <InputBase
                  type="text"
                  name="searchKey"
                  value={searchKey}
                  placeholder="Search Artists"
                  inputProps={{ "aria-label": "search artist here" }}
                  onChange={this.changeHandler}
                />
                <Divider orientation="vertical" />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h3">
          Results found for {this.state.searchKey}
        </Typography>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.image_url}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Home;

# artists

This is the robust, fully featured React App Artist search demo. The demo allows the visitor to search through node-modules. This README is a continuation of the article - pull down the master branch to complete code.

This README is divided into following sections:

- [Setup](#setup) - Follow these instructions to run the example search application.
- [Development](#development) - Considerations when building a React-based search application.

## Setup

To get started, simply clone this repository and run `npm` to install dependencies. You may need to go over some basic configuration steps.

```
# Clone the repository
git clone https://github.com/links2design/artists.git
cd artists

# Install dependencies
npm install

# start application
npm start
```

## Development

Here are some points that would be helpful to understand the development flow from scratch with examples:

- Create react application with name 'artists' using the following command

```
# Creating react app:
npx create-react-app artists

```

```
# install following npm dependencies:

# Material UI
npm install @material-ui/core
npm install @material-ui/icons
npm install @material-ui/styles

# React router
npm install --save react-router
```

### Created the following components

- `App` : Including the Router to navigate between different components.
```javascript
 // components/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Footer from "../Footer/Footer";
const App = () => (
  <Router>
    <CssBaseline />
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
    <Footer />
  </Router>
);
export default App;

```
- `Search`: This is a dynamic reuseable componenet which is indluded in home screen to make search for artists
```javascript
//Search Component
const useStyles = makeStyles(theme => ({
  root: {
    padding: "8px 5px 8px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Search = ({
  formsubmit,
  name,
  placeholder,
  inputprops,
  onChange,
  buttnlabel,
  searchKey,
  ...props
}) => {
  return (
    <form onSubmit={formsubmit}>
      <Paper className={classes.root}>
        <InputBase
          type="text"
          name={name}
          value={searchKey}
          placeholder={placeholder}
          inputProps={{ "aria-label": { inputprops } }}
          onChange={onChange}
          autoComplete="off"
          className={classes.input}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          type="submit"
          aria-label={buttnlabel}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};
```

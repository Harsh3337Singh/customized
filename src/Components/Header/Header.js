import React, { Component } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>CS</div>
        </Link>
      </div>
    );
  }
}

import React, { Component } from "react";
import classes from "./Dashboard.module.scss"

export default class Dashboard extends Component {
  render() {
    return (
      <div className={classes.bodyWrap}>
        <div className={classes.logo}>
          <div className={classes.textLogoWrap}>
            <div className={`${classes.text} ${classes.textC}`}>C</div>
            <div className={`${classes.text} ${classes.textU}`}>u</div>
            <div className={`${classes.text} ${classes.textS}`}>s</div>
            <div className={`${classes.text} ${classes.textT}`}>t</div>
            <div className={`${classes.text} ${classes.textO}`}>o</div>
            <div className={`${classes.text} ${classes.textM}`}>m</div>
            <div className={`${classes.text} ${classes.textI}`}>i</div>
            <div className={`${classes.text} ${classes.textZ}`}>z</div>
            <div className={`${classes.text} ${classes.textE}`}>e</div>
            <div className={`${classes.text} ${classes.textD}`}>d</div>
            <div>&nbsp;</div>
            <div className={`${classes.text} ${classes.texts}`}>s</div>
            <div className={`${classes.text} ${classes.textu}`}>u</div>
            <div className={`${classes.text} ${classes.texti}`}>i</div>
            <div className={`${classes.text} ${classes.textt}`}>t</div>
            <div className={`${classes.text} ${classes.textss}`}>s</div>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.textWrap}>
            <span>we provide suits of every kind</span>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import collectionNames from "../data/collectionDetails.json";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
    };
  }

  closeClickHandler = () => {
    this.props.closeHandler();
  };

  idHandler = (id) => {
    this.props.sendId(id);
    this.closeClickHandler();
  };

  componentDidMount = () => {
    for (const key in collectionNames) {
      this.setState((prevState) => ({ collections: [...prevState.collections, key] }));
    }
  };

  render() {
    return (
      <div className={classes.sidebarComponent}>
        <div className={classes.sidebar}>
          <i
            onClick={this.closeClickHandler}
            className={`fa fa-arrow-circle-left ${classes.closeSidebar}`}
          ></i>
          <div className={classes.sidebarLinks}>
            <div className={classes.collections}>
              <div>&nbsp;&nbsp;Collections</div>
              <div className={classes.collectionScroll}>
                {this.state.collections.map((collection) => (
                  <Link
                    to={`/collections/${collection}`}
                    className={classes.collection}
                    onClick={() => this.idHandler(collection)}
                  >
                    <div>{collection}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={classes.contactUs}>
              <div>&nbsp;&nbsp;Contact Us</div>
              <a className={classes.contact} href="tel:+919041041859">
                Call&nbsp;&nbsp;&nbsp;
                <i class="fa fa-phone" style={{ fontSize: "24px" }}></i>
              </a>
              <a className={classes.contact} href="https://wa.me/919041041859">
                Whatsapp&nbsp;&nbsp;&nbsp;
                <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: "24px" }}></i>
              </a>
              <a className={classes.contact} href="https://instagram.com/customized_suits">
                Instagram&nbsp;&nbsp;&nbsp;
                <i class="fa fa-instagram" style={{ fontSize: "24px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./Collections.module.scss";
import collectionDetails from "../../data/collectionDetails.json";
import { Link } from "react-router-dom";
const collections = require("../../data/collections.json");;

export default class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionId: "",
      collectionNumbers: [],
    };
  }

  updateNumber = () => {
    const urlArray = window.location.href.split("/");
    const id = urlArray[urlArray.length - 1];
    if (this.state.collectionId !== id) {
      this.setState({ collectionId: id, collectionNumbers: collectionDetails[id].collections });
    }
  };
  componentDidMount = () => {
    this.updateNumber();
  };
  render() {
    this.updateNumber();
    return (
      <>
        <Header />
        <div className={classes.collectionBody}>
          <div className={classes.collectionName}>{this.state.collectionId}&nbsp;Collection</div>
          <div className={classes.collectionWrap}>
            {this.state.collectionNumbers.map((itemId) => {
              const image = require(`../../data/Images/${collections[itemId].images[0]}`);
              return (
                <Link className={classes.item} to={`/collections/${this.state.collectionId}/${itemId}`}>
                  <div className={classes.itemDiv}>
                    <img className={classes.itemImage} src={image.default} alt="" />
                    <div className={classes.itemName}>{collections[itemId].name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

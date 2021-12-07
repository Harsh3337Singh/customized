import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./Products.module.scss";
import product from "../../data/collections.json";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      collectionId: "",
      productName: "",
      productDetails: "",
      productImages: [],
      showImage: "",
      selectedImage: 0,
    };
  }
  imageChanger = (index) => {
    this.setState({
      selectedImage: index,
      showImage: require(`../../data/Images/${product[this.state.productId].images[index]}`),
    });
  };
  componentDidMount = () => {
    const urlArray = window.location.href.split("/");
    const productId = urlArray[urlArray.length - 1];
    const collectionId = urlArray[urlArray.length - 2];
    this.setState({
      productId: productId,
      collectionId: collectionId,
      productImages: [...product[productId].images],
      showImage: require(`../../data/Images/${product[productId].images[0]}`),
      productName: product[productId].name,
      productDetails: product[productId].details,
    });
  };
  render() {
    return (
      <>
        <Header />
        <div className={classes.productBody}>
          <div className={classes.images}>
            <div className={classes.imagesDiv}>
              <img className={classes.mainImage} src={this.state.showImage.default} alt="" />
              <div className={classes.moreImages}>
                {this.state.productImages.map((img, index) => {
                  console.log(img[index]);
                  const image = require(`../../data/Images/${
                    product[this.state.productId].images[index]
                  }`);
                  return (
                    <div onClick={() => this.imageChanger(index)}>
                      <img
                        className={
                          this.state.selectedImage === index ? classes.selectedMiniImage : classes.miniImage
                        }
                        src={image.default}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={classes.details}>
            <div>
              '<div className={classes.productName}>{this.state.productName}</div>
              <div className={classes.productDetails}>{this.state.productDetails}</div>
            </div>
            <div className={classes.contactUs}>
              <div>Contact Us for more details...</div>
              <div className={classes.contacts}>
                <a className={classes.contact} href="tel:+919041041859">
                  <i class="fa fa-phone" style={{ fontSize: "24px" }}></i>
                </a>
                <a className={classes.contact} href="https://wa.me/919041041859">
                  <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: "24px" }}></i>
                </a>
                <a className={classes.contact} href="https://instagram.com/customized_suits">
                  <i class="fa fa-instagram" style={{ fontSize: "24px" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import classes from "./App.module.scss";
import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Dashboard from "./Components/Dashboard/Dashboard";
import Collections from "./Components/Collections/Collections";
import Products from "./Components/Products/Products";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      collectionId: "",
    };
  }

  sidebarHandler = () => {
    this.setState((prevState) => ({
      sidebar: !prevState.sidebar,
    }));
  };

  getCollectionId = (id) => {
    this.setState({ collectionId: id });
  };

  render() {
    const urlArray = window.location.href;
    console.log(urlArray);
    return (
      <>
        <i onClick={this.sidebarHandler} className={`fa fa-outdent ${classes.sidebarLogo}`}></i>
        <BrowserRouter>
          {this.state.sidebar && <Sidebar closeHandler={this.sidebarHandler} sendId={this.getCollectionId} />}
          <Routes>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/collections/:id" element={<Collections />} exact />
            <Route path="/collections/:id/:id" element={<Products />} exact />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

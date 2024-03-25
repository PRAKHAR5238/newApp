import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 9;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Technology"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  pagesize={this.pagesize}
                  country="in"
                  category="Science"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

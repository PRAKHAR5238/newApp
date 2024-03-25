import React, { Component } from 'react'

export class spinner extends Component {
 render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
        <div className="spinner-container">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only"></span>
          </div>
         
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    )
 }
}

export default spinner
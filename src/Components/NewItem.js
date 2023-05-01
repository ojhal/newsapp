import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/04/27/1600x900/sun-2224937_1280_1677654423439_1682570104399.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            {/* use target="_blank" for redirect the that perticular news which we have choosen */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">             
                Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;

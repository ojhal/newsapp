import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            {/* use target="_blank" for redirect the that perticular news which we have choosen */}
             Read more
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">             
                Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;

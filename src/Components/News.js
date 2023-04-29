import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    let url  = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c2ba400e716e4522addcb61d1e7ae417&page=1&pageSize=20"
    let data =  await fetch(url)
    let parseData = await data.json()
    console.log("=>",parseData)
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
  }
    handleNextClick = async()=> {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2ba400e716e4522addcb61d1e7ae417&page=${this.state.page + 1}&pageSize=20`
        let data =  await fetch(url)
        let parseData = await data.json()
        console.log("=>",parseData)
        this.setState({
        page: this.state.page + 1,
        articles:parseData.articles
    })
}
  }
  handlePrevClick = async()=> {
    let url  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2ba400e716e4522addcb61d1e7ae417&page=${this.state.page - 1}`
    let data =  await fetch(url)
    let parseData = await data.json()
    console.log("=>",parseData)
    this.setState({
    page: this.state.page - 1,
    articles:parseData.articles
})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey--Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return <div className="col-md-3"     
            key={e.url}>
              <NewItem
                title={e.title?e.title.slice(0, 45):""}
                description={e.description?e.description.slice(0, 88):""}
                imageUrl={e.urlToImage}
                newsUrl={e.url}
              />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    );
  }
}

export default News;

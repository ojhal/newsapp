import React, {useEffect,useState} from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props) => {
  const[articles,setArticles] = useState([])
  const[loading,setLoading] = useState(true)
  const[page,setPage] = useState(1)
  const[totalResults,setTotalResults] = useState(0)

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2ba400e716e4522addcb61d1e7ae417&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>
  {
    updateNews();
  },[])
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2ba400e716e4522addcb61d1e7ae417&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("🚀 ~ file: News.js:49 ~ News ~ fetchMoreData= ~ parseData:", parseData)
    console.log("=>", parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)
    };

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px",marginTop:"90px" }}>
          NewsUpdater--Top HeadLines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="row">
          {articles.map((e) => {
              return (
                <div className="col-md-3" key={e.url}>
                  <NewItem
                    title={e.title ? e.title.slice(0, 45) : ""}
                    description={
                      e.description ? e.description.slice(0, 88) : ""
                    }
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
}
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
};
export default News;


import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        setProgress: PropTypes.func.isRequired,
      };
    
      static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "general",
      };
      
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}-NewsMonkey`;
  }

  async componentDidMount() {
    await this.getArticles();
  }

  async getArticles() {
    try {
      this.props.setProgress(20);
      this.setState({ loading: true });

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pagesize}&page=${this.state.page + 1}&apiKey=6a7f8cc655bb4bb1a188758f03d17882`;
      const data = await fetch(url);
      const parsedData = await data.json();

      this.props.setProgress(70);
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        loading: false,
      }));
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle the error appropriately, e.g., show an error message to the user
      this.setState({ loading: false });
    }
  }

  fetchMoreData = () => {
    this.setState(
      { page: this.state.page + 1 },
      () => {
        this.getArticles();
      }
    );
  };

  render() {
    return (
      <>
        <h2 className="h2"> Daily Jagruk Top - {this.props.category} News-Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<div className="text-center"><Spinner /></div>}
        >
          <div className="container my-5">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
          {this.state.loading && <div className="text-center"><Spinner /></div>}
        </InfiniteScroll>
      </>
    );
  }
}

export default News;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import BlogFeed from './containers/BlogFeed'
import BlogEntry from './containers/BlogEntry'
import LossCalculator from './containers/LossCalculator'
import LossCalcResult from './containers/LossCalculator/Result'
import Contact from './containers/ContactPage'
import Services from './containers/ServicesPage'
import Home from './containers/HomePage'
import blogs from './content/blogs'

const blogContentByPath = blogs.reduce((blogsByPath, blog)=>{
  blogsByPath[blog.path] = blog;
  return blogsByPath;
},{})

class App extends Component {
  state = {
    firstRender: true
  }

  componentDidMount(){
    this.setState({firstRender: false})
  }

  render() {
    if(window.location.href.includes('/#/')){
      //stop using hashrouter but support old urls
      return <BrowserRouter>
        <Redirect to={window.location.href.slice(window.location.href.indexOf('#')+1)} />
      </BrowserRouter>
    }else if(this.state.firstRender && window.innerWidth < 768){
      //force reload on mobile because pre-rendered content is for desktop
      return <BrowserRouter>
          <Redirect to={window.location.pathname} />
        </BrowserRouter>
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Home activePage='home' />} />
            <Route exact path="/blog" render={props => <BlogFeed activePage='blog' />} />
            <Route exact path="/services" render={props => <Services activePage='services' />} />
            <Route exact path="/blog/:path" render={props => {
             const blogContent = blogContentByPath[`/blog/${props.match.params.path}`]
             if(blogContent){
               return <BlogEntry activePage='blog' blog={blogContent} />
             }
             //eventually return not found content with recommended articles
             return <BlogFeed activePage='blog' />
            }}/>
            <Route exact path="/contact" render={props => <Contact activePage='contact' />} />
            <Route exact path="/calculator" render={props => <LossCalculator activePage='calculator' />} />
            <Route exact path="/loss-calc-result" render={props => <LossCalcResult searchString={props.location.search} />} />
            <Route render={props => <Home />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

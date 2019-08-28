import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// allowing the api to be accessed easier
// import axios from "axios";
/*so now we can import the data from the api just with 
axios.get("https://localhost:8000/api/WHATEVERYOUWANT")*/

// importing components
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Blog from "./components/blog/Blog.js";
import IndividualBlogPost from "./components/blog/IndividualBlogPost.js";

// import react router (helps with SEO as well)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* navigation will always be shown this way */}
        <Navigation />
        {/* allows for the 'switching' of pages with similar names,
      it finds the first route and component with that specifed name and renders it */}
        <Switch>
          {/* exact forces this to not render anything else that has a /
          (meaning if you went to /about, the / would render the Home component
            and THEN the About component)
          this is used in this specific scenario and in the blog (
            where you need more information to route specific routes
          ) */}
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={IndividualBlogPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

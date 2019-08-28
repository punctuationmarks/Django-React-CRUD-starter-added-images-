import React, { Fragment, useState, useEffect } from "react";
import "../../App.css";
// might be uncessary
import axios from "axios";

// using link from react router to link the individual posts
import { Link } from "react-router-dom";

function Blog() {
  // running the async fetch request fetchBlog()
  useEffect(() => {
    fetchBlog();
  }, []); // the ,[] means it ONLY runs on mount (or page refresh)

  // using useState to grab and display state
  // whatever you name the [item, setItems]
  // needs to be the same in the setItems() and what is returned
  // in the JSX
  const [blogPosts, setBlogPosts] = useState([
  ]);

  // grabbing the blog data from Django
  // async, since it's from a database
  const fetchBlog = async () => {
    const fetchedData = await fetch("http://localhost:8000/api/blog");
    console.log(fetchedData);
    // we have to convert the data to json to render it
    const blogPosts = await fetchedData.json();
    console.log(blogPosts);

    // console.log(fetchedData);
    // setting the blogPosts' state
    setBlogPosts(blogPosts);
  };

  return (
    <Fragment>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h1>
            {/* having all of the blog posts to be set up to
            have their individual link/href and page with router */}
            <Link to={`blog/${post.id}`}>{post.title}</Link>
          </h1>
          <p>{post.body}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default Blog;

// cluster, having issues since it's cors, so might need to
// build this with classes and then refactor once it's working
// bbbuuuttt hooks seems like the funcitonal future, so figure it out

// https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react

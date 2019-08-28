import React, { Fragment, useState, useEffect } from "react";
import "../../App.css";

// when using react router with Link, you get a return of
// "match" which is what you can use to link data
function IndividualBlogPost({ match }) {
  useEffect(() => {
    fetchIndividualBlogPost();
    // returns the path, the url, and params
    // in params there will be the id (or primary key)
    console.log(match);
  }, []);
  const [blogPost, setBlogPost] = useState({
        // if you want images you need to specify an empty object
    // without you just need an empty array
    image: {}
  });

  const fetchIndividualBlogPost = async () => {
    const fetchedData = await fetch(
      `http://localhost:8000/api/blog/${match.params.id}`
    );
    // we have to convert the data to json to render it
    const blogPost = await fetchedData.json();
    console.log(blogPost);

    // console.log(fetchedData);
    // setting the blogPost' state
    setBlogPost(blogPost);
  };

  return (
    <Fragment>
      <div key={blogPost.id}>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.body}</p>
        <img src={blogPost.image} alt={blogPost.title}></img>
      </div>
    </Fragment>
  );
}

export default IndividualBlogPost;

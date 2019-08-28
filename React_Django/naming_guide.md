# Naming guide for cleaner code


# In Python
- App names:
    lower cased and snake cased if more than one word *blog_app*
- Model/Views/Serializer names:
    Upper case pascal with the type attached e.g. *BlogModel* *BlogSerializer*
- 

# In JS
- Components (files and exported functions/classes):
    Uppercase pascal case, descriptive to avoid any confusion *IndividualBlogPost.js*
- Functions inside components:
    camel cased *fetchBlog*
- Variables and constants inside components:
    snake cased *blog_posts*
    *If* there is a situation where you'll want a single blog post and also have a 
    variable named blog_posts, name it something more explicit, for instance individual_blog_post
    
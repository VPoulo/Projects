## Blog Site
### Course: Rust Programming

#### Run Instructions

1. Make sure you are in the **blog_restapi** sub-folder.

2. Use <code>cargo run</code> command to start the app service.

3. **click on the link** at the bottom of the terminal to launch the website locally.

** I have already provided a json file with starter blog posts.

#### Description
<p>I wrote a RestAPI as a Rust library that adds, reads, and deletes blog posts from a JSON file. I used this JSON file as a database for the frontend website. The website has two pages, one page that displays all the blog posts, and a second page that is a form to add a new blog post. The restAPI is in the lib.rs file, and the routing and API calls are in the main.rs file.  In the templates folder (within the blog_restapi folder) are the Tera templates I used for the frontend.  I have a template for the landing page, which displays the blog posts, a template for the form page to add a new blog post, and a template for an error page. The JSON file (database) is stored on the main level outside the blog_restapi folder. I have included this in the git repository so that whoever clones this repo has some starting posts to see how the website looks. This posts can be deleted by pushing the delete button below each blog post. I used Rocket to handle the API calls.</p> 

#### Future Planned Features:

* Google OAuth integration.
* Replace JSON file with a Google Cloud postgres database.
* Add ability to edit a post after being posted.
* Add subscribe feature that allows users to subscribe to a another user.

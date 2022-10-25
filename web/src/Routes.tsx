// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import CommentsLayout from 'src/layouts/CommentsLayout'

import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CommentsLayout}>
        <Route path="/comments/new" page={CommentNewCommentPage} name="newComment" />
        <Route path="/comments/{id:Int}/edit" page={CommentEditCommentPage} name="editComment" />
        <Route path="/comments/{id:Int}" page={CommentCommentPage} name="comment" />
        <Route path="/comments" page={CommentCommentsPage} name="comments" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

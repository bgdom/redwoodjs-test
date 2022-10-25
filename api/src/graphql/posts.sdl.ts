export const schema = gql`
  type Comment {
    id: Int!
    content: String!
    createdAt: DateTime!
    Post: Post
    postId: Int
  }

  type Post {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
    precision: String
    coments: [Comment]!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    description: String!
    precision: String
  }

  input UpdatePostInput {
    title: String
    description: String
    precision: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`

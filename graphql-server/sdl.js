import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    viewer: Viewer
    blogPost(id: ID!): Post
  }

  type Viewer {
    test: Boolean
    allBlogPosts(
      first: Int
      after: String
      orderBy: OrderBy
    ): BlogPostConnection
  }

  type BlogPostConnection {
    edges: [BlogPostConnectionEdge]
    pageInfo: BlogPostConnectionPageInfo
  }

  type BlogPostConnectionEdge {
    node: Post
    cursor: String
  }

  type Post {
    content(supported: [String]): BlogPostUnion
  }

  union BlogPostUnion = BlogPost | FancyBlogPost

  type BlogPost {
    createdAt: DateTime!
    id: ID!
    title: String!
    content: String!
    updatedAt: DateTime!
    js(module: String!, id: String): JSDependency!
  }

  scalar DateTime

  scalar JSDependency

  type FancyBlogPost {
    createdAt: DateTime!
    id: ID!
    title: String!
    content: String!
    updatedAt: DateTime!
    js(module: String!, id: String): JSDependency!
  }

  type BlogPostConnectionPageInfo {
    startCursor: String
    endCursor: String
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  input OrderBy {
    createdAt: Order
  }

  enum Order {
    asc
    desc
  }
`;

export default typeDefs;

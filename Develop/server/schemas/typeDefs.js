const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email:String
    savedBooks:[Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String!
  }

  type Auth{
    token:ID!
    user:User
  }

  type Query {
    me: [Tech]
    
  }

  type Mutation {
    login(email:String!, password:String!):Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(_id: String!, techNum: Int!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;

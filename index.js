const { ApolloServer, gql, UserInputError, ForbiddenError, AuthenticationError, SyntaxError } = require('apollo-server');
const logger = require('./helper/logger');
const user = require('./helper/sql/user');

require('dotenv').config()

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: Int
    name: String
    donatorLevel: Int
    colorAccent: String
    registerDate: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    """
    Query a specific user.
    """
    user(id: Int, name: String): [User]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'cakes',
    password: 'kecske123',
    database: 'zenbu_user'
  }
});

const resolvers = {
  Query: {
    user: async (idk, vars) => {
      return user(knex, vars, getQuery);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, debug: false });

function getQuery(query) {
  let arr = [];
  return query
    .then((_result) => {
      _result.forEach(item => arr.push(item));

      return arr;
    })
    .catch(e => {
      logger('DB query error: ' + e, 'ERR');
    });
}

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

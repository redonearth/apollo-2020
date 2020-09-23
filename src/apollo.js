import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://yts.mx/api/v2/list_movies.json"
});

export default client;

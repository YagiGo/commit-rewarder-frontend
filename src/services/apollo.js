import {ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const {REACT_APP_API_KEY: API_KEY} = process.env;
// const httpLink = new HttpLink({
//   uri: 'https://app.airstack.xyz/',
// });
//
// const authLink = setContext((_, { headers }) => {
//   // Get the authentication token from wherever you store it
//   const token = localStorage.getItem('token');
//
//   // Return the headers to the context so that httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: 'a8f1f5dd50174761822eb1bfe4623c56',
//     }
//   }
// });

export const client = new ApolloClient({
  uri: ' https://api.airstack.xyz/gql ',
  cache: new InMemoryCache(),
  headers: { Authorization: '50f4955b1e1b461e9b9405ec76085c03'},
})
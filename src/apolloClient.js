import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://movieql-osezlvyqsg.now.sh/",
    connectToDevTools: true
})

export default client
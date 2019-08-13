const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

//Launch Type 
// const LaunchType = new GraphQLObjectType({

// })

//Todo Type
// const TodoType = new GraphQLObjectType({
//     name:'Todo',
//     fields: () => ({
//         userId: {type: GraphQLInt},
//         id: {type: GraphQLInt},
//         title: {type: GraphQLString},
//         completed: {type: GraphQLBoolean}
//     })

// });


//ExchangeType
const ExchangeType = new GraphQLObjectType({
    name:'Exchange',
    fields: () => ({
        tokenSymbol: {type:GraphQLString},
        tokenName: {type:GraphQLString}
    })

});

//RootQuery for Todos
//  const RootQuery = new GraphQLObjectType({
//      name:'RootQueryType',
//      fields:{
//         todos:{
//             type: new GraphQLList(TodoType),
//             resolve(parents,args){
//                 return axios.get('https://jsonplaceholder.typicode.com/todos')
//                     .then(res => res.data);
//             } 
//         }
//      }

//  })


//RootQuery for Uniswap
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
       exchanges:{
           type: new GraphQLList(ExchangeType),
           resolve(parents,args){
               return axios.get('https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap/graphql')
                   .then(res => res.data);
           } 
       }
    }

})
 module.exports = new GraphQLSchema({
     query: RootQuery
 });
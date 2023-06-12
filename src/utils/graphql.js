import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: 'http://192.168.43.34/simdc_project/graphql'
})

export function GqlQuery(gqlVar, params) {
  return apolloClient.query({
    query: gqlVar,
    variables: params
  })
}

export function GqlMutation(gqlVar, params) {
  return apolloClient.mutate({
    mutation: gqlVar,
    variables: params
  })
}

export function GqlResetStore() {
  return new Promise((ok, _)=>{
    apolloClient.resetStore().then(()=>{
      ok()
    }).catch(()=>{
      ok()
    })
  })
}

export function Delay(ms){
  return new Promise((ok, _)=>{
    setTimeout(()=>{ok()}, ms)
  })
}


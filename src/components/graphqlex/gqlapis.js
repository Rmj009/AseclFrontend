import gql from 'graphql-tag'

export function QueryWifiMac(){
    return gql`{
        QueryMacAddress(input: {macType: "Wifi"}) {
            Address
        }
    }`
}

export function QueryBTMac(){
    return gql`{
        QueryMacAddress(input: {macType: "BT"}) {
            Address
        }
    }`
}


// const UserInput = `{
//     "input": {
//       "macType": "Wifi"
//     }
//   }`
// const {loading, result, error} = useQuery(QueryBTMac, UserInput)
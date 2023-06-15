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

export function QueryTestConfiguration(){
    return gql`
    query($input: TestConfigurationQueryInput){
        QueryTestConfiguration(input: $input){
          TotalSize
          Datas{
          LotCode
          FwSwBinding{
                 Software{
               Name
                   Version
             }
                
                 Firmware{
                   Name
                   Version
                 }
          }
          }
        }
      }
    `
}

  
// {
//     "input": {
//         "lotcode": "PD1524MB0219"
//     }
// }

// const UserInput = `{
//     "input": {
//       "macType": "Wifi"
//     }
//   }`
// const {loading, result, error} = useQuery(QueryBTMac, UserInput)
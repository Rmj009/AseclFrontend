import { gql } from "graphql-tag"
// #---
// #Project_Family
// # Create ===================================================================
export const ProductFamilyCreationInput = gql`
mutation ProductFamilyCreationInput($input ProductFamilyCreationInput!){
    CreateProductFamily(input: $input){
        Result
    }
}
`


export const ProductFamilyUpgradeInput = gql`
mutation($input: ProductFamilyUpgradeInput!){
  UpdateProductFamily(input: $input){
    Result
  }
}`




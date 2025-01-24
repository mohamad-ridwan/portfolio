import { gql } from "@apollo/client";

export const GET_INFORMATION = gql`
query Query {
  getInformation {
    navbarTitle
    webName
    intro {
      title
      description
    }
  }
}
`
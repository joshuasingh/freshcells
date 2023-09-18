import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt,
      user {
        id
      }
    }
  }
`;

export default LOGIN;

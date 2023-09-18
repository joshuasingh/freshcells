import { gql } from "@apollo/client";

const USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
    }
  }
`;

export default USER;

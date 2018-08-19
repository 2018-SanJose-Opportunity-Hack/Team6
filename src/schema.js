import gql from 'graphql-tag';

export const USERS = gql `
  query users($input: desiredSchoolName) {
    firstName
    lastName
  }
`;
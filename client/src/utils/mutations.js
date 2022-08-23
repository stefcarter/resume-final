import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($form1: String!, $form2: String!) {
    createMatchup(form1: $form1, form2: $form2) {
      _id
      form1
      form2
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user{
      _id
      name
      email
    }
  }
}
`;

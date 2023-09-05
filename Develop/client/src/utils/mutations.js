import { gql } from '@apollo/client';
export const LOGIN_USER = gql`
mutation loginUser(email: String!, password: String!) {
    email{
        _id
        email
    }
    password {
        _id
        password
    }
}`
export const ADD_USER = gql`
mutation addUser(username: String!, email: String!, password: String!) {
    username{
        _id
        username
    }
    email{
        _id
        email
    }
    password{
        _id
        password
    }
}`
export const SAVE_BOOK = gql`
mutation saveBook(_id: String!, techNum: Int!) {
    _id
    techNum{
        _id
        bookId
    }

}`
export const REMOVE_BOOK = gql`
mutation removeBook(bookId: ID!){
    bookId{
        _id
    }
}`
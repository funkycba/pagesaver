import { gql } from '@apollo/client';

export const GET_ME = gql`
GET_ME {
    tech {
        _id
        name
    }
}
`;
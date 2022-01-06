import styled from 'styled-components';
import { Breakpoints } from '../../constants/constants';

export const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
`;

export const MovieSlot = styled.li`
    background-color: aliceblue;
    border: 1px solid #ccc;    
    margin: 12px;
    box-sizing: border-box;
    flex-direction: column;
    width: calc(100% - 24px);
    @media (min-width: ${Breakpoints.md}) {
        flex-direction: row;
        margin: 20px;
        width: calc(50% - 40px);
    }
`;


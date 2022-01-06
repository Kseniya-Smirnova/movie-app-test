import styled from 'styled-components';
import { Breakpoints } from '../../constants/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: flex-start;
  text-align: left;
  @media (min-width: ${Breakpoints.sm}) {
    flex-direction: row;
  }
  @media (min-width: ${Breakpoints.md}) {
    flex-direction: column;
  }
  @media (min-width: ${Breakpoints.lg}) {
    flex-direction: row;
  }
`;

export const PosterDescription = styled.ul`
  list-style: none;
  padding: 12px 0 0 0;
  @media (min-width: ${Breakpoints.sm}) {
    padding: 0 0 0 12px;
  }
  @media (min-width: ${Breakpoints.md}) {
    padding: 12px 0;
  }
  @media (min-width: ${Breakpoints.lg}) {
    padding: 0 0 0 20px;
  }
`;

export const DescriptionItem = styled.li`
  padding-bottom: 4px;
`;

export const DescriptionLabel = styled.strong`
  padding-right: 8px;
`;

export const PosterImg = styled.img`
  width: 100%;
  @media (min-width: ${Breakpoints.sm}) {
    width: auto;
  }
`;

export const PlotButton = styled.button`
  border: none;
  background: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  color: darkblue;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0 0;
`;

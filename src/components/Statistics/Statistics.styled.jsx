import styled from 'styled-components';

const StatisticList = styled.ul`
list-style: none;
padding: 0;
text-align: center;`;

const StatisticItem = styled.li`
margin-bottom: 10px;`;

const StatisticValue = styled.span`
margin-left: 5px;
font-weight: bold;`;

const StatisticPositiveValue = styled.span`
margin-left: 5px;
font-weight: bold;
color: #8cb6ee;
`;
export { StatisticList, StatisticItem, StatisticValue, StatisticPositiveValue };
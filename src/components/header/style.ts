import { Typography } from 'antd';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2rem;
`;

export const Title = styled(Typography.Text)`
  font-size: 1.75rem;
`;

export const Subtitle = styled(Typography.Text)`
  font-size: 1.25rem;
`;

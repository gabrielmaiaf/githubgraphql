import { Container, Subtitle, Title } from './style';

const Header: React.FC = () => (
  <Container>
    <Title strong>Github GraphQL</Title>
    <Subtitle type="secondary">Website built in React and GraphQL</Subtitle>
  </Container>
);

export default Header;

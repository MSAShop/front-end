import Container from '@material-ui/core/Container';
import Header from '@components/header';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout;

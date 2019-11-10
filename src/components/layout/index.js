// Material-ui core
import Container from '@material-ui/core/Container';

// Main core
import Header from '@components/header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;

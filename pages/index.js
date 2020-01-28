// Material-ui core
import Grid from '@material-ui/core/Grid';

//Main core
import Flex from '@components/common/flex';
import Layout from '@components/layout';

import product from '@services/api/product';

// Styles
import * as Styles from '@pages-style/index-style';


// Components 
const Product = ({ info }) => {

  return (
    <Styles.ProductWrapper disablePadding as={Flex} flexDirection='column'>
      <Styles.ProductImage src={info.imgUrl} alt={info.name}/>
      <Styles.ProductText variant='h6' align='center'>{info.name}</Styles.ProductText>
      <Styles.ProductText variant='h6' as='span' color='grey.500'>$&nbsp;{info.price}</Styles.ProductText>
    </Styles.ProductWrapper>
  )
}

const Products = () => {
  // TODO: Design error and loading state
  const [products, error, loading] = product.getAll();

  return (
    <Grid container spacing={4}>
      {
        products && products.map(product => (
          <Grid item md={3} key={product.id}>
            <Product info={product} />
          </Grid>
        ))
      }
    </Grid>
  )
}

const Home = () => {  
  return (
    <>
      <Styles.ProductsTitle variant='h3'>All Products</Styles.ProductsTitle>
      <Products />
    </>
  )
}

Home.Layout = Layout;

export default Home;

// React core
import { useState, useEffect } from 'react';

// Axios 
import Axios from 'axios';

// Material-ui core
import Grid from '@material-ui/core/Grid';

//Main core
import Flex from '@components/common/flex';
import Layout from '@components/layout';

// Styles
import * as Styles from '@pages-style/index-style';

// Custom hooks
const useProducts = () => {
  const [products, setProducts] = useState([]);
  
  const getAllProducts = async () => {
    try {
      // TODO: Change url with original api
      const allProducts = await Axios.get('https://my-json-server.typicode.com/MohammadMRD/Fake-data/products');
      setProducts(allProducts.data);
    } catch (ex) {
      // TODO: Show Error message to user
      console.log(ex);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  // TODO: Add `Loading` and `Error` state
  return products;
}

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
  const products = useProducts();

  return (
    <Grid container spacing={4}>
      {
        products.map(product => (
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

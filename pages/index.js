// React core
import { useState, useEffect } from 'react';

// Axios 
import Axios from 'axios';

// Material-ui core
import Grid from '@material-ui/core/Grid';

//Main core
import Flex from '@components/common/flex';

// Styles
import {
	ProductsTitleStyled,
	ProductImageStyled,
	ProductNameStyled,
	ProductPriceStyled,
	ProductWrapperStyled
} from '@pages-style/index-style';

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
    <ProductWrapperStyled disablePadding as={Flex} flexDirection='column'>
      <ProductImageStyled src={info.imgUrl} alt={info.name}/>
      <ProductNameStyled>{info.name}</ProductNameStyled>
      <ProductPriceStyled>${info.price}</ProductPriceStyled>
    </ProductWrapperStyled>
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
      <ProductsTitleStyled>All Products</ProductsTitleStyled>
      <Products />
    </>
  )
}

export default Home;
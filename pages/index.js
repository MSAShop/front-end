// Material-ui core
import Grid from '@material-ui/core/Grid';

// Material-ui lab
import Alert from '@material-ui/lab/Alert';

//Main core
import Layout from '@components/layout';
import product from '@services/api/product';

// Styles
import * as Styles from '@pages-style/index-style';


// Components 
const Product = ({ info }) => {

  return (
    <Styles.ProductWrapper disablePadding>
      <Styles.ProductImage src={info.imgUrl} alt={info.name}/>
      
      <Styles.ProductText variant='h6' align='center'>{info.name}</Styles.ProductText>
      
      <Styles.ProductText variant='h6' as='span' color='grey.500'>
        $&nbsp;{info.price}
      </Styles.ProductText>
    </Styles.ProductWrapper>
  )
}

const ProductsLoading = () => {
  const tempArray = Array(4).fill();

  return tempArray.map((item, index) => (
    <Grid item md={3}>
      <Styles.ProductWrapper disablePadding key={index}>
        <Styles.Skelton variant='rect' animation='wave' height={225} width='100%' />
        <Styles.Skelton variant='text' animation='wave' width='80%' my={1} mx='auto' />
        <Styles.Skelton variant='text' animation='wave' width='30%' mb={1} mx='auto' />
      </Styles.ProductWrapper>
    </Grid>
  ));
}

const ProductError = ({ error }) => {
  const UNKNOWN_ERROR = 'Unknown Error!';
  const err = {
    object: (error && error.message) || UNKNOWN_ERROR,
    string: error
  }

  return (
    <Alert severity='error' variant='filled'>
      {err[typeof error] || UNKNOWN_ERROR}
    </Alert>
  )
}

const Products = () => {
  const [products, error, loading] = product.getAll();
  
  return (
    <Grid container spacing={4}>
      {
        error ? <ProductError error={error} />:
        loading ? <ProductsLoading />:
        products && products.map(product => (
          <Grid item md={3} key={product.id}>
            <Product info={product} />
          </Grid>
        ))
      }
    </Grid>
  );
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

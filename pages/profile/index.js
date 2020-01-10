// Material-ui core
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// Main core
// ---- components ----
import Label from '@components/label';
import Input from '@components/input';
import Button from '@components/button';

// ---- styles ----
import * as Styles from '@pages-style/profile.style';


// ---------------------------------------------

const DefaultInput = (props) => <Input borderRadius='rounded' fullWidth {...props} />;
const DefaultLabel = (props) => <Label margin {...props} />;
const GridContainer = (props) => <Grid container justify='center' spacing={4} {...props} />

const ImageSection = () => {

  return (
    <Grid item md={4} container direction='column' spacing={2}>
      <Grid item>
        <Styles.ImageProfile src='#' />
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button outlined color='primary'>Change</Button>
          <Button outlined color='error'>Remove</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

const FormSection = () => {
  
  return (
    <GridContainer item md={8}>
      <Grid item md={6}>
        <DefaultLabel>Name</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={6}>
        <DefaultLabel>Phone number</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={12}>
        <DefaultLabel>Email</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={6}>
        <DefaultLabel>National Code</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={6}>
        <DefaultLabel>Postal Code</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={12}>
        <DefaultLabel>Address</DefaultLabel>
        <DefaultInput />
      </Grid>

      <Grid item md={12}>
        <Styles.SaveButton bg='success' color='white'>
          Save Changes
        </Styles.SaveButton>
      </Grid>
    </GridContainer>
  );
}

const Profile = () => {

  return (
    <Styles.ProfileContainer>
      <Styles.Header align='center' variant='h4'>Profile</Styles.Header>

      <GridContainer>
        <ImageSection />
        <FormSection />
      </GridContainer>
    </Styles.ProfileContainer>
  )
}

export default Profile;

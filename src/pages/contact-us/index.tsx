import { Box, Button, Container, createStyles, Grid, Image, Text, Textarea, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { ReactElement, useState } from 'react';
import { Send } from 'tabler-icons-react';
import * as Yup from 'yup';
import Page from '../../components/Page';
import Layout from '../../layouts';
import { apiSendContactEmail } from '../../models_services/api_contact_us';
import { showNotification } from '@mantine/notifications';

const schema = Yup.object({
  name: Yup.string().min(2, 'Name should have at least 2 letters').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Message should have at least 10 letters').required('Message is required')
});

export default function PageX() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const handleSubmit = async () => {
    if (form.validate().hasErrors) return;

    try {
      setIsLoading(true);
      await apiSendContactEmail(form.values.email, form.values.name, form.values.message);
      setIsLoading(false);

      form.reset();

      showNotification({
        title: 'Success',
        message: 'Message sent',
        autoClose: 6000
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showNotification({
        color: 'red',
        title: 'Error',
        message: 'There was an error sending the message',
        autoClose: 6000
      });
    }
  };

  return (
    <Page title='Contact'>
      <Container size='xl' className=''>
        <Box className='flex flex-col text-center w-full mx-auto mt-20'>
          <Text className='text-4xl font-semibold leading-10'>Contact us</Text>
          <Text className='mt-4'>Have question reach out below.</Text>
        </Box>

        <Grid className='mt-16' align={'center'}>
          <Grid.Col md={6} xs={12}>
            <Text className='xs:text-center md:text-left text-3xl font-semibold leading-10'>
              Get In Touch <br />
              We're happy to answer your questions.
            </Text>
          </Grid.Col>

          <Grid.Col md={6} xs={12}>
            <Box>
              <TextInput className='mt-4' placeholder='Name' label='Name' {...form.getInputProps('name')} />
              <TextInput className='mt-4' placeholder='Email' label='Email' {...form.getInputProps('email')} />
              <Textarea minRows={4} className='mt-4' placeholder='Message' label='Message' {...form.getInputProps('message')} />

              <Button
                onClick={handleSubmit}
                leftIcon={<Send size={14} />}
                variant='filled'
                disabled={isLoading}
                className='w-full mt-10 h-12 bg-gradient-to-r from-indigo-500 text-sm via-purple-500 to-pink-500 border-0 hover:opacity-90 hover:text-md'>
                Submit
              </Button>
            </Box>
          </Grid.Col>
        </Grid>

        <Image className='mt-20' src='images/world-map.png' />
      </Container>
    </Page>
  );
}

PageX.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const useStyles = createStyles((theme) => ({}));

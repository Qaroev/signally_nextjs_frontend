import { Box, Container, createStyles, Text } from '@mantine/core';
import { ReactElement } from 'react';
import Page from '../../components/Page';
import Layout from '../../layouts';

PageX.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PageX() {
  const { classes } = useStyles();
  return (
    <Page title='Privacy'>
      <Container size='xl' className=''>
        <Box className='flex flex-col text-center w-full mx-auto mt-20'>
          <Text className='text-4xl font-semibold leading-10'>Privacy Policy</Text>
        </Box>
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit amet!</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil unde laboriosam ea nulla tenetur voluptates modi nemo. Illo
          ipsum error nostrum dolorem praesentium. Quis possimus recusandae asperiores natus quidem minus officia non numquam repudiandae
          aperiam. Quia laboriosam, praesentium impedit facilis, rem ratione cumque perspiciatis odio enim asperiores sit ut dignissimos atque
          quidem doloribus officiis, incidunt alias consectetur odit repellat maxime. Hic magni laborum expedita perferendis autem nesciunt
          cumque, quod beatae nobis reiciendis consequatur sint vero laboriosam harum quo, sunt ut explicabo incidunt. Facere, quidem ipsam ut ex
          officia voluptas? Saepe ut, itaque assumenda dicta et dolorem blanditiis consectetur commodi veritatis nesciunt sed laudantium
        </Text>
        {/*  */}
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit.</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil unde laboriosam ea nulla tenetur voluptates modi nemo. Illo
          ipsum error nostrum dolorem praesentium. Quis possimus recusandae asperiores natus quidem minus officia non numquam repudiandae
        </Text>
        {/*  */}
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit.</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium exercitationem sed doloribus reiciendis perferendis quod
          quae. Velit, sed. Itaque quod at adipisci ipsam ipsa in ratione ad aperiam architecto. Odit nulla neque officiis ipsam corrupti dolore?
          In blanditiis consequatur asperiores ipsum inventore cum eligendi qui minima nihil. Quibusdam quia doloribus fugiat vero beatae in
          repudiandae, quisquam consequuntur aliquam, excepturi eveniet, voluptate minima? Rem hic quas suscipit cum deleniti quasi optio
          repellendus corrupti beatae necessitatibus commodi eveniet iste accusamus quidem voluptas incidunt ad asperiores illum ipsum possimus,
          consequatur cupiditate ab. Hic aliquid necessitatibus impedit accusamus ipsum ratione, consectetur iure tenetur fuga, earum vero.
          Libero labore suscipit, odit fugiat et eos soluta fugit voluptas vitae, commodi tempore dolorem assumenda expedita eveniet corrupti
          similique quidem blanditiis error. Totam laborum expedita, itaque a consectetur quibusdam illo voluptatibus similique minus
          exercitationem fuga? Illo atque quae laboriosam consectetur eveniet amet, perferendis repudiandae optio! In, provident.
        </Text>
        {/*  */}
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit amet!</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil unde laboriosam ea nulla tenetur voluptates modi nemo. Illo
          ipsum error nostrum dolorem praesentium. Quis possimus recusandae asperiores natus quidem minus officia non numquam repudiandae
          aperiam. Quia laboriosam, praesentium impedit facilis, rem ratione cumque perspiciatis odio enim asperiores sit ut dignissimos atque
          quidem doloribus officiis, incidunt alias consectetur odit repellat maxime. Hic magni laborum expedita perferendis autem nesciunt
          cumque, quod beatae nobis reiciendis consequatur sint vero laboriosam harum quo, sunt ut explicabo incidunt. Facere, quidem ipsam ut ex
          officia voluptas? Saepe ut, itaque assumenda dicta et dolorem blanditiis consectetur commodi veritatis nesciunt sed laudantium
        </Text>
        {/*  */}
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit.</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium exercitationem sed doloribus reiciendis perferendis quod
          quae. Velit, sed. Itaque quod at adipisci ipsam ipsa in ratione ad aperiam architecto. Odit nulla neque officiis ipsam corrupti dolore?
          In blanditiis consequatur asperiores ipsum inventore cum eligendi qui minima nihil. Quibusdam quia doloribus fugiat vero beatae in
          repudiandae, quisquam consequuntur aliquam, excepturi eveniet, voluptate minima? Rem hic quas suscipit cum deleniti quasi optio
          repellendus corrupti beatae necessitatibus commodi eveniet iste accusamus quidem voluptas incidunt ad asperiores illum ipsum possimus,
          consequatur cupiditate ab. Hic aliquid necessitatibus impedit accusamus ipsum ratione, consectetur iure tenetur fuga, earum vero.
          Libero labore suscipit, odit fugiat et eos soluta fugit voluptas vitae, commodi tempore dolorem assumenda expedita eveniet corrupti
          similique quidem blanditiis error. Totam laborum expedita, itaque a consectetur quibusdam illo voluptatibus similique minus
          exercitationem fuga? Illo atque quae laboriosam consectetur eveniet amet, perferendis repudiandae optio! In, provident.
        </Text>
        <Text className='mt-4 text-xl font-semibold'>Lorem ipsum dolor sit.</Text>
        <Text className='mt-2 leading-9'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil unde laboriosam ea nulla tenetur voluptates modi nemo. Illo
          ipsum error nostrum dolorem praesentium. Quis possimus recusandae asperiores natus quidem minus officia non numquam repudiandae
        </Text>
      </Container>
    </Page>
  );
}

const useStyles = createStyles((theme) => ({
  root: {}
}));

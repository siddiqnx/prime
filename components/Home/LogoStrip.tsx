import Layout from 'elements/Layout';
import Flex from 'elements/Flex';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import { logoScroll } from 'stitches.config/keyframes';
import Image from 'next/image';

const Container = styled('section', {
  backgroundColor: '$primary800',
  padding: '$7 0',
});

const ScrollContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
});

const LogoContainer = styled('div', {
  width: '160px',

  '@bp2': {
    width: '250px'
  }
});

const LogoStrip = () => {
  return (
    <Container>
      <Layout
        css={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '$6',
          '@bp2': { flexDirection: 'row', gap: '$17' },
        }}
      >
        <Text type='b4' css={{ flexShrink: 0, color: '$primary200', alignSelf: 'center' }}>
          Our Clients
        </Text>
        <ScrollContainer>
          <Flex
            ai='center'
            css={{
              flexWrap: 'nowrap',
              animation: `${logoScroll} 10s linear infinite`,
              '& > *': { flexShrink: 0 },
            }}
          >
            <LogoContainer>
              <Image
                width='64px'
                height='23px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp2.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='40px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp4.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='27px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp5.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='34px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp6.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='23px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp2.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='40px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp4.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='27px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp5.png'
              />
            </LogoContainer>
            <LogoContainer>
              <Image
                width='64px'
                height='34px'
                layout='fixed'
                priority={true}
                src='/images/clients/comp6.png'
              />
            </LogoContainer>
          </Flex>
        </ScrollContainer>
      </Layout>
    </Container>
  );
};

export default LogoStrip;

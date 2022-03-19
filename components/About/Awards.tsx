import SectionContainer from 'elements/SectionContainer';
import Layout from 'elements/Layout';
import { styled } from 'stitches.config';
import AwardCard from 'components/AwardCard';
import { Text } from 'elements/Text';
import CardGrid from 'elements/CardGrid';

const Container = styled(SectionContainer);

const AwardsContainer = styled('ul');

const Awards = ({ id, title, awards }) => {
  return (
    <Container id={id}>
      <Layout>
        <Text as='h2' type='h4' css={{ textAlign: 'center' }}>
          {title}
        </Text>
        <CardGrid minWidth='265px' gap='$9' css={{ marginTop: '$15' }}>
          {awards?.map((item, i) => {
            return (
              <AwardCard
                title={item.title}
                imagePath={item.imagePath}
                key={i}
              />
            );
          })}
        </CardGrid>
      </Layout>
    </Container>
  );
};

export default Awards;

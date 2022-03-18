import Head from 'next/head';
import Header from 'components/Header';
import services from 'data/services';
import Hero from 'components/Services/Hero';
import Footer from 'components/Footer';
import Intro from 'components/Services/Intro';
import Values from 'components/Services/Values';
import CTA from 'components/Sections/CTA';
import CustomerStory from 'components/Services/CustomerStory';
import Testimonial from 'components/Services/Testimonial';

const Compliance = () => {
  const data = services.compliance;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero
        title={data.title}
        description={data.description}
        imagePath={data.imagePath}
      />
      <Intro
        benefits={services.compliance.benefits}
        text={data.intro}
        imagePath='/images/comp1.svg'
      />
      <Values
        title='Learn More About The Regulatory Compliance '
        values={data.values}
      />
      <CustomerStory
        title={data.customerStory.title}
        text={data.customerStory.text}
        imagePath={data.customerStory.imagePath}
      />
      <Testimonial
        text={data.testimonial.text}
        author={data.testimonial.author}
        designation={data.testimonial.designation}
        imagePath={data.testimonial.imagePath}
      />
      <CTA
        text='We believe great things can start with a conversation. We would love to hear from you.'
        showButton
        imagePath='/images/footer1.svg'
        css={{
          '@bp7': {
            paddingTop: 0,
          },
        }}
      />
      <Footer />
    </>
  );
};

export default Compliance;

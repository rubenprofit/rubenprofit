import { Layout } from "@/components/Layout/Layout";
import { SEO } from "@/components/SEO/SEO";
import { getSiteMetaData } from "@/utils/helpers";

const About = () => {
  const { author, social } = getSiteMetaData();

  return (
    <>
      <SEO title="About" description={`About ${author.name}`} />
      <Layout>
        <div>
          <h1 className="text-3xl mb-3">About.</h1>
          <p className="text-sm">
            Ruben Profit is a software engineer from Queens, NY.
            His passion for technology can be found both in his professional
            and personal experience where he loves learning new things and contributing
            to open-source and enterprise code.
            You can follow him on Github <a href={`https://github.com/${social.github}`} className="underline">here</a> if
            you want to follow his contributions.
            When Ruben is not coding, you can find him killing time playing video games.
            You can follow him on Twitter <a href={`https://twitter.com/${social.twitter}`} className="underline">here</a>.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;

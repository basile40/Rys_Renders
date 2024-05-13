import { HeroAvatar, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <div className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Become the Experience
          </div>
        </>
      }
      description={
        <>
          Emerging from New Jersey with a foundation in software engineering
          artist Ryan Basile dives deeply into the realms of digital creation,
          projection mapping, and live performances. Infusing his passion for
          technology with a creative edge, he orchestrates immersive
          expereineces that captivate audiences. Collaborating seamlessly within
          teams, he harnesses a keen eye for detail and problem-solving skills
          that push the boundaries of innovation. He is dedicated to creating
          unforgettable moments in the audiovisuals landscape.
          {/* {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Link example where text is underlined
          </a>{' '} */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/src/images/rys_renders.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={undefined}
      /* socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      } */
    />
  </Section>
);

export { Hero };

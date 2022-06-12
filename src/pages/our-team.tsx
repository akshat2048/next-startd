import { tw } from 'twind';
import Particles from 'react-tsparticles';
import Arrow from '@/constants/svg/arrow.svg';
import Page from '@/components/page';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Impact Debate's Muthu Sundar is a rising senior at Brookfield East High School. Having won numerous local tournaments since his freshman year, championing the Wisconsin State Tournament his sophomore year, and qualifying to Gold TOC with 5 bids his junior year, Muthu has a proven track record when it comes to public forum debate.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
    name: `Co-Founder`,
  },
  {
    title: `Impact Debate's Akshat Channashetti is a rising senior at Brookfield East High School. In addition to winning multiple tournaments alonside Muthu, Akshat has also shown avid success in fields like Congressional debate, which have positions him to be a strong mentor for students to rely on as they work to improve their public speaking skills.`,
    image: `/images/akshat.jpg`,
    alt: `Proident pariatur est.`,
    name: `Co-Founder`,
  },
  {
    title: `Rafeh Khan something soemthing something someething. something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something  `,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
    name: `Lead Instructor`,
  }
];

const CasesSection = () => (
  <Page>
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Meet the team</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Our camp leaders and instructors are picked from a pool of some of the best debaters in the nation.
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.name}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  </Page>
);

export default CasesSection;

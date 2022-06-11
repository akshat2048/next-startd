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
    title: `Impact Debate's Co-Founders Akshat Channashetti and Muthu Sundar are both rising seniors at Brookfield East High School. Having won numerous local tournaments since their freshman year, championing the WDCA State Tournament their sophomore year, and qualifying to Gold TOC with 5 bids their junior year, Brookfield East CS has a proven track record when it comes to public forum debate.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
    name: `Co-Founders`,
  },
  {
    title: `Rafeh Khan something soemthing something someething. something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
    name: `Lead Instructor`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse. lit reprehenderit culpa Lorem reprehenderit excepteur esse. lit reprehenderit culpa Lorem reprehenderit excepteur esse. lit reprehenderit culpa Lorem reprehenderit excepteur esse. something soemthing something someething something soemthing something someethingsomething soemthing something someething`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
    name: `Lab Director`,
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

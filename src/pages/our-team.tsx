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
    title: `Muthukumar Sundar debates for Brookfield East in Brookfield Wisconsin. In his career so far he has been ranked as high as 8th in the nation. He has received 5 bids to the prestigious Tournament of Champions and also qualified to the National Speech and Debate Tournament for the past three years. In addition, he has quarterfinaled at many national circuit tournaments such as Jack Howe, Emory, and Apple Valley. Locally, he championed the Wisconsin State Debate Tournament in just his sophomore year. Muthu has also won numerous speaker awards at national tournaments. He is excited to teach at Impact!`,
    image: `https://i.imgur.com/IvudAqt.jpg?1`,
    alt: `Proident pariatur est.`,
    name: `Co-Founder`,
  },
  {
    title: `Akshat Channashetti is a rising senior at Brookfield East High School. In addition to winning multiple national circuit tournaments alonside Muthu, Akshat has also shown avid success in fields like Congressional debate, which have positions him to be a strong mentor for students to rely on as they work to improve their public speaking skills. He has received multiple speaker awards as well from tournaments like Nano Nagle Classic and the Apple Valley Invitational. Lastly, he's qualified to the NSDA and NCFL National tournaments in public forum debate. He is excited to teach at Impact!`,
    image: `/images/akshat.jpg`,
    alt: `Proident pariatur est.`,
    name: `Co-Founder`,
  },
];

const tentative_staff_articles = [

  {
    title: `Mahit Dagar something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something  `,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },

  {
    title: `Aarush Kaboo (he/him) is a rising senior at Seven Lakes High school where he competes as a first speaker for Seven Lakes KM. He has championed two national circuit tournaments at Alta (Silver and Black) and the University of Houston while also acquiring a gold bid at Blake, giving him 3 gold bids with two silvers from Blue Key and Berkeley. He has also been invited to the Berkeley and King Round Robin. He is skilled in persuasion and building a narrative as well as analytical thinking. He is very excited to work with Impact Debate this summer!`,
    image: `https://i.imgur.com/6BLUpzz.jpg`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },
  {
    title: `Rafeh Khan something soemthing something someething. something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something  `,
    image: `https://i.imgur.com/J6te8jW.jpg`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },

  {
    title: `Melinda Li something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing  `,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
    name: `Lab Leader`,
  },

  {
    title: `Arnav Mehta something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something  `,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },
  {
    title: `Shailan Patel something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing  `,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },

  {
    title: `Dheeraj Pasikanti something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something  `,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
    name: `Instructor`,
  },
  {
    title: `Claire Wang something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing something someething something soemthing  `,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
    name: `Lab Leader`,
  },
]

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
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          <b>Co-Founders</b>
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
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          <b>Tentative Staff</b>
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {tentative_staff_articles.map((article) => (
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

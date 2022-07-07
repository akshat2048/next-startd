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

const articles: any[] = [];

const CasesSection = () => (
    <Page>
        <section>
            <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
                <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
                    <ParticleBg />
                </div>
                <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
                    <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Schedule</h1>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
                        * All times in Central Time.
                    </p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
                        Summer Session: 10:00 AM to 2:00 PM every weekday from August 1 to 9.
                    </p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
                        Summer Session Final Tournament: Monday 8/8 and Tuesday 8/9.
                    </p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}> </p>
                    <hr></hr>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}><b>Daily Timing</b></p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}><i>First Day</i></p>
                    {/* Convert the following schedule Opening Ceremony: 9:00 - 9:45am 
Meet Your Lab : 10:00am - 11:00am 
Meet Your Mentor: 11:00 - 11:30 am
Break: 11:30 - 12:00 pm 
Topic Analysis + Demo Debate in Lab: 1:00 - 2:30pm 
 */}
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>Opening Ceremony: 9:00 - 9:45am</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Meet Your Lab : 10:00am - 11:00am</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Meet Your Mentor: 11:00 - 11:30 am</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Break: 11:30 - 12:00 pm</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Topic Analysis + Demo Debate in Lab: 1:00 - 2:30pm</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}><i>Regular days</i></p>
                    {/* Convert the following schedule:
        Live Lectures: 9:00 -10:00am 
Lab/Drills: 10:00 -11:00am PDT 
Practice Rounds: 11:00 -12:30pm 
Lunch Break: 12:30 -1:30pm 
Mentor Team Meeting: 1:30 - 2:30pm 
Individual Personalized Drills
*/}
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>Live Lectures: 9:00 -10:00am</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Lab/Drills: 10:00 -11:00am</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Practice Rounds: 11:00 -12:30pm</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Lunch Break: 12:30 -1:30pm</p>
                    <p className={tw(`text-white text-gray-400 text-center text-xl mt-15`)}>Mentor Team Meeting / Individual Personalized Drills: 1:30 - 2:30pm</p>
                    <div className={tw(`mx-auto pt-24`)}>
                        <div className={tw(`w-full flex flex-wrap justify-around`)}>
                            {articles.map((article) => (
                                <div
                                    key={article.title}
                                    className={tw(
                                        `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
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
                                        <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Case study</p>
                                        <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                                    </div>
                                </div>
                            ))}
                            {/* <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all case studies
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Page>
);

export default CasesSection;

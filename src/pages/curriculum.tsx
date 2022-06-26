import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Page from '@/components/page';

const listItems = [
  {
    title: `Research Techniques`,
    description: `Educational debate is impossible without building a strong academic foundation, and Impact Debate places special importance on this matter. Attendees will learn how to efficiently gather information on a variety of subject matters like economics, foreign affairs, and military doctrine. In addition to the traditional lecture setting where students learn the basics of this skill, our camp offers participants opportunities for one-on-one conferences with mentors who can help them through specific issues.`,
  },
  {
    title: `Communication & Presentation`,
    description: `Debaters need to be effective communicators; Impact Debate focuses on this necessity every day during camp. Students will be led by mentors through multiple speaking exercises that build confidence and fluency. Thanks to our diverse set of coaches and mentors, we are able to provide an effective communication strategies for any student. Debate is a portable skill, the tools students develop here will not only improve their success in the activity, it will also prepare them to become future leaders of their community.`,
  },
  {
    title: `Quick Thinking`,
    description: `The team at Impact Debate developed drills and exercises that are geared towards improving a students "quick thinking". For example, mentors will prompt students to brainstorm argument ideas under time constraints throughout the duration of the camp. In addition, Impact Debate's novel approach to topic lectures helps students discover patterns within complex topics and improve their ability to think on their feet.`,
  },
];

const ListSection = () => (
    <Page>
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}></h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Our Curriculum
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
              
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img src='/images/IMG_2E90260755D0-1.jpeg' width={'100%'} height={'100%'} />
            <img src='/images/IMG_CAD4FC355832-1.jpeg' width={'100%'} height={'100%'} />
          </div>
        </div>
      </div>
    </div>
  </section>
  </Page>
);

export default ListSection;

import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Link from 'next/link';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>What is Impact?</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Impact Debate Institute brings together some of the most successful coaches and well-respected debaters throughout the country to provide the highest caliber of instruction. Our primary concern is our students’ safety and well-being. To ensure equity and inclusion, we constantly monitor our students’ experience and our mentorship programs allow every passionate student to receive quality instruction regardless of skill level. 
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Our Mission</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Unbeknownst to many that enter the activity, debate is an expensive extracurricular. The emergence of private coaching and costly prep groups exacerbate financial inequalities. Compared to the thousands of dollars our competitors charge, our camp is priced at $30 per student for 2 weeks of instruction. Our goal is to reduce resource inequities in debate, and we encourage our students to reach out to our staff even after the camp ends for an extra help needed without charge. 100% of the profits from our camp will go toward the <a href="https://www.covenanthouse.org" className={tw(`underline text-blue-600 hover:text-blue-800 visited:text-purple-600`)}>Covenant House</a>, a charity which provides shelter, food, immediate crisis care, and other services to underprivileged youth. 
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Why Debate?</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Many parents and students who are considering joining their high school debate team often wonder how beneficial the activity will truly be. The center of competitive high school debate is to research both sides of important issues in a respectful medium for discussion. Students often devote countless hours researching arguments, writing cases, practicing speeches, and developing their ability to think on their feet. As a result, high school debaters reap numerous benefits. 
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Academic Achievement</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            While only 50% of high school students in urban schools graduate, debaters in urban high schools graduate at a rate of 90%. Furthermore, debaters perform better in college, scoring higher on ACT and SAT examinations, and getting into better institutions. Moreover, winning awards and having leadership positions demonstrates to colleges that the student has invested a large quantity of effort and time into their events. As a result, many successful debaters have gone on to attend prestigious institutions, including Ivy League Schools. Competitive debate, according to US Secretary of Education produces dynamic students fluent in critical thinking, communication, collaboration, creativity, and civic awareness.  
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Advocacy</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Perhaps the most important skill debate teaches students is how to be an advocate. It is quite common for debaters to present cases on structural oppression, racism, and patriarchal norms. Competitive debate shows students how to fight for the issues that they hold most dear to their heart. The persuasion and public speaking skills acquired through the activity are very self-empowering. In addition, speech and debate truly opens students’ eyes to societal issues occurring throughout the world. 
            </p>
          </div>
          {/* <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Integrations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
              consectetur.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;

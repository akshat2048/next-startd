import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Link from 'next/link';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(60vh - 4rem);
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Impact Debate
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          The most successful debate camp based out of Wisconsin.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary><Link href={'/curriculum'}>Curriculum</Link></Button>
        <span className={tw(`mx-2`)}>  </span>
        <Button><Link href={'/schedule'}>Schedule</Link></Button>
        <span className={tw(`mx-2`)}>  </span>
        <Button primary><Link href={'/our-team'}>Our Team</Link></Button>
        <span className={tw(`mx-2`)}>  </span>
        <Button><Link href={'mailto:23channa@elmbrookstudents.org?subject= Request for Information from Impact Debate&body=Please list any concerns you have below:'}>Contact Us</Link></Button>
        <span className={tw(`mx-2`)}>  </span>
        <Button primary><Link href={'https://forms.gle/nkZb2tDSyTDWFL38A'}>Register</Link></Button>
        <span className={tw(`mx-2`)}>  </span>
        <Button><Link href={'/mission'}>Our Mission</Link></Button>
      </div>
    </div>
    {/* <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Netlify className={tw(`m-12`)} width={140} />
          <Nike className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div> */}
  </header>
);

export default Header;

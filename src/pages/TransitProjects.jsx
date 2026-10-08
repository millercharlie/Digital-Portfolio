import patcoLogo from '../assets/showcase/patco/patco_logo.png';
import GlowCard from '../components/GlowCard';

const TransitProjects = () => {
  return (
    <div className='tp-background'>
      <div className='tp-card'>
        <hr className='tp-hr' />
        <div className='tp-top-row'>
          <h2 className='tp-title'>Transit Designs</h2>
          <div className='train-lines-bg'>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#353DD6' }}
            >
              B
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#353DD6', marginRight: '10px' }}
            >
              Y
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#B347D7' }}
            >
              C
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#B347D7' }}
            >
              H
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#B347D7' }}
            >
              A
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#F30004' }}
            >
              R
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#F30004' }}
            >
              L
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#F30004' }}
            >
              I
            </div>
            <div
              className='train-line-circle'
              style={{ backgroundColor: '#FFCC00', color: 'black' }}
            >
              E
            </div>
            <svg
              width='50'
              height='50'
              viewBox='0 0 653 653'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M523.369 432.13V165.15H652.369V523.511H652.532V652.511H165.01V523.511H432.316L0.970703 92.165L92.1875 0.948242L523.369 432.13Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <p style={{ padding: '0 30px' }}>
          Ever since I moved to Boston, I&apos;ve been fascinated by the subway
          system of the city, known as the T. I looked at the system map so many
          times that I began to ponder the graphic design specifications of
          transit systems more broadly. Over time, I started to design my own
          graphics and maps, and I have since spiraled into always wanting to
          design more, from fantasy maps to future maps to network maps. All of
          these designs are housed on this page. I hope you enjoy!
        </p>
        <div className='tp-sub'>
          <GlowCard color='#80276C' href='/projects/transit/mbta'>
            {
              <svg
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1000 1000'
                width='100'
              >
                <title>MBTA Logo</title>
                <path
                  d='M500 44.3c-251.7 0-455.7 204-455.7 455.7s204 455.7 455.7 455.7 455.7-204 455.7-455.7S751.7 44.3 500 44.3zm315.7 390.8H579.1v389.2H420.9V435.1H184.3V276.9h631.3v158.2z'
                  fill='#80276C'
                />
                <path
                  d='M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm0 955.7c-251.7 0-455.7-204-455.7-455.7S248.3 44.3 500 44.3s455.7 204 455.7 455.7-204 455.7-455.7 455.7z'
                  fill='white'
                />
                <path
                  d='M184.3 435.1h236.6v389.3h158.2V435.1h236.6V276.9H184.3z'
                  fill='white'
                />
              </svg>
            }
          </GlowCard>
          <GlowCard color='#d20e40' href='/projects/transit/patco'>
            <img style={{ width: '30%' }} src={patcoLogo} alt='PATCO Logo' />
          </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default TransitProjects;

import Box from './Box';

const icons = [
  'nodejs-icon.svg',
  'firebase-icon.svg',
  'google_appengine-icon.svg',
  'google_cloud_run-icon.svg',
  'mongodb-icon.svg',
  'postgresql-icon.svg',
];

export default function Hero() {
  return (
    <section className="parallax">
      <Box className="parallax__content absolute top-[10%] sm:top-[30%] lg:top-[24%] w-full mx-auto px-4 lg:px-8 xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <Box className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            ALBERT OKETCH
          </h1>
        </Box>
        <Box className="flex-1 flex justify-start lg:justify-end mt-8 lg:mt-0 lg:ml-8">
          <Box className="font-bold text-white text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-left">
            I enjoy creating <br/> technology for a positive impact on communities.
          </Box>
        </Box>
      </Box>
      <Box className="inset-0 z-2 hidden sm:flex">
        <img className="absolute parallax__cloudrun" src="./parallax/google_cloud_run-icon.svg" style={{ top:'50%', left:'80%'}} />
        <img className="absolute parallax__psql" src="./parallax/postgresql-icon.svg" style={{ top:'60%', left:'72%' }} />
        <img className="absolute parallax__node" src="./parallax/nodejs-icon.svg" style={{ top:'70%', left:'80%' }} />
        <img className="absolute parallax__firebase" src="./parallax/firebase-icon.svg" style={{ top:'80%', left:'72%' }} />
        <img className="absolute parallax__mongodb" src="./parallax/mongodb-icon.svg" style={{ top:'80%', left:'88%' }} />
        <img className="absolute parallax__appengine" src="./parallax/google_appengine-icon.svg" style={{ top:'60%', left:'88%' }} />
      </Box>
      <Box className="inset-0 z-2 sm:hidden">
        <img className="absolute parallax__cloudrun" src="./parallax/google_cloud_run-icon.svg" style={{ top:'50%', left:'66%'}} />
        <img className="absolute parallax__psql" src="./parallax/postgresql-icon.svg" style={{ top:'60%', left:'50%' }} />
        <img className="absolute parallax__node" src="./parallax/nodejs-icon.svg" style={{ top:'70%', left:'66%' }} />
        <img className="absolute parallax__firebase" src="./parallax/firebase-icon.svg" style={{ top:'80%', left:'50%' }} />
        <img className="absolute parallax__mongodb" src="./parallax/mongodb-icon.svg" style={{ top:'80%', left:'82%' }} />
        <img className="absolute parallax__appengine" src="./parallax/google_appengine-icon.svg" style={{ top:'60%', left:'82%' }} />
      </Box>
    </section>
  );
}

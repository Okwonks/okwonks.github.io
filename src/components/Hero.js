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
    <section className="">
      <Box className="">
        <Box className="">
          <h1 className="">
            ALBERT OKETCH
          </h1>
        </Box>
        <Box className="">
          <Box className="">
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
      <Box className="sm:hidden">
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

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
    <section className="min-h-screen flex items-center pt-20">
      <Box className="max-w-6xl mx-auto px-6">
        <Box className="max-w-4xl">
          <h1 className="font-medium md:text-[60px] sm:text-[50px] text-[40px] ">
            ALBERT OKETCH
          </h1>
        </Box>
        <Box className="">
          <Box className="">
            <p className="mt-4 sm:text-2xl">
              Building scalable systems.<br/>Empowering teams.<br/>Solving complex problems.
            </p>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

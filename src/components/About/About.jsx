import ReactTypingEffect from 'react-typing-effect';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, je suis
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Mael Duret
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">Je suis </span>
            <ReactTypingEffect
              text={[
                'développeur full-stack',
                'développeur d\'applications',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Développeur full-stack avec plus de 2 ans et demi d’expérience,
            je conçois des applications web et mobiles, performantes et
            évolutives. J’interviens aussi bien sur le front-end que le
            back-end, en utilisant des technologies modernes pour créer des
            interfaces intuitives et des fonctionnalités solides.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 hide-on-mobile">
            <FaHtml5 className="text-orange-600 text-5xl hover:scale-110 transition" title="HTML5" />
            <FaCss3Alt className="text-blue-600 text-5xl hover:scale-110 transition" title="CSS3" />
            <FaJs className="text-yellow-500 text-5xl hover:scale-110 transition" title="JavaScript" />
            <FaReact className="text-cyan-500 text-5xl hover:scale-110 transition" title="React" />
            <FaNodeJs className="text-green-600 text-5xl hover:scale-110 transition" title="Node.js" />
            <FaPython className="text-blue-400 text-5xl hover:scale-110 transition" title="Python" />
            <FaJava className="text-red-600 text-5xl hover:scale-110 transition" title="Java" />
            <FaPhp className="text-indigo-700 text-5xl hover:scale-110 transition" title="PHP" />
            <FaGitAlt className="text-orange-500 text-5xl hover:scale-110 transition" title="Git" />
            <FaGithub className="text-purple-700 text-5xl hover:scale-110 transition" title="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { socialLinks } from './arrays';
import { useContactSection } from './useContactSection';

const ContactSection = () => {
  const { formData, isLoading, handleSubmit, handleChange } = useContactSection();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
      <div className="w-full max-w-6xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Side: Logo and Social Links */}
          <aside className="col-span-full md:col-span-5 flex flex-col items-center justify-center md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/paguebit-logo.png"
                alt="PagueBit Logo"
                className="w-56 mb-8 md:mb-12"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 w-full max-w-[320px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-orange-100 rounded-xl shadow-sm hover:bg-orange-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <social.Icon size={24} className={social.colorClass} />
                  <span className="font-medium text-base text-gray-800">
                    {social.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </aside>

          {/* Right Side: Contact Form */}
          <article className="col-span-full md:col-span-7 flex items-center justify-center">
            <motion.form
              onSubmit={handleSubmit}
              className="w-full max-w-[500px] p-8 md:p-10 rounded-2xl flex flex-col gap-y-6 bg-white border border-orange-100 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-bold text-2xl md:text-3xl text-center text-gray-800 mb-2">
                Entre em Contato
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome"
                  required
                  className="p-3 border border-orange-100 rounded-lg focus:outline-none focus:border-orange-300 text-gray-800 bg-white transition-all duration-300 focus:ring-2 focus:ring-orange-200"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Empresa"
                  required
                  className="p-3 border border-orange-100 rounded-lg focus:outline-none focus:border-orange-300 text-gray-800 bg-white transition-all duration-300 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-3 border border-orange-100 rounded-lg focus:outline-none focus:border-orange-300 text-gray-800 bg-white transition-all duration-300 focus:ring-2 focus:ring-orange-200"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem"
                required
                rows={5} // Corrigido o erro de tipo
                className="p-3 border border-orange-100 rounded-lg focus:outline-none focus:border-orange-300 text-gray-800 bg-white transition-all duration-300 focus:ring-2 focus:ring-orange-200"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 rounded-lg font-semibold transition-all duration-300 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 disabled:bg-gray-300 hover:shadow-md"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </motion.form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
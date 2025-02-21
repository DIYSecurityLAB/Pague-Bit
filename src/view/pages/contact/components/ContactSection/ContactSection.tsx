import { motion } from 'framer-motion';
import { socialLinks } from './arrays';
import { useContactSection } from './useContactSection';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const { formData, isLoading, handleSubmit, handleChange } = useContactSection();

  return (
    <section className="flex items-start justify-center bg-white p-4  ">
      <div className="w-full max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Lado Esquerdo: Redes Sociais */}
          <aside className="col-span-full md:col-span-5 flex flex-col items-center justify-center md:pr-8">
            <motion.div
              className="flex flex-col gap-6 w-full max-w-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-8 rounded-full border border-orange-200 transition-transform transform hover:scale-105"
                >
                  <social.Icon size={32} className={social.colorClass} />
                  <span className="font-bold text-lg text-orange-800">
                    {t(`contact.social.${social.name.toLowerCase()}`)}
                  </span>
                </a>
              ))}
            </motion.div>
          </aside>

          {/* Lado Direito: Formulário de Contato */}
          <article className="col-span-full md:col-span-7 flex items-center justify-center">
            <motion.form
              onSubmit={handleSubmit}
              className="w-full max-w-lg p-10 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-800">
                {t("contact.title")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name")}
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("contact.form.company")}
                  required
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email")}
                required
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")}
                required
                rows={5}
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-lg font-semibold bg-orange-600 text-white transition-all hover:bg-orange-700 disabled:bg-gray-400"
              >
                {isLoading ? t("contact.form.sending") : t("contact.form.submit")}
              </button>
            </motion.form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
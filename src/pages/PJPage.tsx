import React from 'react';
    import { ArrowRight, Bitcoin, Building2, BarChart as ChartBar, Globe, Lock, MessageSquare, Shield } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';

    function PJPage() {
      const navigate = useNavigate();

      const features = [
        {
          icon: <Shield className="w-12 h-12 text-orange-500" />,
          title: "Segurança Empresarial",
          description: "Sistema robusto de segurança com múltiplas camadas de proteção para suas transações corporativas."
        },
        {
          icon: <Globe className="w-12 h-12 text-orange-500" />,
          title: "Pagamentos Internacionais",
          description: "Realize transações globais sem burocracias, com custos reduzidos e liquidação rápida."
        },
        {
          icon: <Building2 className="w-12 h-12 text-orange-500" />,
          title: "Integração Completa",
          description: "Soluções personalizadas para integrar Bitcoin aos seus sistemas existentes."
        },
        {
          icon: <ChartBar className="w-12 h-12 text-orange-500" />,
          title: "Gestão Financeira",
          description: "Dashboard completo para controle e análise de todas as suas operações em Bitcoin."
        },
        {
          icon: <Lock className="w-12 h-12 text-orange-500" />,
          title: "Conformidade",
          description: "Operações em total conformidade com as regulamentações vigentes."
        },
        {
          icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
          title: "Suporte Dedicado",
          description: "Equipe especializada para auxiliar sua empresa 24/7."
        }
      ];

      const benefits = [
        {
          title: "Redução de Custos",
          description: "Minimize taxas de transação e elimine intermediários desnecessários."
        },
        {
          title: "Eficiência Operacional",
          description: "Automatize processos e reduza tempo de liquidação de pagamentos."
        },
        {
          title: "Expansão Global",
          description: "Alcance novos mercados sem as limitações do sistema bancário tradicional."
        },
        {
          title: "Inovação Tecnológica",
          description: "Posicione sua empresa na vanguarda da revolução financeira digital."
        }
      ];

      return (
        <div className="min-h-screen">

          {/* Hero Section */}
          <section className="relative bg-gray-900 text-white pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
            <div className="container mx-auto px-6 relative">
              <div className="max-w-3xl">
                <motion.h1
                  className="text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Bitcoin para Empresas
                </motion.h1>
                <motion.p
                  className="text-xl mb-8 text-gray-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Modernize suas operações financeiras com soluções empresariais em Bitcoin.
                  Segurança, eficiência e inovação para seu negócio.
                </motion.p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <Bitcoin size={400} color="#f59e0b" />
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gray-700 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                      {React.cloneElement(feature.icon, { color: '#f59e0b' })}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center relative">
                  <span className="relative text-white">
                    Benefícios para seu Negócio
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800 p-8 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Integration Process */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16 text-center  relative">
                <span className="relative">
                  Processo de Integração
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
                </span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-gray-700 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Consultoria Inicial</h3>
                      <p className="text-gray-300">Análise detalhada das necessidades da sua empresa e planejamento estratégico.</p>
                    </div>
                  ```typescript
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-gray-700 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Desenvolvimento</h3>
                      <p className="text-gray-300">Customização e implementação das soluções de acordo com seu negócio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-gray-700 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Treinamento</h3>
                      <p className="text-gray-300">Capacitação completa da sua equipe para operar o sistema.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-gray-700 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Suporte Contínuo</h3>
                      <p className="text-gray-300">Acompanhamento e suporte técnico especializado para garantir o sucesso da operação.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="bg-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold mb-6">Transforme seu Negócio</h2>
                  <p className="text-xl mb-8 text-gray-900">
                    Estamos prontos para ajudar sua empresa a implementar soluções em Bitcoin.
                    Entre em contato e descubra como podemos impulsionar seu negócio.
                  </p>
                  <motion.button
                    onClick={() => navigate('/contact')}
                    className="bg-gray-900 text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Agende uma Consultoria
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    export default PJPage;

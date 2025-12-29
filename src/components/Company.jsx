
import { BuildingOfficeIcon, UsersIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

function Company() {
  const features = [
    {
      icon: BuildingOfficeIcon,
      title: "Missão",
      description: "Fornecer as melhores soluções em gerenciamento de projetos para empresas de todos os tamanhos."
    },
    {
      icon: UsersIcon,
      title: "Valores",
      description: "Transparência, inovação e compromisso com o sucesso dos nossos clientes."
    },
    {
      icon: ChartBarIcon,
      title: "Visão",
      description: "Ser referência em software de gerenciamento de custos na América Latina até 2025."
    },
    {
      icon: GlobeAltIcon,
      title: "Atuação",
      description: "Presente em 5 países, atendendo mais de 1000 empresas satisfeitas."
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa Empresa</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Especialistas em soluções de gerenciamento de projetos e controle de custos
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
        <p className="mb-4">
          Fundada em 2020, a Costs surgiu da necessidade de simplificar o gerenciamento de projetos
          para pequenas e médias empresas. Começamos como uma startup e hoje somos uma das principais
      referências no mercado de software de gestão.
        </p>
        <p>
          Nossa equipe é composta por especialistas em desenvolvimento, finanças e gestão de projetos,
          unidos pelo objetivo comum de oferecer a melhor experiência para nossos clientes.
        </p>
      </div>
    </div>
  );
}

export default Company;

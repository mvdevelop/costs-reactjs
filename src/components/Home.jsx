
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import savings from '../img/savings.svg';
import LinkButton from './LinkButton';

function Home() {
  const slides = [
    {
      id: 1,
      title: "Controle Total",
      description: "Gerencie todos os seus projetos em um só lugar"
    },
    {
      id: 2,
      title: "Economia Inteligente",
      description: "Acompanhe custos e maximize seu orçamento"
    },
    {
      id: 3,
      title: "Relatórios Detalhados",
      description: "Tome decisões baseadas em dados reais"
    }
  ];

  return (
    <div className="py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo ao <span className="text-primary-600">Costs</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Comece a gerenciar os seus projetos agora mesmo!
        </p>
        <LinkButton to='/newproject' text='Criar Projeto' />
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Por que escolher o Costs?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRightIcon className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Controle total do orçamento do projeto</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Acompanhamento de serviços e custos</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Relatórios detalhados e insights</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Interface moderna e intuitiva</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={savings} alt="Costs" className="max-w-md w-full" />
        </div>
      </div>

      {/* Carousel com Swiper */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Recursos Principais</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-xl shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 md:p-12 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">{slide.title}</h4>
                <p className="text-lg opacity-90">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;

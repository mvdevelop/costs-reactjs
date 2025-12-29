
import { useState } from 'react';
import { toast } from 'react-toastify';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tem alguma dúvida ou sugestão? Fale conosco!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulário */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de contato */}
        <div>
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <p className="opacity-90">contato@costs.com.br</p>
                  <p className="opacity-90">suporte@costs.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="opacity-90">(11) 99999-9999</p>
                  <p className="opacity-90">(11) 98888-8888</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p className="opacity-90">Av. Paulista, 1000</p>
                  <p className="opacity-90">São Paulo - SP, 01310-100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="font-medium">9h às 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="font-medium">9h às 12h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo e Feriados</span>
                <span className="font-medium text-red-500">Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

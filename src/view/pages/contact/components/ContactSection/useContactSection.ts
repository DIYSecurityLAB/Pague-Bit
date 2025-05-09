import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const useContactSection = () => {
  // Número para o qual será enviada a mensagem (substitua pelo número correto)
  const whatsappNumber = '5511977328121';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `
*Novo contato PagueBit*
-------------------
*Nome:* ${data.name}
*Empresa:* ${data.company}
*Email:* ${data.email}
*Mensagem:* ${data.message}
-------------------
    `;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepara a URL do WhatsApp com a mensagem formatada
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage(formData)}`;

      // Redireciona para o WhatsApp
      window.open(whatsappUrl, '_blank');

      // Limpa o formulário após enviar
      setFormData({ name: '', email: '', company: '', message: '' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isLoading,
    handleSubmit,
    handleChange,
  };
};

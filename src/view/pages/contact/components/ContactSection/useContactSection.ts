import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const useContactSection = () => {
  // Número para o qual será enviada a mensagem (substitua pelo número correto)
  const telegramUsername = 'paguebit';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const formatTelegramMessage = (data: FormData): string => {
    const message = `🔔 Novo contato PagueBit

👤 Nome: ${data.name}
🏢 Empresa: ${data.company}
📧 Email: ${data.email}
💬 Mensagem: ${data.message}

Enviado através do site PagueBit`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepara a URL do Telegram com a mensagem formatada
      const telegramUrl = `https://t.me/${telegramUsername}?text=${formatTelegramMessage(formData)}`;

      // Redireciona para o Telegram
      window.open(telegramUrl, '_blank');

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

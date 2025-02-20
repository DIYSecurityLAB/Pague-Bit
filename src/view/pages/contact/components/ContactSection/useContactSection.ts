import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const useContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form submitted:', formData);

    // Simulate an API call with a delay
    setTimeout(() => {
      setIsLoading(false);
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isLoading,
    handleSubmit,
    handleChange,
  };
};

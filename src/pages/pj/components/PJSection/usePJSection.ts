import { useNavigate } from 'react-router-dom';

export const usePJSection = () => {
  const navigate = useNavigate();

  const handleConsultingClick = () => {
    navigate('/contact');
  };

  return {
    handleConsultingClick
  };
};

import { useNavigate } from 'react-router-dom';

export const usePFSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return {
    handleContactClick
  };
};

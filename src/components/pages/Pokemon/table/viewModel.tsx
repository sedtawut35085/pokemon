import { useNavigate } from "react-router-dom";

const ViewModel = () => {
  const navigate = useNavigate();
  const handleNavigateToDetail = (dataId: string) => {
    navigate(
      `/pokemon/${dataId}`
    );
  };

  return {
    handleNavigateToDetail,
  };
};
export default ViewModel;

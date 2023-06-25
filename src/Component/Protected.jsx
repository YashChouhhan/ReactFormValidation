import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Comp } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("userData");
    if (login) {
      navigate("/login");
    }
  });
  return (
    <>
      <Comp />
    </>
  );
};
export default Protected;
 
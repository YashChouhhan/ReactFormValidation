import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
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
    sdsfsfsf
      <Comp />
    </>
  );
};
export default Protected;
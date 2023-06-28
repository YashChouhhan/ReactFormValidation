import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Comp } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("loggedIn");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <>
      <p>Test</p>
      <Comp/>
    </>
  );
};
export default Protected;
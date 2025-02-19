import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  max-width: 30%;
  border: 1px solid #e4e4e4;
  margin: 20px;
  margin-left: 0;

  @media (max-width: 768px) {
    max-width: 80%;
    gap: 8px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px;
  }
`;

const PillButton = styled(Button)<{ active?: boolean }>`
  border-radius: 5px;
  padding: 20px 20px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active
      ? "background: #1E40AF; color: #ffffff; border: 1px solid #a3a4ae;"
      : "background: white; color: black; border: none;"}

  &:hover {
    background: #1E40AF !important;
    color: #ffffff !important;
    border: 1px solid #a3a4ae !important
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const routes = [
  { key: "dashboard", label: "Dashboard", path: "/" },
  { key: "all-books", label: "All Books", path: "/allbooks" },
  { key: "issued-books", label: "Issued Books", path: "/issuedbooks" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      {routes.map(({ key, label, path }) => (
        <PillButton
          key={key}
          active={location.pathname === path}
          onClick={() => navigate(path)}
        >
          {label}
        </PillButton>
      ))}
    </NavContainer>
  );
};

export default Navigation;
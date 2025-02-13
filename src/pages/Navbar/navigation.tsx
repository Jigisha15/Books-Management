import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

const NavContainer = styled.div`
      display: flex;
    justify-content: center;
    gap: 12px;
    padding: 12px;
    background: #fff;
    border-radius: 8px;
    width: 30%;
    border: 1px solid black;
    margin:20px
`;

const PillButton = styled(Button)<{ active?: boolean }>`
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active
      ? "background: #a3a4ae; color: white; border: 1px solid black;"
      : "background: white; color: black; border: none;"}
      &:hover {
    background: #a3a4ae !important;
    color: white !important;
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
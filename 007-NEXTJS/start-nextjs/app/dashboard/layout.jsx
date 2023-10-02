function DashboardLayout({ children }) {
  return (
    <>
      <nav style={{ backgroundColor: "green", fontSize: "24px" }}>
        <ul>
          <li>Perfil</li>
          <li>Conta</li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default DashboardLayout;

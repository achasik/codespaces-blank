import { Container, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
  // if (!user) return null;
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header />
        <Outlet />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            Component={() => {
              return <div>Path {window.location.pathname + " not found"}</div>;
            }}
          />
        </Routes> */}
      </Container>
    </>
  );
}
export default Layout;

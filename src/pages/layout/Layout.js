import { Outlet } from "react-router-dom";
import { UserContentProvider } from "../../Context/userContext";

const Layout = () => {
  return (

    <UserContentProvider>
      <main>
        <section className="body">
          <Outlet />
        </section>

      </main>
    </UserContentProvider>

  )
};

export default Layout;
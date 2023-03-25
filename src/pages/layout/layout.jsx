import { UserContentProvider } from "../../contexts/userContext";
import { Outlet } from "react-router-dom";
// import { Navbar } from "../../components/Navbar/Navbar";

export function Layout() {
    return (
        <UserContentProvider>
            <main>
                {/* <Navbar/> */}
                <section className="body">
                    <Outlet />
                </section>

            </main>
        </UserContentProvider>
    );
}

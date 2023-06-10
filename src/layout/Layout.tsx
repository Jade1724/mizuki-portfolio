import Navbar from "../components/Navbar";

type LayoutProps = {
    children: React.ReactElement;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;

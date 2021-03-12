import Footer from "../Footer"
import Header from "../Header"
import Menu from "../Menu"

const Layout = ({children}) => {
    return (
        <div className="mx-4 my-3">
            <Header />
            <Menu />
            {children}
            <Footer />
        </div>  
    );
};

export default Layout;
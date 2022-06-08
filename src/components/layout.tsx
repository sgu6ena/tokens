import React, {FC} from 'react';
import Header from "./navigation/header/Header";
import Footer from "./footer/Footer";
type Props = {
    children?: React.ReactNode
};
const Layout: FC<Props> = ({children}) => {
    return (
            <div className="flex min-h-screen my-2 flex-col justify-between gap-20" >
                <Header/>
                {children}
                <Footer/>
            </div>
    );
};

export default Layout;
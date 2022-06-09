import {FC} from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: React.ReactNode
};
const Layout: FC<Props> = ({children}) => {
  return (
    <div  className={'flex min-h-screen flex-col justify-between gap-14'}>
      <div className="container flex flex-col justify-between gap-14">
        <Header/>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
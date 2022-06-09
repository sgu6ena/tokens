import React, {FC} from 'react';
import Logo from "../logo/Logo";
import Contacts from "../contacts/Contacts";

const Footer: FC = () => {
  return (
    <div>
      <div className={'bg-white mt-10 h-20 flex items-center'}>
        <div className="container flex-center-between">
          <Logo/>
          <Contacts/>
        </div>
      </div>
      <div className={'bg-blue-600  h-8 flex items-center justify-center text-sm text-white'}>
        IDC. Удостоверяющий центр. Все права защищены. 2022.
      </div>
    </div>
  );
};

export default Footer;
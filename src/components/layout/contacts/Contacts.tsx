import {FC} from 'react';
import {ReactComponent as Phone} from "../../../assets/images/phone.svg";
import {ReactComponent as Mail} from "../../../assets/images/mail.svg";

const Contacts: FC = () => {
  return (
    <div className={'flex items-center gap-8 text-sm text-gray-900'}>
      <div className={'flex items-center gap-2'}>
        <Mail width={48} height={48}/>
        <a href="mailto:support@ca.idc.md">support@ca.idc.md</a>
      </div>
      <div className={'flex items-center gap-2'}>
        <Phone width={48} height={48}/>
        <a href="tel:053338120">0(533)38120</a>
      </div>
    </div>
  );
};

export default Contacts;
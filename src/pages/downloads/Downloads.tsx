import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";

const Downloads: FC = () => {
    return (
        <Layout>
          <div className={"flex justify-center items-center"}>
            <Title>Загрузки</Title>
          </div>
          <div>
            <p>
              <b>IDC: Управление ключами </b> <br/>
              Позволяет подавать в УЦ запросы на получение сертификатов открытых ключей электронной подписи. Позволяет загружать выданные сертификаты, просматривать детальную информацию по ним и, при необходимости, отзывать (аннулировать).
              <a href="" className={"block underline mb-10 text-2xl"}>
                IDC: Управление ключами
              </a>
            </p>
            <p>
              <b>EnterSafe PKI Manager</b> <br/>
              Позволяет провести первичную инициализацию ключевого носителя информации (токена), присвоить ключевому носителю удобное имя и сменить ПИН-код пользователя. Также позволяет проводить основные операции с сертификатами, находящимися на ключевом носителе.
              <a href="" className={"block underline mb-10 text-2xl"}>
                EnterSafe PKI Manager
              </a>
            </p>
            <p>
              <b>Microsoft.NET Framework версии 4.7.2 </b><br/>
              Пакет программных библиотек компании Microsoft, необходимый для функционирования пользовательских программ.
              <a href="" className={"block underline mb-10 text-2xl"}>
                Microsoft.NET Framework версии 4.7.2
              </a>
            </p>
          </div>
        </Layout>
    );
};

export default Downloads;
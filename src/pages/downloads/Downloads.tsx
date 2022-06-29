import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";
import {ReactComponent as DownloadIcon} from "../../assets/images/download.svg";
import styles from './downloads.module.scss'
const Downloads: FC = () => {
    return (
        <Layout>
          <div className={"flex justify-center items-center"}>
            <Title>Загрузки</Title>
          </div>
          <div>
            <p>
              <b>IDC: Управление ключами </b> <br/>
              Позволяет подавать в УЦ запросы на получение сертификатов открытых ключей электронной подписи.
              Позволяет загружать выданные сертификаты, просматривать детальную информацию по ним и, при необходимости, отзывать (аннулировать).
              <a href="./files/IDC__upravlenie_kluchami(775663v1).ZIP" className={styles.link}>
                <DownloadIcon className={styles.icon}/>
                <span>IDC: Управление ключами</span>
              </a>
            </p>
            <p>
              <b>EnterSafe PKI Manager</b> <br/>
              Позволяет провести первичную инициализацию ключевого носителя информации (токена), присвоить ключевому
              носителю удобное имя и сменить ПИН-код пользователя.
              Также позволяет проводить основные операции с сертификатами, находящимися на ключевом носителе.
              <a href="./files/Drivers_for_token_(775665v1).ZIP" className={styles.link}>
                <DownloadIcon className={styles.icon}/>
                <span>EnterSafe PKI Manager</span>
              </a>
            </p>
            <p>
              <b>Microsoft.NET Framework версии 4.7.2 </b><br/>
              Пакет программных библиотек компании Microsoft, необходимый для функционирования пользовательских программ.
              <a href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net472-web-installer" className={styles.link}>
                <DownloadIcon className={styles.icon}/>
                <span>Microsoft.NET Framework версии 4.7.2</span>
              </a>
            </p>
          </div>
        </Layout>
    );
};

export default Downloads;
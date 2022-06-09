import {FC} from 'react';
import SecondaryBlock from "../../components/secondaryBlock/SecondaryBlock";
import styles from "./Home.module.scss"

const textForBlock1 = 'Подделать ЭП невозможно - это требует огромного количества вычислений, которые не могут быть реализованы при современном уровне математики и вычислительной техники за приемлемое время, то есть пока информация, содержащаяся в подписанном документе, сохраняет актуальность.'

const Block1 = () => <SecondaryBlock image={'./images/1.png'} text={textForBlock1}>
    <h4>
        <span className={'text-accent'}>Преимущества </span> использования ЭП
    </h4>
    <ul>
        <li> значительно сократить время, затрачиваемое на оформление сделки и обмен документацией;</li>
        <li> усовершенствовать и удешевить процедуру подготовки, доставки, учета и хранения
            документов;
        </li>
        <li> гарантировать достоверность документации;</li>
        <li> минимизировать риск финансовых потерь за счет повышения конфиденциальности информационного
            обмена;
        </li>
        <li> построить корпоративную систему обмена документами.</li>
    </ul>
</SecondaryBlock>


const Block2 = () => (
    <SecondaryBlock image={'./images/2.png'}>
        <h4>
            Где <span className={'text-accent'}> используется</span> электронная подпись
        </h4>
        <ul>
            <li> значительно сократить время, затрачиваемое на оформление сделки и обмен
                документацией;
            </li>
            <li> усовершенствовать и удешевить процедуру подготовки, доставки, учета и хранения
                документов;
            </li>
            <li> гарантировать достоверность документации;</li>
            <li> минимизировать риск финансовых потерь за счет повышения конфиденциальности
                информационного
                обмена;
            </li>
            <li> построить корпоративную систему обмена документами.</li>
        </ul>
    </SecondaryBlock>
)

const Block3 = () => (
    <SecondaryBlock image={'./images/3.png'}>
        <h4>
            <span className={'text-accent'}>Криптографическая</span> основа ЭП</h4>
        <p>
            В основе электронной подписи лежит криптография открытого ключа. С ее помощью формируется
            специальный сертификат пользователя. Он содержит данные о пользователе, открытый ключ и
            электронную подпись сертификата, ее можно проверить с помощью открытого ключа удостоверяющего
            центра. Алгоритм гарантирует, что произвести генерацию подписи может только удостоверяющий
            центр, который имеет секретный ключ шифрования и доверие к которому является основой для работы
            всей системы ЭП.
        </p>
        <p className={'mt-3'}>
            Доверие к удостоверяющим центрам основано на иерархическом принципе: сертификат
            удостоверяющего центра нижнего уровня заверяется электронной подписью удостоверяющего центра
            более
            высокого уровня. Высочайшим уровнем удостоверяющих центров является государственный, который
            находится под управлением соответствующих государственных органов.
        </p>
    </SecondaryBlock>
)
const text4 = () =>
    <ul>
        <li> сертификат ключа подписи, относящийся к этой электронной цифровой подписи, не утратил силу (действует) на
            момент проверки или на момент подписания электронного документа при наличии доказательств, определяющих
            момент подписания;
        </li>
        <li> подтверждена подлинность электронной цифровой подписи в электронном документе;</li>
        <li> электронная цифровая подпись используется в соответствии со сведениями, указанными в сертификате ключа
            подписи.
        </li>
    </ul>

const Block4 = () => <SecondaryBlock image={'./images/4.png'} text={text4()}>
    <h4>
        <span className={'text-accent'}>Равнозначность</span> собственноручной подписи
    </h4>
    <p>Электронная цифровая подпись в электронном документе равнозначна собственноручной подписи в документе на бумажном
        носителе при одновременном соблюдении следующих условий:</p>
</SecondaryBlock>

const text5 = () =><ul>
   <li> выдача сертификатов открытых ключей электронной подписи;</li>
   <li> предоставление списков отзывов сертификатов любым заинтересованным лицам;</li>
   <li> отзыв (аннулирование) сертификатов открытых ключей, в случае их компрометации;</li>
   <li> удостоверение правильности подписи электронных документов;</li>
   <li> разбор конфликтных ситуаций.</li>
</ul>

const Block5 = () => <SecondaryBlock image={'./images/5.png'} text={text5()}>
    <h4>
        <span className={'text-accent'}>Функции</span> удостоверяющего центра
    </h4>
    <p>Удостоверяющий центр (Центр сертификации) — организация, выпускающая сертификаты открытых ключей электронной
        подписи. Удостоверяющий центр оказывает следующие услуги:</p>
</SecondaryBlock>


const Secondary: FC = () => {
    return (
        <div className={styles.secondary}>
            <h3 className={'subtitle '}> Для чего нужна ЭП?</h3>
            <div className={styles.row}>
                <Block1/>
                <Block2/>
            </div>
            <div className={styles.row}>
                <Block3/>
            </div>
            <div className={styles.row}>
                <Block4/>
                <Block5/>
            </div>
        </div>
    );
};

export default Secondary;
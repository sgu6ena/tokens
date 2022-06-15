import {FC} from "react";

type Props = {
    img?:string
    children?: React.ReactNode

};

const MainBlock:FC<Props> = ({children, img}) => {
    return (
        <div className={'flex-col flex-center-between  lg:flex-row  '}>
            <div className={'flex flex-col gap-6 '}> {children}</div>
            <div className={' md:pt-0 pt-5 '}>{img&&<img src={img}/>}</div>
        </div>
    );
};

export default MainBlock;
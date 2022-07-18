 import {FC} from "react";

type Props = {
    children?: React.ReactNode,
    title?: string,
    image?: string
  color?:string
};

const PrimaryBlock: FC<Props> = ({children, title, image, color}) => {
    return (<div >
            <h3 className={'subtitle mb-8'}>{title}</h3>
            <div style={{background:color}} className='block-shadow bg-white rounded-xl  md:flex-row flex-col flex-center-between flex-shrink-0 flex-grow-0'>
                <div className={'md:px-20 md:py-16 py-8 px-10'}>{children}</div>

                <div className={'flex-shrink-0 w-96 flex-grow-0 flex justify-center'}>
                    <img src={image} className={'object-contain'}  alt={title}/>
                </div>
            </div>
        </div>
    );
};

export default PrimaryBlock;
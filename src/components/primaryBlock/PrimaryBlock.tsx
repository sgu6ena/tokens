import {FC} from "react";
type Props = {
    children?: React.ReactNode
};

const PrimaryBlock:FC<Props> = ({children}) => {
    return (
        <div className='block-shadow bg-white rounded p-20'>
            {children}
        </div>
    );
};

export default PrimaryBlock;
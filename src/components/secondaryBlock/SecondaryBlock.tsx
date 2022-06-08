import {FC} from "react";
type Props = {
    children?: React.ReactNode
};

const SecondaryBlock:FC<Props> = ({children}) => {
    return (
        <div className='block-shadow bg-white rounded p-5'>
            {children}
        </div>
    );
};

export default SecondaryBlock;
import {FC} from "react";
type Props = {
    children?: React.ReactNode
};

const MainBlock:FC<Props> = ({children}) => {
    return (
        <div >
            {children}
        </div>
    );
};

export default MainBlock;
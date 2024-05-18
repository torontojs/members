import React, { ReactElement } from "react";

type Props = {
    children: ReactElement | string;
}
const marquee = ({ children }: Props) => {
    return (
        <div className="marquee">
            <span>{children}</span>
        </div>
    );
}
export default marquee;
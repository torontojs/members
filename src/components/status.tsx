import * as React from "react";

enum MemberStatus {
    SEEKING_EMPLOYMENT = 'Seeking employment',
    INCREASING_SHAREHOLDER_VALUE = 'Increasing shareholder value',
    COMPLICATED = 'It\'s complicated',
    AIRGAPPED = 'Airgapped (Don\'t work in tech)'
}

type StatusProps = {
    status: keyof typeof MemberStatus | string;
};

const Status = ({ status }: StatusProps) => {
    return (
        <div className="status-wrapper">{status}</div>
    )
}

export default Status
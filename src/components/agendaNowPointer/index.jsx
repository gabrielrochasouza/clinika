import { DivNow } from "./styles";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import { getPorcentXRelationY, tranforTimeInMinutes } from "../../utils";

const NowPointer = ({ date, nowRef }) => {
    const [now, setNow] = useState(
        new Date(Date.now()).toLocaleString().replaceAll("/", "-").split(" ")
    );

    setInterval(() => {
        setNow(
            new Date(Date.now())
                .toLocaleString()
                .replaceAll("/", "-")
                .split(" ")
        );
    }, 10000);

    return (
        <DivNow
            inv={
                date.toLocaleDateString().replaceAll("/", "-") === now[0]
                    ? false
                    : true
            }
            ref={nowRef}
            ini={getPorcentXRelationY(tranforTimeInMinutes(now[1]), 1440)}>
            <FaCaretRight />
        </DivNow>
    );
};

export default NowPointer;

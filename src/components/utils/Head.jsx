import { useLayoutEffect } from "react";

function Head({ title = "" }) {

    useLayoutEffect(() => {
        document.title = title
    }, [title]);

    return (<></>);
}

export default Head;
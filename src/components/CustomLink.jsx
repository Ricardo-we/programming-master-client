import { Link } from "react-router-dom";

function CustomLink({ children, to = "", ...props }) {
    return (
        <>
            <style>{`
            .base-anchor {
                text-decoration: none;
            }
        `}</style>
            <Link style={props?.style} className={`base-anchor ${props.className}`} to={to}>
                {children}
            </Link>
        </>
    );
}


export default CustomLink;
import { Link } from "react-router-dom";


export default function BackButton(){

    return (
        <>
            <Link to="/" className="btn btn-danger w-75 d-block m-auto back-btn">Back</Link>
        </>
    );

}
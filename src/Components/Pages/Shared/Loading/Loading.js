import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div style={{ height: '450px' }} className='w-100 d-flex justify-content-center align-item-center'>
            <Spinner animation="border" variant="info" />
        </div>
    );
}
export default Loading;
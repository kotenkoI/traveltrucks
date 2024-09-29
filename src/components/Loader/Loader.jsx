import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
    return (
        <LoaderWrapper>
            <ClipLoader
                color="#6C717B"
                size={80}
                aria-label="clip-loading"
            />
        </LoaderWrapper>
    );
}

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';
import Comments from '../Comments/Comments';
import { Container } from './Reviews.styled.js';

export default function Reviews() {
    const reviewsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.endsWith('/reviews')) {
            if (reviewsRef.current) {
                reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.pathname]);

    return (
        <Container ref={reviewsRef}>
            <Comments />
            <UserForm />
        </Container>
    );
}

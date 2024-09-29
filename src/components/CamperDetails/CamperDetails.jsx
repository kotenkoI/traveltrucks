import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Campervan from '../CamperFeatures/CamperFeatures';
import UserForm from '../UserForm/UserForm';
import { Container } from './CamperDetails.styled';

export default function CamperFeatures() {
    const featuresRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.endsWith('/features')) {
            if (featuresRef.current) {
                featuresRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.pathname]);

    return (
        <Container ref={featuresRef}>
            <Campervan />
            <UserForm />
        </Container>
    );
}

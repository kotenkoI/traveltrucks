import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
    margin-bottom: 40px;
   

    @media (min-width: 1440px) {
        
        flex-direction: row;
        gap: 40px;
        margin-top: 44px;
        margin-bottom: 80px;
    }
`;
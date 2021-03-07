import { Link } from 'react-router-dom';
import React, { Container } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Home page</h1>
            <h3>Go to <Link to='/activities'>Activity</Link></h3>
        </Container>
    )
}
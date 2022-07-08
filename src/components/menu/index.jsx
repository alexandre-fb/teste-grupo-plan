import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
    <Container>
        <li><Link to='/contato'>Contato</Link></li>

    </Container>
    )
}

export const Container = styled.ul`
`
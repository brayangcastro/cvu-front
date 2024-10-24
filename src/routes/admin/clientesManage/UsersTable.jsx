import { useState } from 'react';
import { Table, Row, Col, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UsersTable = ({ users, getMembershipStatus }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filteredUsers = users.filter(user => {
        const status = getMembershipStatus(user.Fecha).text;
        return (
            (user.Nombre && user.Nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.Email && user.Email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.Celular && user.Celular.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentUsers = filteredUsers.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = page => setCurrentPage(page);

    return (
        <>
            <Row>
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre o correo"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Membresía</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, index) => {
                        const membershipStatus = getMembershipStatus(user.Fecha);
                        return (
                            <tr key={index}>
                                <td style={membershipStatus.style}>{membershipStatus.text}</td>
                                <td>{user.ID}</td>
                                <td>{user.Nombre}</td>
                                <td>{user.Celular}</td>
                                <td>{user.Email}</td>
                                <td>{user.Fecha}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination>
                {currentPage > 1 && <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />}
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                {currentPage < totalPages && <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />}
            </Pagination>
        </>
    );
};

export default UsersTable;

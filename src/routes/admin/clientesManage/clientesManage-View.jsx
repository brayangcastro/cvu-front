import { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; 
import IconAdd from '../../../assets/icons/add.svg';  
import { Doughnut, Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import './clientesManage.css';  
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { differenceInDays, parseISO } from 'date-fns'; 
import UsersTable from './UsersTable';  // Importa el componente de tabla

const ClientesManageView = (props) => {
    const { users } = props;

    const [chartData, setChartData] = useState({
        labels: ['Vencido', 'Vencido reciente', 'Próximo a vencer', 'Activo'], 
        datasets: [
            {
                label: 'Usuarios por Estado de Membresía',
                data: [0, 0, 0, 0], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  
                    'rgba(255, 165, 0, 0.6)',  
                    'rgba(255, 206, 86, 0.6)', 
                    'rgba(75, 192, 192, 0.6)', 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  
                    'rgba(255, 165, 0, 1)',   
                    'rgba(255, 206, 86, 1)',  
                    'rgba(75, 192, 192, 1)',  
                ],
                borderWidth: 1,
            },
        ],
    });

    const dataEstudiantes = {
        labels: ['Total de usuarios', 'Vencido', 'Vencido reciente', 'Próximo a vencer', 'Activo'], 
        datasets: [
            {
                label: 'Estado de Membresía',
                backgroundColor: [
                    '#1ab1de20', '#ff6384', '#ffa500', '#ffce56', '#4bc0c0',
                ],
                borderColor: '#1ab1de',
                borderWidth: 1,
                hoverBackgroundColor: [
                    '#1ab1de80', '#ff6384b3', '#ffa500b3', '#ffce56b3', '#4bc0c0b3',
                ],
                hoverBorderColor: '#1ab1de',
                data: [
                    users.length,
                    chartData.datasets[0].data[0],
                    chartData.datasets[0].data[1],
                    chartData.datasets[0].data[2],
                    chartData.datasets[0].data[3],
                ],
            },
        ],
    };

    const countMembershipStatus = users => {
        const statusCounts = { vencido: 0, proximoAVencer: 0, activo: 0 };
        users.forEach(user => {
            const status = getMembershipStatus(user.Fecha);
            if (status.text === 'Vencido') {
                statusCounts.vencido++;
            } else if (status.text === 'Próximo a vencer') {
                statusCounts.proximoAVencer++;
            } else if (status.text === 'Activo') {
                statusCounts.activo++;
            }
        });
        return statusCounts;
    };

    useEffect(() => {
        const statusCounts = countMembershipStatus(users);
        setChartData({
            ...chartData,
            datasets: [{
                ...chartData.datasets[0],
                data: [statusCounts.vencido, statusCounts.proximoAVencer, statusCounts.activo]
            }]
        });
    }, [users]);

    const getMembershipStatus = (membershipEndDate) => {
        const today = new Date();
        if (!membershipEndDate) {
            return { style: { backgroundColor: 'rgba(211, 211, 211, 0.6)', color: 'black' }, text: 'Fecha no disponible', daysDifference: 'N/A' };
        }
        const endDate = parseISO(membershipEndDate);
        const daysDifference = differenceInDays(endDate, today);
        let status = 'Activo';
        let backgroundColor = 'rgba(75, 192, 192, 0.6)';

        if (daysDifference < 0) {
            if (daysDifference >= -7) {
                status = 'Vencido reciente';
                backgroundColor = 'rgba(255, 206, 86, 0.6)';
            } else {
                status = 'Vencido';
                backgroundColor = 'rgba(255, 99, 132, 0.6)';
            }
        } else if (daysDifference <= 7) {
            status = 'Próximo a vencer';
            backgroundColor = 'rgba(255, 205, 86, 0.6)';
        }

        return { style: { backgroundColor, color: 'black' }, text: status, daysDifference };
    };

    const optionsDoughnut = {
        plugins: {
            legend: { display: true, position: 'right' },
            datalabels: {
                formatter: (value, context) => {
                    const percentage = (value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100;
                    return `${percentage.toFixed(2)}%`;
                },
            },
        },
    };

    return (
        <Container>
            <Row className="mb-3">
                <Col><h4>Gestión de Clientes</h4></Col>
            </Row>
            <Row className="mb-3">
                <Col md={8}>
                    <Button className='btn-accion' variant="success">
                        <img src={IconAdd} alt="Agregar Usuario" /> Agregar Usuario
                    </Button>
                    <UsersTable users={users} getMembershipStatus={getMembershipStatus} />
                </Col>
                <Col md={4}>
                    <Chart type="bar" data={dataEstudiantes} plugins={[ChartDataLabels]} options={{ indexAxis: 'y' }} />
                    <Doughnut data={chartData} plugins={[ChartDataLabels]} options={optionsDoughnut} className='chart' />
                </Col>
            </Row>
        </Container>
    );
};

export default ClientesManageView;

import React from 'react';
import { Table } from 'react-bootstrap';

const Appoinment = () => {
    return (
        <div>
            <h1 className="text-warning mt-5">Appoinment List</h1>
            <br />
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Problem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Appoinment;
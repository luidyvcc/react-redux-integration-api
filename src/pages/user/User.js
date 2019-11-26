import React, { Component } from 'react';
import UserForm from './UserForm';

export default class User extends Component {
    render() {
        let list = [
            { name: "Natanael", email: "natanael@gmail.com" },
            { name: "João", email: "joao@gmail.com" },
        ]
        return (
            <>
                <UserForm></UserForm>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

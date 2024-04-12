import React, { useState } from 'react'
import {Form, Button, Input, Select, DatePicker, Table, Space} from 'antd'


const dateFormat = 'DD/MM/YYYY';

const AddUser = () => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Nome',
            dataIndex: 'nome',
            key:'nome'
        },
        {
            title: "CPF",
            dataIndex: 'cpf',
            key:'cpf'
        },
        {
            title: "RG",
            dataIndex: 'rg',
            key:'rg'
        },
        {
            title: "Data de Nascimento",
            dataIndex: 'data_nasc',
            key:'data_nasc'
        },
        {
            title: "Sexo",
            dataIndex: 'sexo',
            key:'sexo'
        },
        {
            title: 'Ações',
            key: 'ações',
            render : (_, record) => (
                <Space size="middle">
                    <Button type='primary'>
                        <Link to ='/update/:id'>Editar Usuário</Link >
                    </Button>
                    <Button type='primary' danger>Deletar Usuário</Button>
                </Space>
            ),
        },
    ]

    const [userData, setUserData] = useState({
        nome: '',
        cpf: '',
        rg: '',
        data_nasc: '',
        sexo: ''
    })

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setUserData(prevState => {
            return {
                ...prevState, [name]: value
            }
        })
        console.log(userData)
    }  
    const onChangeDate = (date, dateString) => {}

    const onChangeGender = (value) => {}

    const handleSubmitForm = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={handleSubmitForm}
            autoComplete='off'
        >
            <Form.Item
                label="Nome"
                name="nome"
                rules={[
                    {
                        required: true,
                        message: 'Insira seu nome'
                    },
                    {
                        pattern: /^[a-zA-ZÀ-ÿ\s]*$/,
                        message: "Nome deve conter apenas letras e espaços"
                    },
                    {
                    max: 50,
                    message: "O nome deve ter no máximo 50 caracteres"
                    }
                ]}>
                    <Input
                        onChange={handleFormChange}
                        value={userData.nome}
                    />
            </Form.Item>
            <Form.Item
                label="CPF"
                name="cpf"
                key='cpf'
                rules={[
                    {
                        required: true,
                        message: 'Insira seu CPF'
                    },
                    {
                            pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                            message: 'Formato inválido de CPF. Use XXX.XXX.XXX-XX'
                    },
                    {
                            max: 14,
                            message: 'O CPF deve ter no máximo 11 numeros'
                    }
                ]}>
                    <Input
                        onChange={handleFormChange}
                        value={userData.cpf}
                    />
            </Form.Item>
            <Form.Item
                label="RG"
                name="rg"
                rules={[
                    {
                        required: true,
                        message: 'Insira seu RG'
                    },
                    {
                        pattern: /^\d{2}\.\d{3}\.\d{3}\-\d{1}$/,
                        message: 'Formato inválido de RG. Use XX.XXX.XXX-X'
                    },
                    {
                        max: 12,
                        message: 'O RG deve to máximo 9 numeros'
                    }
                ]}>
                <Input
                    onChange={handleFormChange}
                    value={userData.rg}
                />
            </Form.Item>
        
            <Form.Item
                label="Data de Nascimento"
                name="data_nasc"
                rules={[{ required: true, message: 'Please input!' }]}
            >
                <DatePicker
                    value={userData.data_nasc}
                    format={dateFormat}
                    onChange={onChangeDate}
            />
            </Form.Item>
            <Form.Item
                label="Sexo"
                name="sexo"
                rules={[{ required: true, message: 'Please input!' }]}>
                <Select
                    defaultValue="Sexo"
                    style={{width: 120}}
                    onChange={onChangeGender}
                    options={[
                        { value: 'Masculino', label: 'Masculino'},
                        { value: 'Feminino', label: 'Feminino'},
                        { value: 'Outros', label: 'Outros'}
                    ]}
                    value={userData.sexo}
        
                />
        
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form.Item>
        </Form>
        <Table dataSource={''} columns={columns}/>
    </>
  )
}

export default AddUser
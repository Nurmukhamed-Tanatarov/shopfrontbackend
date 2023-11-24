import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Row, Col} from "react-bootstrap";
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', deccription: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const {device} = useContext(Context)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className='mt-2 bt-2'>
                    <Dropdown.Toggle>
                        Выбери брэнд
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(brand => 
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-2 bt-2'>
                    <Dropdown.Toggle>
                        Выбери тип
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder="Введите название устройства"
                />
                <Form.Control
                    className='mt-3'
                    placeholder="Введите стоимость устройства"
                    type="number"
                />
                <Form.Control
                    className='mt-3'
                    type="file"
                />
                <hr />
                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                >
                    Добавить новое свойтсво
                </Button>
                {info.map(i=>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder='Введите название свойтсва'/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание свойтсва'/>
                            </Col>
                            <Col md={4}>
                                <Button 
                                variant='outline-danger'
                                onClick={()=>removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>    
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
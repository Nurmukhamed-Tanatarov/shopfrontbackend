import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() =>{
    const {device} = useContext(Context)
    return (
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={device.SelectedBrand && brand.id === device.SelectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );  
})

export default BrandBar;
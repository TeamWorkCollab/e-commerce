import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/products for post request', async () => {
    const response = await request(app)
        .post('/api/products')
        .send({})
    
    expect(response.status).not.toEqual(404);
});

it('can only access if the user signed in', async () => {

});

it('return an error if an invalid title is provided', async () => {

});

it('return an error if an invalid price is provided', async () => {

});

it('create a producs with a valid input', async () => {

});
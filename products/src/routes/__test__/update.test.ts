import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const sessionCookie = () => {
    // Build a JWT payload. { id, email }
    const payload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };

    // Create the JWT
    const token = jwt.sign(payload, process.env.JWT_KEY!);

    // Build session Object. { jwt: MY_JWT }
    const session = { jwt: token };

    // Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // Return a string thats the cookie with the enconded data
    return [`express:sess=${base64}`];
}

it('return a 404 if the provided id does not exist', async () => {
    // create new mongoDB id
    const id = new mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', sessionCookie())
        .send({
            name: 'fsdfsd',
            price: 20
        })
        .expect(404);
});

it('return a 401 if the user is not authenticated', async () => {
  // create new mongoDB id
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
      .put(`/api/tickets/${id}`)
      .send({
          name: 'fsdfsd',
          price: 20
      })
      .expect(401);
});

it('return a 401 if the provided id does not exist', async () => {

});

it('return 404 if the user is not admin', async () => {

});

it('return 400 if the user provide an invalid product name or price', async () => {

});

it('updates the product provided valid input', async () => {

});


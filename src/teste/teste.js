import request from 'supertest';
import app from '../index.js';

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the dogs path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/dogs');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the cats path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/cats');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the fishes path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/fishes');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the search path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/search');
        expect(response.statusCode).toBe(200);
    });
});

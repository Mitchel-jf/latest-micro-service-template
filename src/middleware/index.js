require('dotenv').config();
import { Router } from 'express';
import ValidateTestData from './validation/route/test_data';
export default () => {
    let routes = Router();
    routes.get('/test/data', ValidateTestData);
    return routes;
}
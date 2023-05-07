import { Router } from 'express';

import { verifyAccessToken } from '../services/auth';

import * as createMealCtrl from '../controllers/meal/createMeal';


const routes = new Router();

routes.post('', verifyAccessToken, createMealCtrl.createMeal);


export default routes;

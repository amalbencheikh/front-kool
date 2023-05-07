import { Router } from 'express';

import { verifyAccessToken } from '../services/auth';

import * as createRestaurantCtrl from '../controllers/restaurant/createRestaurant';


const routes = new Router();

routes.post('', verifyAccessToken, createRestaurantCtrl.createRestaurant);


export default routes;

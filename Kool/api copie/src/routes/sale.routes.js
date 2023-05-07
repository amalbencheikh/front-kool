import { Router } from 'express';

import { verifyAccessToken } from '../services/auth';

import * as createSaleCtrl from '../controllers/sales/createSale';


const routes = new Router();

routes.post('', verifyAccessToken, createSaleCtrl.createSale);


export default routes;

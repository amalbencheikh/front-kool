import { Router } from 'express';

import { verifyAccessToken } from '../services/auth';

import * as createMenuCtrl from '../controllers/menu/createMenu';


const routes = new Router();

routes.post('', verifyAccessToken, createMenuCtrl.createMenu);


export default routes;

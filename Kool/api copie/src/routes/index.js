import { Router } from 'express';
import HttpStatus from 'http-status-codes';

import RestaurantRoutes from './restaurant.routes';
import SaleRoutes from './sale.routes';
import MealRoutes from './meal.routes';
import MenuRoutes from './menu.routes';
import UserRoutes from './user.routes';

const routes = new Router();

// routes.use('/countries', CountryRoutes);
routes.use('/restaurants', RestaurantRoutes);
routes.use('/sales', SaleRoutes);
routes.use('/meals', MealRoutes);
routes.use('/menus', MenuRoutes);
routes.use('/users', UserRoutes);

routes.all('*', (req, res) => res.status(HttpStatus.NOT_FOUND).json({ message: 'endpoint_not_found' }));

export default routes;

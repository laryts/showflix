import { Router } from 'express';

import MovieController from './controllers/MovieController';
import LikeController from './controllers/LikeController';
import RateController from './controllers/RateController';

const routes = new Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);
routes.post('/movies/:id/like', LikeController.store);
routes.post('/movies/:id/rating', RateController.store);
routes.delete('/movies/:id', MovieController.delete);

export default routes;

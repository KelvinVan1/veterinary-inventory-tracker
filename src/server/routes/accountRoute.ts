import {Router} from 'express';
import accountController from '../controllers/accountController';

const accountRouter = Router();

accountRouter.post('/login', accountController.login, (req, res) => {
  return res.sendStatus(res.locals.loginStatus);
});

export default accountRouter;

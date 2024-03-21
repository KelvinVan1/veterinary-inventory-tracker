import { accountResponse } from '../../types/types';

const accountController: accountResponse = {
  login(req, res, next){
    const {username, password} = req.body;

    if(username !== 'kvan4' || password !== 'ilovetesting')
      res.locals.loginStatus = 401;
    else
      res.locals.loginStatus = 200;
      
    return next();
  }
};

export default accountController;
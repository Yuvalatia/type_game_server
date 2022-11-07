import {
  Router,
  Request,
  Response,
} from 'express';

const router: Router = Router();

router.get('/dd', (req: Request, res: Response) => {
  res.send('Users');
});

export default router;

import express, {
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from 'express';
import path from 'path';
import { serve, generateHTML } from 'swagger-ui-express';

import { RegisterRoutes } from '@/config/router/routes';

const app = express();
app.use(urlencoded({ extended: true }));

export async function server() {
  RegisterRoutes(app);

  app.use('/docs', serve, async (_req: ExRequest, res: ExResponse) => {
    const swaggerDocument = path.resolve(process.cwd(), 'docs', 'swagger.json');
    return res.send(generateHTML(await import(swaggerDocument)));
  });

  return app;
}

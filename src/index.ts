import { server } from '@/server';

server().then((app) => {
  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
});

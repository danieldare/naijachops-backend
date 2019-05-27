import authRoutes from './authRoutes';

const routes = app => {
  app.use('/api/user', authRoutes);
  app.use('*', (req, res) => {
    res.send('The requested endpoint was not found on the server');
  });
};

export default routes;

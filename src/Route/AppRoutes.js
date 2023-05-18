import { Route, Routes } from 'react-router-dom';

const AppRoutes = ({ appRoutes }) => {
  return (
    <Routes>
      {appRoutes.map((routesProps, key) => (
        <Route key={key} {...routesProps} />
      ))}
    </Routes>
  );
};

export default AppRoutes;

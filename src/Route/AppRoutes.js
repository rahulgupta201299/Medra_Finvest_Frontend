import { Route, Routes } from 'react-router-dom';
import Footer from '../component/Footer/Footer.Layout';

const AppRoutes = ({ appRoutes }) => {
  return (
    <>
    <Routes>
      {appRoutes.map((routesProps, key) => (
        <Route key={key} {...routesProps} />
      ))}
    </Routes>
    <Footer />
    </>
  );
};

export default AppRoutes;

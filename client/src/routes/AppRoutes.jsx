import { Route, Routes } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout/RootLayout';
import Homepage from './homepage/Homepage';
import Main_content from '../layouts/rootLayout/Main_content';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={
          <>
            <Homepage />
            <Main_content />
          </>
        } />
        {/* Other routes */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

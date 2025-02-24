import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Load from '../utils/load/Load';
import { ROUTES } from './Routes';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Services = lazy(() => import('../pages/services/Services'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const PF = lazy(() => import('../pages/pf/PF'));
const PJ = lazy(() => import('../pages/pj/PJ'));
const BlogPost = lazy(() => import('../pages/blog/BlogPost'));
const GetStartedPage = lazy(() => import('../pages/GetStartedPage'));
const WalletPage = lazy(() => import('../pages/Wallet/WalletSelector'));
const BuyBitcoinPage = lazy(() => import('../pages/BuyBitcoinPage'));

function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Layout>
      <Suspense fallback={<Load />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={ROUTES.home.call(currentLang)} replace />}
          />
          <Route path="/:lang" element={<Home />} />
          <Route
            path="/:lang/*"
            element={
              <Routes>
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="pf" element={<PF />} />
                <Route path="pj" element={<PJ />} />
                <Route path="blog/:id" element={<BlogPost />} />
                <Route path="get-started" element={<GetStartedPage />} />
                <Route path="wallet" element={<WalletPage />} />
                <Route path="buy" element={<BuyBitcoinPage />} />
                <Route
                  path="*"
                  element={
                    <Navigate to={ROUTES.home.call(currentLang)} replace />
                  }
                />
              </Routes>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

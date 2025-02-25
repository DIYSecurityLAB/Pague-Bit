import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { Loader } from '../components/Loader';
import Layout from '../pages/layout/Layout';
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

export function BrowserRouter() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
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
                  <Route path={ROUTES.about.path} element={<About />} />
                  <Route path={ROUTES.services.path} element={<Services />} />
                  <Route path={ROUTES.contact.path} element={<Contact />} />
                  <Route path={ROUTES.pf.path} element={<PF />} />
                  <Route path={ROUTES.pj.path} element={<PJ />} />
                  <Route path={ROUTES.blog.path} element={<BlogPost />} />
                  <Route
                    path={ROUTES.getStarted.path}
                    element={<GetStartedPage />}
                  />
                  <Route path={ROUTES.wallet.path} element={<WalletPage />} />
                  <Route path={ROUTES.buy.path} element={<BuyBitcoinPage />} />
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
    </Router>
  );
}

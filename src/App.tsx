/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Portfolio from './pages/Portfolio';
import Inquiry from './pages/Inquiry';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="studio" element={<Studio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="inquiry" element={<Inquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

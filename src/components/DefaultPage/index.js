import Banner from 'components/Banner';
import React from 'react';
import { Outlet } from 'react-router';

export default function DefaultPage() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}

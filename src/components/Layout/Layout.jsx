import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  console.log(isDesktop);
  return (
    <>
      <Header
        onClick={() => {
          setIsOpen(true);
        }}
        isDesktop={isDesktop}
      />
      <Outlet />
      {isDesktop ? (
        <Sidebar />
      ) : (
        isOpen && <Sidebar close={() => setIsOpen(false)} />
      )}
    </>
  );
}

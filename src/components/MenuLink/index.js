import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuLink({ children }) {
  return <NavLink>{children}</NavLink>;
}

// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '@/components/ui/Logo.jsx';
import { useAuth } from '@/context/AuthProvider.jsx';

const LogoPill = ({ className = '' }) => (
  <Link
    to="/"
    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition ${classNam

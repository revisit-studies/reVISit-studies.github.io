/**
 * Swizzled version of @docusaurus/theme-classic Navbar/MobileSidebar
 *
 * Change: also render the sidebar when `shown=true`, even above the default
 * 996px mobile breakpoint. This fixes the "gray screen only" bug when the
 * hamburger toggle is shown via CSS at intermediate widths (996–1250px).
 */
import React from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);
  // Render when Docusaurus considers it mobile OR when the user has explicitly
  // opened the sidebar (e.g. via a hamburger shown at custom wider breakpoints).
  if (!mobileSidebar.shouldRender && !mobileSidebar.shown) {
    return null;
  }
  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}

import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));

const OurProduct = lazy(() => import("../pages/OurProduct"));

const Solutions = lazy(() => import("../pages/Solutions"));

const Partners = lazy(() => import("../pages/Partners/Partners"));

const OurClients = lazy(() => import("../pages/OurClients/OurClients"));

export const appRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/our-product",
    component: OurProduct,
  },
  {
    path: "/solutions",
    component: Solutions,
  },
  {
    path: "/partners",
    component: Partners,
  },
  {
    path: "/our-clients",
    component: OurClients,
  },
];

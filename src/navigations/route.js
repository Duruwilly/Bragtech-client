import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));

const OurProduct = lazy(() => import("../pages/OurProduct"));

const Solutions = lazy(() => import("../pages/Solutions"));

const Partners = lazy(() => import("../pages/Partners/Partners"));

const OurClients = lazy(() => import("../pages/OurClients/OurClients"));

const WhyBragtech = lazy(() => import("../pages/WhyBragtech"));

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
  {
    path: "/why-bragtech",
    component: WhyBragtech,
  },
];

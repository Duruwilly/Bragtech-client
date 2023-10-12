import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));

const OurProduct = lazy(() => import("../pages/Services"));

const Solutions = lazy(() => import("../pages/Solutions"));

const Partners = lazy(() => import("../pages/Partners/Partners"));

const OurClients = lazy(() => import("../pages/OurClients/OurClients"));

const WhyBragtech = lazy(() => import("../pages/WhyBragtech"));

const ContactSales = lazy(() => import("../pages/ContactSales"));

export const appRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/services",
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
  {
    path: "contact-sales",
    component: ContactSales,
  },
];

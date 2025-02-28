import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app-layout";
import { Home } from "./pages/app/home/home";
import { Conflicts } from "./pages/app/conflits/conflits";
import { ForcedDisplacementsAgrovilas } from "./pages/app/forced-displacements-agrovilas/forced-displacements-agrovilas";
import { ForcedDisplacementsPermanent } from "./pages/app/forced-displacements-permanent/forced-displacements-permanent";
import { RepresentativeEntities } from "./pages/app/representative-entities/representative-entities";
import { Ancestry } from "./pages/app/ancestry/ancestry";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/conflitos", element: <Conflicts /> },
      { path: "/deslocamentos-compulsorios-agrovilas", element: <ForcedDisplacementsAgrovilas /> },
      { path: "/deslocamentos-compulsorios-permanente", element: <ForcedDisplacementsPermanent /> },
      { path: "/entidades-representativas", element: <RepresentativeEntities /> },
      { path: "/ancestralidade", element: <Ancestry /> }
    ]
  }
]);
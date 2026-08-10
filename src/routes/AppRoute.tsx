import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/home";
import SkillsPage from "../pages/skills";
import ProjectsPage from "../pages/projects";
import ContactPage from "../pages/contact";
import NotFoundPage from "../pages/not-found";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* catch page not found - 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  );
}

export default AppRoute;

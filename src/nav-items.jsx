import { Home, Calendar, Clock, BookOpen, Users } from "lucide-react";
import Index from "./pages/Index.jsx";
import Schedule from "./pages/Schedule.jsx";
import TimeClock from "./pages/TimeClock.jsx";
import Resources from "./pages/Resources.jsx";
import Forum from "./pages/Forum.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Schedule",
    to: "/schedule",
    icon: <Calendar className="h-4 w-4" />,
    page: <Schedule />,
  },
  {
    title: "Time Clock",
    to: "/time-clock",
    icon: <Clock className="h-4 w-4" />,
    page: <TimeClock />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Forum",
    to: "/forum",
    icon: <Users className="h-4 w-4" />,
    page: <Forum />,
  },
];

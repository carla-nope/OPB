import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MissionPlanner from "./pages/MissionPlanner";
import StarterKit from "./pages/StarterKit";
import Course from "./pages/Course";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mission-planner" component={MissionPlanner} />
      <Route path="/starter-kit" component={StarterKit} />
      <Route path="/course" component={Course} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy" component={Legal} />
      <Route path="/terms" component={Legal} />
      <Route path="/disclaimer" component={Legal} />
      <Route path="/affiliate" component={Legal} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Testimonials from "@/pages/Testimonials";
import OurStory from "@/pages/OurStory";
import JoinAsBreaker from "@/pages/JoinAsBreaker";
import BecomeInsider from "@/pages/BecomeInsider";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/join" component={JoinAsBreaker} />
      <Route path="/become-an-insider" component={BecomeInsider} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;

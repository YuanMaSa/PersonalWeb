import Appbar from "../components/Appbar.js";
import study_items from "../components/study_items.js";
import follow_me from "../components/follow_me.js";
import home from "../components/home.js";
import about_me from "../components/about_me.js";
import my_favs from "../components/my_favs.js";
import Projects from "../components/Projects.js";
import MySkills from "../components/MySkills.js";
import StudyTargets from "../components/StudyTargets.js";
import Internship from "../components/Internship.js";
import ApiCall from "../components/ApiCall.js";

var indexRoutes = [
  { path: "/appbar", name: "Appbar", component: Appbar },
  { path: "/about_me", name: "about_me", component: about_me },
  { path: "/study_items", name: "study_items", component: study_items },
  { path: "/Projects", name: "Projects", component: Projects },
  { path: "/my_favs", name: "my_favs", component: my_favs },
  { path: "/follow_me", name: "follow_me", component: follow_me },
  { path: "/MySkills", name: "MySkills", component: MySkills},
  { path: "/StudyTargets", name: "StudyTargets", component: StudyTargets},
  { path: "/Internship", name: "Internship", component: Internship},
  { path: "/ApiCall", name: "ApiCall", component: ApiCall},
  { path: "/", name: "home", component: home }
];

export default indexRoutes;

import About from "./about/About";
import WorkContainer from "./work/WorkContainer";
// import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

const SECTIONS = [
    {
        name: "关于",
        component: About
    },
    {
        name: "工作",
        component: WorkContainer
    },
    {
        name: "博客",
        component: null
    },
    {
        name: "联系",
        component: Contact
    }
];

export default SECTIONS;

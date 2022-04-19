import { gsap } from "gsap";

const mainTL = gsap.timeline();

gsap.from("#orange-element", {duration:3, y:20});

mainTL.from("#lieimg", {duration:5, x:30, opacity:0.5}, "img")
.from("#phoneimg", {duration:5, x:-30, opacity: 0.3}, "img")
.from("#blueming", {duration:5, y:50, opacity: 0.5}, "img")
.from(".dot", {duration: 1, transformOrigin: "left", skewX:0.5, scaleX:2, ease:"bounce.out"})

;
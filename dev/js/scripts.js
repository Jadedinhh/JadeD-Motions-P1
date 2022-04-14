import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#lieimg", {duration:5, x:30, opacity:0.5}, "img")
.from("#phoneimg", {duration:5, x:-30, opacity: 0.3}, "img")
.from("orange-element", {duration:5, y: 30}, "img")
.from("#blueming", {duration:5, y:50, opacity: 0.5}, "img")


;
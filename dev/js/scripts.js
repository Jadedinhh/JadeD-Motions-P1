import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL= gsap.timeline({});

function changeBlue(){

    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#1D4995"})
    .to("#petal1",{duration:0.5, y:"-80", x:"-20"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal1", {duration: 0.5, y:"0", x:"0"});


    return tl;

}

function changePink(){

    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#F7B0BE"})
    .to("#petal2",{duration:0.5, y:"-60", x:"80"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal2", {duration: 0.5, y:"0", x:"0"});


    return tl;

}

function changePink(){

    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#F7B0BE"})
    .to("#petal2",{duration:0.5, y:"-60", x:"80"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal2", {duration: 0.5, y:"0", x:"0"});


    return tl;

}





mainTL.add(changeBlue())
.add(changePink())
;

GSDevTools.create();
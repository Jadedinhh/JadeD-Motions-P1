import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL= gsap.timeline({repeatDelay:0.5, repeat:3});

function changeBlue(){

    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#1D4995"}, "start")
    .to("#petal1",{duration:0.5, y:"-80", x:"-20"})
    .to("#mouth", {duration:0.5, rotation:180, x:"100", y:"90"}, "start")
    .to("#petal1", {duration: 0.5, y:"0", x:"0"});


    return tl;

}

function changePink(){

    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#F7B0BE"}, "go")
    .to("#petal2",{duration:0.5, y:"-60", x:"80"})
    .to("#mouth", {duration:0.5, rotation:360, x:"0", y:"0"}, "go")
    .to("#petal2", {duration: 0.5, y:"0", x:"0"});


    return tl;

}


function changeOcean(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#1F79AF"}, "run")
    .to("#petal3",{duration:0.5, y:"60", x:"80"})
    .to("#mouth", {duration:0.5, rotation:180, x:"100", y:"90"}, "run")
    .to("#petal3", {duration: 0.5, y:"0", x:"0"});


    return tl;
}

function changeOrange(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#F15B43"}, "let")
    .to("#petal4",{duration:0.5, y:"80", x:"-60"})
    .to("#mouth", {duration:0.5, rotation:360, x:"0", y:"0"}, "let")
    .to("#petal4", {duration: 0.5, y:"0", x:"0"});


    return tl;
}

function changeMint(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#D0E7CE"}, "move")
    .to("#petal5",{duration:0.5, y:"60", x:"-80"})
    .to("#mouth", {duration:0.5, rotation:180, x:"100", y:"90"}, "move")
    .to("#petal5", {duration: 0.5, y:"0", x:"0"})
    .to("#flower", {duration:0.5, fill:"#F15B43"}, "restart")
    .to("#mouth", {duration:0.5, rotation:360, x:"0", y:"0"}, "restart");
    


    return tl;
}





mainTL.add(changeBlue())
.add(changePink())
.add(changeOcean())
.add(changeOrange())
.add(changeMint())

;

GSDevTools.create();
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL= gsap.timeline({repeatDelay:0.2, repeat:3});

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
    .to("#mouth", {duration:0.5})
    .to("#petal2", {duration: 0.5, y:"0", x:"0"});


    return tl;

}


function changeOcean(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#1F79AF"})
    .to("#petal3",{duration:0.5, y:"60", x:"80"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal3", {duration: 0.5, y:"0", x:"0"});


    return tl;
}

function changeOrange(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#F15B43"})
    .to("#petal4",{duration:0.5, y:"80", x:"-60"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal4", {duration: 0.5, y:"0", x:"0"});


    return tl;
}

function changeMint(){
    let tl = gsap.timeline();
    tl.to("#flower", {duration:0.5, fill:"#D0E7CE"})
    .to("#petal5",{duration:0.5, y:"60", x:"-80"})
    .to("#mouth", {duration:0.5, rotation:360})
    .to("#petal5", {duration: 0.5, y:"0", x:"0"})
    .to("#flower", {duration:0.5, fill:"#F15B43"});
    


    return tl;
}





mainTL.add(changeBlue())
.add(changePink())
.add(changeOcean())
.add(changeOrange())
.add(changeMint())

;

GSDevTools.create();
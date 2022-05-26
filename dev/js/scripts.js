import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const mainTL= gsap.timeline({repeat:-1});

function changeBlue(){

    let tl = gsap.timeline({});
    tl
    .to("#petal2", {duration:0.1, fill:"#F15B43"})
    .to("#petal1",{duration:0.5,y:"-80", x:"-20",fill:"#1D4995"})
    .to(".pe", {duration:0.7, fill:"#1D4995"}, "start")
    .to("#mouth", {duration:0.3, morphSVG:"#mouth2"}, "start")
    .to("#lefteye", {duration:0.3, morphSVG:"#left2"}, "start")
    .to("#righteye", {duration:0.3, morphSVG:"#right2"}, "start")
    .to("#petal1", {duration: 0.5, y:"0", x:"0", ease:"power1.out"}, "-=0.2")
    ;


    return tl;

}

function changePink(){

    let tl = gsap.timeline();
    tl
    .to("#petal2",{duration:0.5, y:"-60", x:"80",fill:"#F7B0BE"})
    .to(".pe", {duration:0.7, fill:"#F7B0BE"}, "go")
    .to("#petal1", {duration:0.5, fill:"#F7B0BE"}, "go")
    .to("#mouth", {duration:0.3, morphSVG:"#mouth3"}, "go")
    .to("#lefteye", {duration:0.3, morphSVG:"#left3"}, "go")
    .to("#righteye", {duration:0.3, morphSVG:"#right3"}, "go")
    .to("#petal2", {duration: 0.5, y:"0", x:"0",ease:"power1.out"}, "-=0.2");


    return tl;

}


function changeOcean(){
    let tl = gsap.timeline();
    tl
    .to("#petal3",{duration:0.5, y:"60", x:"80", fill:"#1F79AF"})
    .to(".pe", {duration:0.7, fill:"#1F79AF"}, "run")
    .to("#mouth", {duration:0.3, morphSVG:"#mouth4"}, "run")
    .to("#lefteye", {duration:0.3, morphSVG:"#left4"}, "run")
    .to("#righteye", {duration:0.3, morphSVG:"#right4"}, "run")
    .to("#petal3", {duration: 0.5, y:"0", x:"0", ease:"power1.out"}, "-=0.2");


    return tl;
}

function changeOrange(){
    let tl = gsap.timeline();
    tl
    .to("#petal4",{duration:0.5, y:"80", x:"-60",fill:"#F15B43"})
    .to(".pe", {duration:0.7, fill:"#F15B43"}, "let")
    .to("#mouth", {duration:0.3, morphSVG:"#mouth5"}, "let")
    .to("#lefteye", {duration:0.3, morphSVG:"#left5"}, "let")
    .to("#righteye", {duration:0.3, morphSVG:"#right5"}, "let")
    .to("#petal4", {duration: 0.5, y:"0", x:"0", ease:"power1.out"},  "-=0.2");


    return tl;
}

function changeMint(){
    let tl = gsap.timeline();
    tl
    .to("#petal5",{duration:0.5, y:"60", x:"-80", fill:"#D0E7CE"})
    .to(".pe", {duration:0.7, fill:"#D0E7CE"}, "move")
    .to("#mouth", {duration:0.3, morphSVG:"#mouth6"}, "move")
    .to("#lefteye", {duration:0.3, morphSVG:"#left6"}, "move")
    .to("#righteye", {duration:0.3, morphSVG:"#right6"}, "move")
    .to("#petal5", {duration: 0.5, y:"0", x:"0", ease:"power1.out"},  "-=0.2")
    .to(".pe", {duration:0.7, fill:"#F15B43"}, "restart")
.to("#mouth", {duration:0.3, morphSVG:"#mouth7"}, "restart")
.to("#lefteye", {duration:0.3, morphSVG:"#left7"}, "restart")
.to("#righteye", {duration:0.3, morphSVG:"#right7"}, "restart");
    


    return tl;
}


mainTL.add(changeBlue())
.add(changePink())
.add(changeOcean())
.add(changeOrange())
.add(changeMint())


;

// GSDevTools.create();
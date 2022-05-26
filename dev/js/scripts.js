import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

const mainTL= gsap.timeline({repeat:-1});

function changeBlue(){

    let tl = gsap.timeline({delay:0.5});
    tl
    .to("#petal1",{duration:0.5,y:"-80", x:"-20",fill:"#1D4995"})
    .to("#flower", {duration:0.5, fill:"#1D4995"}, "start")
    .to("#mouth", {duration:0.5, morphSVG:"#mouth2"}, "start")
    .to("#lefteye", {duration:0.5, morphSVG:"#left2"}, "start")
    .to("#righteye", {duration:0.5, morphSVG:"#right2"}, "start")
    .to("#petal1", {duration: 0.5, y:"0", x:"0", ease:"power1.out"})
    ;


    return tl;

}

function changePink(){

    let tl = gsap.timeline();
    tl
    .to("#petal2",{duration:0.5, y:"-60", x:"80",fill:"#F7B0BE"})
    .to("#flower", {duration:0.5, fill:"#F7B0BE"}, "go")
    .to("#petal1", {duration:0.5, fill:"#F7B0BE"}, "go")
    .to("#mouth", {duration:0.5, morphSVG:"#mouth3"}, "go")
    .to("#left", {duration:0.5, morphSVG:"#left3"}, "go")
    .to("#right", {duration:0.5, morphSVG:"#right3"}, "go")
    .to("#petal2", {duration: 0.5, y:"0", x:"0",ease:"power1.out"});


    return tl;

}


function changeOcean(){
    let tl = gsap.timeline();
    tl
    .to("#petal3",{duration:0.5, y:"60", x:"80", fill:"#1F79AF"})
    .to("#flower", {duration:0.5, fill:"#1F79AF"}, "run")
    .to("#mouth", {duration:0.5, morphSVG:"#mouth4"}, "run")
    .to("#left", {duration:0.5, morphSVG:"#left4"}, "run")
    .to("#right", {duration:0.5, morphSVG:"#right4"}, "run")
    .to("#petal3", {duration: 0.5, y:"0", x:"0", ease:"power1.out"});


    return tl;
}

function changeOrange(){
    let tl = gsap.timeline();
    tl
    .to("#petal4",{duration:0.5, y:"80", x:"-60",fill:"#F15B43"})
    .to("#.pe", {duration:0.5, fill:"#F15B43"}, "let")
    .to("#mouth", {duration:0.5, morphSVG:"#mouth5"}, "let")
    .to("#left", {duration:0.5, morphSVG:"#left5"}, "let")
    .to("#right", {duration:0.5, morphSVG:"#right5"}, "let")
    .to("#petal4", {duration: 0.5, y:"0", x:"0", ease:"power1.out"});


    return tl;
}

function changeMint(){
    let tl = gsap.timeline();
    tl
    .to("#petal5",{duration:0.5, y:"60", x:"-80", fill:"#D0E7CE"})
    .to("#flower", {duration:0.5, fill:"#D0E7CE"}, "move")
    .to("#mouth", {duration:0.5, morphSVG:"#mouth6"}, "move")
    .to("#left", {duration:0.5, morphSVG:"#left6"}, "move")
    .to("#right", {duration:0.5, morphSVG:"#right6"}, "move")
    .to("#petal5", {duration: 0.5, y:"0", x:"0", ease:"power1.out"});
    


    return tl;
}


function reStartFlower(){
let tl = gsap.timeline();

tl.to("#flower", {duration:0.5, fill:"#F15B43"}, "restart")
.to("#mouth", {duration:0.5, morphSVG:"#mouth7"}, "move")
.to("#left", {duration:0.5, morphSVG:"#left7"}, "move")
.to("#right", {duration:0.5, morphSVG:"#right7"}, "move");
}


mainTL.add(changeBlue())
.add(changePink())
.add(changeOcean())
.add(changeOrange())
.add(changeMint())
.add(reStartFlower())

;

GSDevTools.create();
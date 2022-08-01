// летающие шары
gsap.fromTo(".word1", {x:240, y:200, delay:.5},{rotation:950, x:-80, y:-40, scale:1.5, duration:15, delay:0.3,  opacity:.5, yoyo:true, repeat:-1})

gsap.fromTo(".word2", {x:-180, y:200, opacity:0.7},{rotation:650, x:160, y:50, duration:12, opacity:1, yoyo:true, repeat:-1})

gsap.fromTo(".word3", {x:-40, y:500, opacity:0.7}, {x:100, y:-60, duration: 17, scale:2,  rotation:720, yoyo:true, repeat:-1 })

gsap.from(".word4", {x:-150, y:400, duration:6, opacity:0.8, rotation:300, scale:1.3, yoyo:true, repeat:-1 })

gsap.fromTo(".word5", {x:105, y:-220, scale:0.4}, {x:-150, y:300, scale:1,  duration:8, rotation:870, opacity:1, yoyo:true, repeat:-1 })


gsap.from(".word6", {x:200, y:120, duration:6,  rotation:700, yoyo:true, repeat:-1 })
gsap.fromTo(".word7", {x:-300, y:100, opacity:0.7},
                    {rotation:450, x:220, y:250, duration:7, opacity:1, yoyo:true, repeat:-1})

gsap.fromTo(".word8", {x:-340, y:220}, {x:50, y:-120, duration:9,  rotation:300, opacity:0.8, yoyo:true, repeat:-1 })

gsap.to(".word9", {x:150, y:-280, duration:10,  rotation:370, scale:0.6, yoyo:true, repeat:-1 })


gsap.from(".word10", {x:-300, y:-520, duration:11, opacity:0.8, rotation:1300, yoyo:true, repeat:-1 })

// вылет ПРИВЕТ
gsap.fromTo ('.hello', 
{x:120, y:150, scale:2,  opacity:0},
{y: 0, duration:2, scale:4, stagger:0.2,
     opacity:1, rotation:366})

gsap.to ('.myName', {
    text: "Меня зовут Галина ",
    duration: 2,
    ease: 'power1.in',
    delay:1.5
})

gsap.to ('.developer', {
    text: "и я создаю сайты ",
    duration: 2.5,
    delay:2,
    ease: 'power1.in'
})

// кнопка позвони
gsap.fromTo(".btn1", {opacity:0}, {opacity:1, duration:4, delay:3})

// удаление Привета и фото
gsap.to ('.hello', {y: -800, duration:5, scale:1, delay:10, stagger:0.8,
    opacity:0, rotation:360})

gsap.to ('.my-photo', {rotation:780, duration:1.5, delay:6, scale:0.2, opacity:0})

gsap.fromTo ('.my-photo1', {opacity:0, scale:0.2,},
         {x:50, rotation:360, duration:4, delay:8, scale:1.2, opacity:1})

gsap.to ('.arrow', {scale:1.2, duration:0.2, yoyo:true, repeat:-1})



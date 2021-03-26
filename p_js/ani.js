let controller = new ScrollMagic.Controller();

let what = new ScrollMagic.Scene({
    triggerElement: "#what_bg",
    triggerHook: 0.5,
    offset: 50
})
    .setClassToggle(".what_text", "visible")
    //.addIndicators()
    .addTo(controller);


let feat = new ScrollMagic.Scene({
    triggerElement: "#fthr",
    triggerHook: 0.5,
    offset: 50
})
    .setClassToggle(".feature", "visible")
    //.addIndicators()
    .addTo(controller);

let first = new ScrollMagic.Scene({
    triggerElement: "#fthr",
    triggerHook: 0.5,
    offset: 50
})
    .setClassToggle(".first_try", "visible")
    //.addIndicators()
    .addTo(controller);


let nc = new ScrollMagic.Scene({
    triggerElement: "#fthr",
    triggerHook: 0.5,
    offset: 150
})
    .setClassToggle("#nc", "visible")
    //.addIndicators()
    .addTo(controller);

let ffhr = new ScrollMagic.Scene({
    triggerElement: "#fthr",
    triggerHook: 0.5,
    offset: 150
})
    .setClassToggle("#ffhr", "visible")
    //.addIndicators()
    .addTo(controller);


let hor_line_1 = new ScrollMagic.Scene({
    triggerElement: "#theme",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#hor_line_1", "visible")
    //.addIndicators()
    .addTo(controller);

let hor_line_2 = new ScrollMagic.Scene({
    triggerElement: "#theme",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#hor_line_2", "visible")
    //.addIndicators()
    .addTo(controller);

let tt = new ScrollMagic.Scene({
    triggerElement: "#theme",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle(".this_theme", "visible")
    //.addIndicators()
    .addTo(controller);

let sdgs = new ScrollMagic.Scene({
    triggerElement: "#theme",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle(".sdgs", "visible")
    //.addIndicators()
    .addTo(controller);

let earth = new ScrollMagic.Scene({
    triggerElement: "#theme",
    triggerHook: 0.5,
    offset: 300
})
    .setClassToggle("#earth_q", "visible")
    //.addIndicators()
    .addTo(controller);

// method
let method_title = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 100
})
    .setClassToggle("#method_title", "visible")
    //.addIndicators()
    .addTo(controller);

let only_web = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 100
})
    .setClassToggle(".only_web", "visible")
    //.addIndicators()
    .addTo(controller);

let web = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#web", "visible")
    //.addIndicators()
    .addTo(controller);

let basic_logo = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#basic_logo", "visible")
    //.addIndicators()
    .addTo(controller);

let adv_logo = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#adv_logo", "visible")
    //.addIndicators()
    .addTo(controller);

let method_detail = new ScrollMagic.Scene({
    triggerElement: "#method",
    triggerHook: 0.5,
    offset: 1000
})
    .setClassToggle(".method_detail", "visible")
    //.addIndicators()
    .addTo(controller);

// special
let spe_price_list = new ScrollMagic.Scene({
    triggerElement: "#special",
    triggerHook: 0.5,
    offset: 100
})
    .setClassToggle("#spe_price_list", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_title = new ScrollMagic.Scene({
    triggerElement: "#special",
    triggerHook: 0.5,
    offset: 100
})
    .setClassToggle("#spe_title", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_title_tr = new ScrollMagic.Scene({
    triggerElement: "#special",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#spe_title_tr", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_1 = new ScrollMagic.Scene({
    triggerElement: "#spe_1",
    triggerHook: 0.5,
    offset: 0
})
    .setClassToggle("#spe_1", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_2 = new ScrollMagic.Scene({
    triggerElement: "#spe_2",
    triggerHook: 0.5,
    offset: 0
})
    .setClassToggle("#spe_2", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_3 = new ScrollMagic.Scene({
    triggerElement: "#spe_3",
    triggerHook: 0.5,
    offset: 0
})
    .setClassToggle("#spe_3", "visible")
    //.addIndicators()
    .addTo(controller);

let spe_first = new ScrollMagic.Scene({
    triggerElement: "#spe_first",
    triggerHook: 0.5
})
    .setClassToggle("#spe_first", "visible")
    //.addIndicators()
    .addTo(controller);

// people
let ce_title_tr = new ScrollMagic.Scene({
    triggerElement: "#people",
    triggerHook: 0.5,
    offset: 50
})
    .setClassToggle("#ce_title_tr", "visible")
    //.addIndicators()
    .addTo(controller);

let ce_name = new ScrollMagic.Scene({
    triggerElement: "#ce_name",
    triggerHook: 0.5,
    offset: -50
})
    .setClassToggle("#ce_name", "visible")
    //.addIndicators()
    .addTo(controller);

let tf_pic = new ScrollMagic.Scene({
    triggerElement: "#ce_name",
    triggerHook: 0.5,
    offset: -50
})
    .setClassToggle("#tf_pic", "visible")
    //.addIndicators()
    .addTo(controller);

// price
let price_adv = new ScrollMagic.Scene({
    triggerElement: "#price",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#price_adv", "visible")
    //.addIndicators()
    .addTo(controller);

let price_basic = new ScrollMagic.Scene({
    triggerElement: "#price",
    triggerHook: 0.5,
    offset: 200
})
    .setClassToggle("#price_basic", "visible")
    //.addIndicators()
    .addTo(controller);

//rule
let rule_title = new ScrollMagic.Scene({
    triggerElement: "#rule",
    triggerHook: 0.5
})
    .setClassToggle("#rule_title", "visible")
    //.addIndicators()
    .addTo(controller);

let rule_par = new ScrollMagic.Scene({
    triggerElement: "#rule_par",
    triggerHook: 0.5
})
    .setClassToggle("#rule_par", "visible")
    //.addIndicators()
    .addTo(controller);

let rule_judge = new ScrollMagic.Scene({
    triggerElement: "#rule_judge",
    triggerHook: 0.5
})
    .setClassToggle("#rule_judge", "visible")
    //.addIndicators()
    .addTo(controller);
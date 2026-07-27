$(document).ready(function(){
        $(window).scroll(function(){
            let scroll = $(this).scrollTop();
            let opacity = 1- (scroll/400);
            let opacity1 = 1- (scroll/800);
            let opacity2 = 1- (scroll/1200);
            let posy = (window.innerHeight)*0.7
            posy = posy-(scroll/3);
            $('#atom-ta').css('top',(window.innerHeight)*0.7-(scroll/3));
            $('#atom-ca').css('top',(window.innerHeight)*0.6-(scroll/2));
            $('#atom-li').css('top',(window.innerHeight)*0.06-(scroll/1));
            opacity = Math.max(0, Math.min(1, opacity));
            opacity1 = Math.max(0, Math.min(1, opacity1));
            opacity2 = Math.max(0, Math.min(1, opacity2));
            $('.landing_cat').css('opacity',opacity);
            $('.phrase').css('opacity',opacity);
            $('.scroll-down').css('opacity',opacity);
            $('#atom-ca').css('opacity',opacity1);
            $('#atom-ta').css('opacity',opacity2);
            $('#atom-li').css('opacity',opacity);
        });
        updateElements();          // <-- Set initial position
    $(window).on("scroll", updateElements);
    }
);
(function(){
  const SVGNS = "http://www.w3.org/2000/svg";
  const shells = [2, 1];               // K=2, L=1  → Lithium, Z=3
  const nucleusR = 15, orbitGap = 22, electronR = 3.6;
  const maxRadius = nucleusR + 26 + (shells.length - 1) * orbitGap;
  const size = maxRadius * 2 + 26;
  const cx = size / 2, cy = size / 2;

  function el(tag, attrs){
    const e = document.createElementNS(SVGNS, tag);
    for(const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  const svg = el("svg", { viewBox:`0 0 ${size} ${size}`, width:size, height:size });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    svg.appendChild(el("circle", { cx, cy, r, fill:"none", stroke:"#cfcfcf", "stroke-width":1, "stroke-dasharray":"1.5 4" }));
  });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    const g = el("g", {});
    const dur = (3.2 + r * 0.11).toFixed(2);
    const dir = i % 2 === 0 ? 1 : -1;
    const from = dir === 1 ? `0 ${cx} ${cy}` : `360 ${cx} ${cy}`;
    const to   = dir === 1 ? `360 ${cx} ${cy}` : `0 ${cx} ${cy}`;
    const anim = el("animateTransform", { attributeName:"transform", type:"rotate", from, to, dur:dur+"s", repeatCount:"indefinite" });
    g.appendChild(anim);
    for(let k = 0; k < count; k++){
      const angle = (360 / count) * k;
      const rad = angle * Math.PI / 180;
      const ex = cx + r * Math.cos(rad);
      const ey = cy + r * Math.sin(rad);
      g.appendChild(el("circle", { cx:ex, cy:ey, r:electronR, fill:"#ffffff", stroke:"#111111", "stroke-width":1.4 }));
    }
    svg.appendChild(g);
  });

  svg.appendChild(el("circle", { cx, cy, r:nucleusR, fill:"#ffffff", stroke:"#111111", "stroke-width":2 }));

  document.getElementById("atom-li").appendChild(svg);
})();


(function(){
  const SVGNS = "http://www.w3.org/2000/svg";
  const shells = [2, 8, 8, 2];         // K=2, L=8, M=8, N=2 → Calcium, Z=20
  const nucleusR = 15, orbitGap = 22, electronR = 3.6;
  const maxRadius = nucleusR + 26 + (shells.length - 1) * orbitGap;
  const size = maxRadius * 2 + 26;
  const cx = size / 2, cy = size / 2;

  function el(tag, attrs){
    const e = document.createElementNS(SVGNS, tag);
    for(const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  const svg = el("svg", { viewBox:`0 0 ${size} ${size}`, width:size, height:size });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    svg.appendChild(el("circle", { cx, cy, r, fill:"none", stroke:"#cfcfcf", "stroke-width":1, "stroke-dasharray":"1.5 4" }));
  });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    const g = el("g", {});
    const dur = (3.2 + r * 0.11).toFixed(2);
    const dir = i % 2 === 0 ? 1 : -1;
    const from = dir === 1 ? `0 ${cx} ${cy}` : `360 ${cx} ${cy}`;
    const to   = dir === 1 ? `360 ${cx} ${cy}` : `0 ${cx} ${cy}`;
    const anim = el("animateTransform", { attributeName:"transform", type:"rotate", from, to, dur:dur+"s", repeatCount:"indefinite" });
    g.appendChild(anim);
    for(let k = 0; k < count; k++){
      const angle = (360 / count) * k;
      const rad = angle * Math.PI / 180;
      const ex = cx + r * Math.cos(rad);
      const ey = cy + r * Math.sin(rad);
      g.appendChild(el("circle", { cx:ex, cy:ey, r:electronR, fill:"#ffffff", stroke:"#111111", "stroke-width":1.4 }));
    }
    svg.appendChild(g);
  });

  svg.appendChild(el("circle", { cx, cy, r:nucleusR, fill:"#ffffff", stroke:"#111111", "stroke-width":2 }));

  document.getElementById("atom-ca").appendChild(svg);
})();

(function(){
  const SVGNS = "http://www.w3.org/2000/svg";
  const shells = [2, 8, 18, 32, 11, 2]; // K,L,M,N,O,P → Tantalum, Z=73
  const nucleusR = 15, orbitGap = 22, electronR = 3.6;
  const maxRadius = nucleusR + 26 + (shells.length - 1) * orbitGap;
  const size = maxRadius * 2 + 26;
  const cx = size / 2, cy = size / 2;

  function el(tag, attrs){
    const e = document.createElementNS(SVGNS, tag);
    for(const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  const svg = el("svg", { viewBox:`0 0 ${size} ${size}`, width:size, height:size });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    svg.appendChild(el("circle", { cx, cy, r, fill:"none", stroke:"#cfcfcf", "stroke-width":1, "stroke-dasharray":"1.5 4" }));
  });

  shells.forEach((count, i) => {
    const r = nucleusR + 26 + i * orbitGap;
    const g = el("g", {});
    const dur = (3.2 + r * 0.11).toFixed(2);
    const dir = i % 2 === 0 ? 1 : -1;
    const from = dir === 1 ? `0 ${cx} ${cy}` : `360 ${cx} ${cy}`;
    const to   = dir === 1 ? `360 ${cx} ${cy}` : `0 ${cx} ${cy}`;
    const anim = el("animateTransform", { attributeName:"transform", type:"rotate", from, to, dur:dur+"s", repeatCount:"indefinite" });
    g.appendChild(anim);
    for(let k = 0; k < count; k++){
      const angle = (360 / count) * k;
      const rad = angle * Math.PI / 180;
      const ex = cx + r * Math.cos(rad);
      const ey = cy + r * Math.sin(rad);
      g.appendChild(el("circle", { cx:ex, cy:ey, r:electronR, fill:"#ffffff", stroke:"#111111", "stroke-width":1.4 }));
    }
    svg.appendChild(g);
  });

  svg.appendChild(el("circle", { cx, cy, r:nucleusR, fill:"#ffffff", stroke:"#111111", "stroke-width":2 }));

  document.getElementById("atom-ta").appendChild(svg);
})();
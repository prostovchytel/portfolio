const obs=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('show')),{threshold:.2});
document.querySelectorAll('.card,.stat').forEach(el=>obs.observe(el));

document.querySelectorAll('.stat').forEach(stat=>{
 let end=+stat.dataset.end,cur=0;
 const step=end/60;
 function run(){
   cur+=step;
   if(cur<end){stat.textContent=Math.floor(cur);requestAnimationFrame(run);}
   else stat.textContent=end;
 }
 run();
});

window.addEventListener("scroll",()=>{

  const winScroll=
    document.documentElement.scrollTop;

  const height=
    document.documentElement.scrollHeight-
    document.documentElement.clientHeight;

  const scrolled=(winScroll/height)*100;

  document.querySelector(".scroll-progress")
    .style.width=scrolled+"%";
});

document.querySelectorAll(".gallery img")
.forEach(img=>{

  img.onclick=()=>{
    document.getElementById("lightbox")
      .style.display="flex";

    document.getElementById("lightbox-img")
      .src=img.src;
  };

});

document.querySelector(".lightbox")
.onclick=()=>{
  document.getElementById("lightbox")
    .style.display="none";
};

particlesJS("particles-js", {

  particles: {

    number: {
      value: 90
    },

    color: {
      value: ["#00e5ff", "#7c4dff", "#ffffff"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.6
    },

    size: {
      value: 2.5
    },

    line_linked: {
      enable: true,
      distance: 140,
      color: "#00e5ff",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 1.2
    }

  },

  interactivity: {

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }

  }

});




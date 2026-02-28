(() => {
  const canvas = document.getElementById('demoCanvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = canvas.clientWidth || 800;
  let H = canvas.height = canvas.clientHeight || 400;

  const rand = (a,b) => a + Math.random()*(b-a);

  let theme = [ '#7c3aed', '#06b6d4', '#f59e0b' ];

  function makeParticles(n=120){
    const pts = [];
    for(let i=0;i<n;i++){
      pts.push({
        x: rand(0,W), y: rand(0,H),
        vx: rand(-0.5,0.5), vy: rand(-0.5,0.5),
        r: rand(1.5,3.8),
        c: theme[i%theme.length]
      })
    }
    return pts;
  }

  let particles = makeParticles(140);
  let mouse = {x: W/2, y:H/2, down:false};
  let running = true;

  function resize(){
    W = canvas.width = canvas.clientWidth || 800;
    H = canvas.height = canvas.clientHeight || 400;
  }

  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', e=>{
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.addEventListener('mouseleave', ()=>{ mouse.x = W/2; mouse.y = H/2 });
  canvas.addEventListener('click', ()=>{ regenTheme() });

  document.getElementById('regen').addEventListener('click', regenTheme);
  document.getElementById('pause').addEventListener('click', ()=>{ running = !running; document.getElementById('pause').textContent = running? '暫停':'繼續' });

  function regenTheme(){
    // generate 3 distinct colors
    theme = [randColor(), randColor(), randColor()];
    particles.forEach((p,i)=>p.c = theme[i%theme.length]);
  }

  function randColor(){
    const h = Math.floor(rand(0,360));
    const s = Math.floor(rand(60,90));
    const l = Math.floor(rand(45,65));
    return `hsl(${h} ${s}% ${l}%)`;
  }

  function step(){
    if(!running){ requestAnimationFrame(step); return }
    ctx.clearRect(0,0,W,H);
    // draw soft background
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'rgba(2,16,33,0.2)');
    g.addColorStop(1,'rgba(6,22,42,0.3)');
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

    particles.forEach(p=>{
      // attract to mouse
      const dx = mouse.x - p.x; const dy = mouse.y - p.y;
      const d2 = Math.max(100, Math.sqrt(dx*dx+dy*dy));
      const f = 30 / (d2);
      p.vx += dx * (f*0.001);
      p.vy += dy * (f*0.001);

      // damping
      p.vx *= 0.98; p.vy *= 0.98;
      p.x += p.vx; p.y += p.vy;

      // wrap
      if(p.x < -10) p.x = W+10; if(p.x > W+10) p.x = -10;
      if(p.y < -10) p.y = H+10; if(p.y > H+10) p.y = -10;

      // draw
      ctx.beginPath();
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.95;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });

    // draw connecting lines for close particles
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const dx = a.x-b.x, dy=a.y-b.y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if(d<80){
          ctx.beginPath();
          ctx.globalAlpha = 0.06 + (0.5*(1 - d/80));
          ctx.strokeStyle = a.c;
          ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }

  // warm up
  regenTheme();
  step();

})();

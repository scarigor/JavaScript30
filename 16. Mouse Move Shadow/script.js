 const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 100; //px

  function shadow(e) {
    const height = hero.offsetHeight;
    const width = hero.offsetWidth;
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
      x = x + e.target.offSetLeft;
      y = y + e.target.offSetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
  }

  hero.addEventListener('mousemove', shadow);
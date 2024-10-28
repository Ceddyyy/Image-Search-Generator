document.addEventListener('mousemove', (e) => {
    
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);

    
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    
    setTimeout(() => {
        trail.style.transform = 'scale(0.5)'; 
        trail.style.opacity = '2'; 
    }, 0);

    
    setTimeout(() => {
        trail.remove();
    }, 500);  
});

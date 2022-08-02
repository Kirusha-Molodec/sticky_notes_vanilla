let zone = document.getElementById('notes_zone');


zone.addEventListener("mousemove", (e) => {
    let x = e.pageX - zone.offsetLeft,
    y = e.pageY - zone.offsetTop;
    zone.onclick = () => {
        let note = document.createElement('div'),
        text = document.createElement('p')

    note.classList.add('note');

    let color = '#' +(Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    note.style.cssText = `position:absolute;top:${y + 'px'};left:${x + 'px'};width: 300px;height: auto;text-align: justify;padding: 15px;border: 3px solid unset;background-color:${color};border-radius: 5px;box-shadow: 0 14px 28px rgba(0,0,0,0.25);word-break: break-all`;

    text.innerHTML = document.getElementById('input_text').value;

    zone.appendChild(note);
    note.appendChild(text);
    }
})
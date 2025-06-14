export function addDecorativeImages(sectionId, imagePaths, count) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.classList.add('decorative-section');

  let seed = 0;
  for (let i = 0; i < sectionId.length; i++) seed += sectionId.charCodeAt(i);

  function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  const sectionRect = section.getBoundingClientRect();
  const sectionWidth = sectionRect.width;
  const sectionHeight = sectionRect.height;

  for (let i = 0; i < count; i++) {
    const imgSrc = imagePaths[Math.floor(random() * imagePaths.length)];
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = '';
    img.className = 'decor-image';

    const size = Math.floor(random() * 40) + 40;
    img.style.width = `${size}px`;
    img.style.position = 'absolute';

    const left = Math.floor(random() * (sectionWidth - size));
    const top = Math.floor(random() * (sectionHeight - size));
    img.style.left = `${left}px`;
    img.style.top = `${top}px`;

    section.appendChild(img);
  }
}

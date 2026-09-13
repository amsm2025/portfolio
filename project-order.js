(() => {
  const showcase = document.querySelector('.project-showcase');
  if (!showcase) return;

  const proLink = Array.from(showcase.querySelectorAll('.project-case')).find((card) =>
    card.querySelector('h3')?.textContent?.trim().startsWith('ProLink AI')
  );
  const northbay = showcase.querySelector('[data-project="northbay-family-clinic"]');

  if (proLink && northbay && proLink.nextElementSibling !== northbay) {
    showcase.insertBefore(proLink, northbay);
  }

  showcase.querySelectorAll('.project-number').forEach((el, index) => {
    el.textContent = String(index + 1).padStart(2, '0');
  });
})();

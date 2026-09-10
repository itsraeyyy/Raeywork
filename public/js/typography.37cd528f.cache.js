/** Keep the final conjunction with its company, without balancing every line. */
export function setupTypography() {
  function keepCompanyTogether() {
    const company = document.querySelector('[data-copy="introTwo"] [data-company="lumoshive"]')?.parentElement;
    const previous = company?.previousSibling;
    if (!previous || previous.nodeType !== 3) return;
    const match = previous.textContent.match(/\s+(and|dan|y|et|und)\s+$/u);
    if (!match) return;
    previous.textContent = previous.textContent.slice(0, match.index) + ' ';
    const group = document.createElement('span');
    group.className = 'company-ending';
    company.before(group);
    group.append(match[1] + ' ', company);
  }
  keepCompanyTogether();
  // Locale replacement runs synchronously; refresh before the reveal observer.
  new MutationObserver(keepCompanyTogether).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang'],
  });
}

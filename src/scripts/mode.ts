export const script = `
  const savedMode = localStorage.getItem('color-mode');

  if (savedMode === 'dark' || savedMode === 'light') {
    document.documentElement.setAttribute('data-color-mode', savedMode);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-color-mode', 'dark');
  }
`;

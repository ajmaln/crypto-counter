export const isLoggedIn = async () => {
  const response = await fetch('/auth');
  if (response.status === 200 && await response.text() === 'yes') return true;
  return false;
};

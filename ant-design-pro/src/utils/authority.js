// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return 'admin'; // localStorage.getItem('antd-pro-authority') || 'admin';
}

export function setAuthority(authority) {
  const auth = 'admin';
  return localStorage.setItem('antd-pro-authority', auth);
}

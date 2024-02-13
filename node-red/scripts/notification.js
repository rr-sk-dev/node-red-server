const welcomeText = `
  <div class="notification-container">
    <h2 class="notification-header">Welcome back!</h2>
    <div class="loader"></div>
  </div>    
`;

setTimeout(() => {
  RED.notify(welcomeText, {
    type: 'compact',
    timeout: 1000,
    modal: true,
  });
}, 500);

const welcomeText = `
    <div class="notification-container">
        <h2 class="notification-header">Welcome back!</h2>
        <div class="notification-loading-spinner">
            <div class="loader"></div>
        </div>
    </div>    
`;

setTimeout(() => {
  RED.notify(welcomeText, {
    type: 'compact',
    timeout: 1500,
    modal: true,
  });
}, 500);

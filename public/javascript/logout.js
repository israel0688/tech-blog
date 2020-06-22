async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

/*  couldn't get auto logout to work

  class AutoLogout {
    constructor() {
      this.events = ['load', 'mousemove', 'mousedown',
                     'click', 'scroll', 'keypress'];
  
      this.warn = this.warn.bind(this);
      this.logout = this.logout.bind(this);
      this.resetTimeout = this.resetTimeout.bind(this);
  
      this.events.forEach((event) => {
        window.addEventListener(event, this.resetTimeout);
      });
  
      this.setTimeout();
    }
  
    clearTimeout() {
      if(this.warnTimeout)
        clearTimeout(this.warnTimeout);
  
      if(this.logoutTimeout)
        clearTimeout(this.logoutTimeout);
    }
    setTimeout() {
      this.warnTimeout = setTimeout(this.warn, 1 * 60 * 1000);
  
      this.logoutTimeout = setTimeout(this.logout, 30 * 60 * 1000);
    }
  
    resetTimeout() {
      this.clearTimeout();
      this.setTimeout();
    }
  
    warn() {
      alert('You will be logged out automatically in 1 minute.');
    }
  
    logout() {
      // Send a logout request to the API
      console.log('Sending a logout request to the API...');
  
      this.destroy();  // Cleanup
    }
  
    destroy() {
      this.clearTimeout();
  
      this.events.forEach((event) => {
        window.removeEventListener(event, this.resetTimeout);
      });
    }
  }
 */
  
  
  document.querySelector('#logout').addEventListener('click', logout);
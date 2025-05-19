class SessionStorageManager {
  constructor(sessionPrefix = "APP_") {
    this.sessionPrefix = sessionPrefix;
  }

  isAvailable() {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung session storage");
      return false;
    }
    return true;
  }

  setSessionItem(key, value) {
    sessionStorage.setItem(this.sessionPrefix + key, JSON.stringify(value));
  }

  getSessionItem(key) {
    const item = sessionStorage.getItem(this.sessionPrefix + key);
    return item;
  }

  removeSessionItem(key) {
    sessionStorage.removeItem(this.sessionPrefix + key);
  }
}

class NavigationSessionStorage extends SessionStorageManager {
  constructor() {
    super("NAVIGATION_");
  }

  setActivePage(pageName) {
    this.setSessionItem("ACTIVE_PAGE", pageName);
  }

  getActivePage() {
    return this.getSessionItem("ACTIVE_PAGE");
  }

  clearNavigationData() {
    this.removeSessionItem("ACTIVE_PAGE");
  }
}

export const navigationSessionStorage = new NavigationSessionStorage();

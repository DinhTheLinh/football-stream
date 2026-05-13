// auth.js
function checkAdminAuth() {
    const admin = sessionStorage.getItem('admin_session');
    if (!admin && !window.location.pathname.includes('admin-login.html')) {
        window.location.href = 'admin-login.html';
    }
}

function loginAdmin(username, password) {
    const admin = window.db.tblAdmin.find(a => a.username === username && a.password === password);
    if (admin) {
        const user = window.db.tblUser.find(u => u.userID === admin.tblUserID);
        sessionStorage.setItem('admin_session', JSON.stringify(user));
        return true;
    }
    return false;
}

function logoutAdmin() {
    sessionStorage.removeItem('admin_session');
    window.location.href = 'admin-login.html';
}

function getGuestSession() {
    return sessionStorage.getItem('guest_nickname');
}

function setGuestSession(nickname) {
    sessionStorage.setItem('guest_nickname', nickname);
}

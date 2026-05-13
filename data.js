// Khởi tạo dữ liệu mẫu nếu chưa có trong localStorage
if (!localStorage.getItem('livestream_data')) {
  const initialData = {
    tblUser: [
      { userID: 1, displayName: "Nguyen Van A", role: "Guest" },
      { userID: 2, displayName: "Ong bap cay", role: "Guest" },
      { userID: 3, displayName: "Admin Linh", role: "Admin" }
    ],
    tblAdmin: [
      { ID: 1, tblUserID: 3, username: "admin01", password: "admin@123" }
    ],
    tblGuest: [
      { id: 1, tblUserID: 2, ipAddress: "192.168.1.5", session: "Ss_123", status: "Active", banUntil: null, banStartTime: null, banReason: null }
    ],
    tblTeam: [
      { teamId: 1, name: "Manchester United", shortName: "MU", logo: "🔴" },
      { teamId: 2, name: "Chelsea", shortName: "CHE", logo: "🔵" },
      { teamId: 3, name: "Arsenal", shortName: "ARS", logo: "🔴" },
      { teamId: 4, name: "Man City", shortName: "MCI", logo: "🩵" }
    ],
    tblLeague: [
      { leagueID: 10, name: "Premier League", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
    ],
    tblMatch: [
      { matchId: 1, homeTeamId: 1, awayTeamId: 2, stadium: "Old Trafford", status: "Live", homeScore: 1, awayScore: 0, currentTime: "41:15", tblLiveChatID: 1 },
      { matchId: 2, homeTeamId: 3, awayTeamId: 4, stadium: "Emirates", status: "Upcoming", homeScore: 0, awayScore: 0, currentTime: "00:00", tblLiveChatID: 2 }
    ],
    tblLinkStream: [
      { id: 1, matchId: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ", quality: "HD", serverName: "Server 1", status: "Active" },
      { id: 2, matchId: 1, url: "https://www.youtube.com/embed/tgbNymZ7vqY", quality: "HD", serverName: "Server 2", status: "Active" }
    ],
    tblMatchEvent: [],
    tblLiveChat: [
      { ID: 1, status: "Active" },
      { ID: 2, status: "Active" }
    ],
    tblCommentDetail: [
      { ID: 1, tblLiveChatID: 1, tblUserID: 2, content: "Great match!", time: "2026-05-20 20:15:00", status: "Visible" }
    ],
    tblViewing: [],
    tblPlayer: [ // Mock player data cho Admin Event
      { id: 1, teamId: 1, name: "Bruno Fernandes" },
      { id: 2, teamId: 1, name: "Marcus Rashford" },
      { id: 3, teamId: 2, name: "Enzo Fernandez" }
    ]
  };
  localStorage.setItem('livestream_data', JSON.stringify(initialData));
}

// Đối tượng global DB để các module dùng chung
window.db = JSON.parse(localStorage.getItem('livestream_data'));

// Hàm lưu dữ liệu
window.saveData = function() {
  localStorage.setItem('livestream_data', JSON.stringify(window.db));
};

// Hàm hiển thị Toast Notification
window.showToast = function(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

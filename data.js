// data.js


if (!localStorage.getItem('livestream_data')) {
  const initialData = {
    tblUser: [
      { userID: 1, displayName: "Nguyen Van A", role: "Guest" },
      { userID: 2, displayName: "Ong bap cay", role: "Guest" },
      { userID: 3, displayName: "Admin Linh", role: "Admin" }
    ],
    tblAdmin: [{ ID: 1, tblUserID: 3, username: "admin01", password: "admin@123" }],
    tblTeam: [
      { teamId: 1, name: "Manchester United", shortName: "MU", logo: "🔴" },
      { teamId: 2, name: "Chelsea", shortName: "CHE", logo: "🔵" },
      { teamId: 3, name: "Arsenal", shortName: "ARS", logo: "🔴" },
      { teamId: 4, name: "Man City", shortName: "MCI", logo: "🩵" }
    ],
    tblMatch: [
      { matchId: 1, homeTeamId: 1, awayTeamId: 2, stadium: "Old Trafford", status: "Live", homeScore: 1, awayScore: 0, currentTime: "41", tblLiveChatID: 1 },
      { matchId: 2, homeTeamId: 3, awayTeamId: 4, stadium: "Emirates", status: "Live", homeScore: 2, awayScore: 2, currentTime: "85", tblLiveChatID: 2 }
    ],
        tblLiveChat: [
      { ID: 1, status: "Active" },
      { ID: 2, status: "Active" }
    ],
    tblLinkStream: [
      { id: 1, matchId: 1, url: "#", serverName: "Server 1" },
      { id: 2, matchId: 2, url: "#", serverName: "Server 1" }
    ],
    tblCommentDetail: [
      // Bình luận trận 1
      { ID: 1, tblLiveChatID: 1, tblUserID: 2, content: "MU đá kinh quá!", status: "Visible" },
      { ID: 2, tblLiveChatID: 1, tblUserID: "Fan_Quỷ", content: "Rashford sút cháy quá ae", status: "Visible" },
      { ID: 3, tblLiveChatID: 1, tblUserID: 3, content: "Chào mừng ae đến với Elite Stadium", status: "Visible" },
      // Bình luận trận 2
      { ID: 4, tblLiveChatID: 2, tblUserID: 1, content: "Arsenal cố lên!", status: "Visible" },
      { ID: 5, tblLiveChatID: 2, tblUserID: "City_Zen", content: "Haaland đâu rồi???", status: "Visible" }
    ],
    tblViewing: [],
    tblMatchEvent: [],
        tblLeague: [
      { leagueID: 10, name: "Premier League", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
    ],
    tblPlayer: [
      { id: 1, teamId: 1, name: "Bruno Fernandes" },
      { id: 2, teamId: 3, name: "Bukayo Saka" }
    ]
  };
  localStorage.setItem('livestream_data', JSON.stringify(initialData));
}

window.db = JSON.parse(localStorage.getItem('livestream_data'));

window.saveData = function() {
  localStorage.setItem('livestream_data', JSON.stringify(window.db));
};
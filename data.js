// data.js
function loadData() {
  const DATA_VERSION = "3.0"; // Nâng cấp lên bản 3.0 để ép cập nhật isStarter
  const data = localStorage.getItem('livestream_data');
  const currentVersion = localStorage.getItem('livestream_version');

  if (data && currentVersion === DATA_VERSION) {
    window.db = JSON.parse(data);
  } else {
    const initialData = {
      tblUser: [
        { userID: 1, displayName: "Thùy Phương", role: "Guest" },
        { userID: 2, displayName: "Bóng Đá Fan", role: "Guest" },
        { userID: 3, displayName: "Admin Elite", role: "Admin" }
      ],
      tblAdmin: [{ ID: 1, tblUserID: 3, username: "admin01", password: "admin@123" }],
      tblTeam: [
        { teamId: 1, name: "Manchester United", shortName: "MU", logo: "🔴" },
        { teamId: 2, name: "Chelsea FC", shortName: "CH", logo: "🔵" },
        { teamId: 3, name: "Arsenal FC", shortName: "AR", logo: "🔴" },
        { teamId: 4, name: "Manchester City", shortName: "MC", logo: "🩵" },
        { teamId: 5, name: "Liverpool FC", shortName: "LI", logo: "🔴" },
        { teamId: 6, name: "Tottenham Hotspur", shortName: "TO", logo: "⚪" },
        { teamId: 7, name: "FC Barcelona", shortName: "BA", logo: "🔵🔴" },
        { teamId: 8, name: "Real Madrid", shortName: "RM", logo: "⚪" },
        { teamId: 9, name: "Bayern Munich", shortName: "BM", logo: "🔴⚪" },
        { teamId: 10, name: "Paris Saint-Germain", shortName: "PSG", logo: "🔵🔴" }
      ],
      tblMatch: [
        { matchId: 1, homeTeamId: 1, awayTeamId: 2, stadium: "Old Trafford", status: "Live", homeScore: 2, awayScore: 1, currentTime: "65", tblLiveChatID: 1 },
        { matchId: 2, homeTeamId: 5, awayTeamId: 3, stadium: "Anfield", status: "Live", homeScore: 1, awayScore: 0, currentTime: "32", tblLiveChatID: 2 },
        { matchId: 3, homeTeamId: 7, awayTeamId: 8, stadium: "Camp Nou", status: "Live", homeScore: 3, awayScore: 2, currentTime: "90", tblLiveChatID: 3 },
        { matchId: 4, homeTeamId: 4, awayTeamId: 6, stadium: "Etihad Stadium", status: "HT", homeScore: 1, awayScore: 1, currentTime: "45", tblLiveChatID: 4 },
        { matchId: 5, homeTeamId: 9, awayTeamId: 10, stadium: "Allianz Arena", status: "Live", homeScore: 0, awayScore: 2, currentTime: "15", tblLiveChatID: 5 }
      ],
      tblLiveChat: [
        { ID: 1, status: "Active" }, { ID: 2, status: "Active" }, { ID: 3, status: "Active" }, { ID: 4, status: "Active" }, { ID: 5, status: "Active" }
      ],
      tblLinkStream: [
        { id: 1, matchId: 1, url: "#", serverName: "K+ Sport 1" },
        { id: 3, matchId: 2, url: "#", serverName: "VTV Cab" },
        { id: 4, matchId: 3, url: "#", serverName: "FPT Play" }
      ],
      tblCommentDetail: [
        { ID: 1, tblLiveChatID: 1, tblUserID: "Quỷ_Đỏ_88", content: "MU đá cháy quá ae ơi!", status: "Visible" },
        { ID: 2, tblLiveChatID: 1, tblUserID: "Chelsea_Fan", content: "Trọng tài bắt ép Chelsea quá", status: "Visible" }
      ],
      tblViewing: [],
      tblMatchEvent: [],
      tblLeague: [
        { leagueID: 10, name: "Premier League", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { leagueID: 11, name: "La Liga", logo: "🇪🇸" }
      ],
      tblPlayer: [
        // MU (1)
        { id: 101, teamId: 1, name: "Bruno Fernandes", isStarter: true },
        { id: 102, teamId: 1, name: "Marcus Rashford", isStarter: true },
        { id: 103, teamId: 1, name: "Alejandro Garnacho", isStarter: true },
        { id: 104, teamId: 1, name: "Kobbie Mainoo", isStarter: true },
        { id: 105, teamId: 1, name: "Rasmus Højlund", isStarter: true },
        { id: 106, teamId: 1, name: "Lisandro Martínez", isStarter: true },
        { id: 107, teamId: 1, name: "Andre Onana", isStarter: true },
        { id: 108, teamId: 1, name: "Diogo Dalot", isStarter: true },
        { id: 109, teamId: 1, name: "Harry Maguire", isStarter: true },
        { id: 110, teamId: 1, name: "Casemiro", isStarter: true },
        { id: 111, teamId: 1, name: "Christian Eriksen", isStarter: true },
        { id: 112, teamId: 1, name: "Antony", isStarter: false },
        { id: 113, teamId: 1, name: "Mason Mount", isStarter: false },
        { id: 114, teamId: 1, name: "Scott McTominay", isStarter: false },

        // Chelsea (2)
        { id: 201, teamId: 2, name: "Enzo Fernández", isStarter: true },
        { id: 202, teamId: 2, name: "Cole Palmer", isStarter: true },
        { id: 203, teamId: 2, name: "Nicolas Jackson", isStarter: true },
        { id: 204, teamId: 2, name: "Moisés Caicedo", isStarter: true },
        { id: 205, teamId: 2, name: "Reece James", isStarter: true },
        { id: 206, teamId: 2, name: "Christopher Nkunku", isStarter: false },
        { id: 207, teamId: 2, name: "Robert Sánchez", isStarter: true },
        { id: 208, teamId: 2, name: "Levi Colwill", isStarter: true },
        { id: 209, teamId: 2, name: "Axel Disasi", isStarter: true },
        { id: 210, teamId: 2, name: "Conor Gallagher", isStarter: true },
        { id: 211, teamId: 2, name: "Raheem Sterling", isStarter: false },

        // Thêm cho các đội khác tương tự...
        { id: 301, teamId: 3, name: "Bukayo Saka", isStarter: true },
        { id: 302, teamId: 3, name: "Martin Ødegaard", isStarter: true },
        { id: 310, teamId: 3, name: "Leandro Trossard", isStarter: false },

        { id: 401, teamId: 4, name: "Erling Haaland", isStarter: true },
        { id: 410, teamId: 4, name: "Julian Alvarez", isStarter: false },

        { id: 501, teamId: 5, name: "Mohamed Salah", isStarter: true },
        { id: 511, teamId: 5, name: "Cody Gakpo", isStarter: false },

        { id: 701, teamId: 7, name: "Robert Lewandowski", isStarter: true },
        { id: 710, teamId: 7, name: "Raphinha", isStarter: false },

        { id: 801, teamId: 8, name: "Vinícius Júnior", isStarter: true },
        { id: 810, teamId: 8, name: "Rodrygo", isStarter: false }
      ]
    };
    localStorage.setItem('livestream_data', JSON.stringify(initialData));
    localStorage.setItem('livestream_version', DATA_VERSION);
    window.db = initialData;
  }

}

window.saveData = function() {
  localStorage.setItem('livestream_data', JSON.stringify(window.db));
};

window.resetDatabase = function() {
  localStorage.removeItem('livestream_version');
  localStorage.removeItem('livestream_data');
  location.reload();
};

loadData();
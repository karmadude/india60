module.exports = {
  elections: {
    delhi_election_2015: {
      title: "Delhi Election 2015",
      path: dataPath("delhi-election-2015")
    },
    loksabha_election_2014: {
      title: "Lok Sabha Election 2014",
      path: dataPath("loksabha-election-2014")
    }
  }
};

function dataPath(p) {
  return "india60/data/" + p;
}

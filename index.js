module.exports = {
  elections: {
    bihar_assembly_election_2015: {
      title: "Bihar Legislative Assembly Election 2015",
      path: dataPath("bihar-assembly-election-2015")
    },
    delhi_election_2013: {
      title: "Delhi Election 2013",
      path: dataPath("delhi-election-2013")
    },
    delhi_election_2015: {
      title: "Delhi Election 2015",
      path: dataPath("delhi-election-2015")
    },
    loksabha_election_2014: {
      title: "Lok Sabha Election 2014",
      path: dataPath("loksabha-election-2014")
    }
  },
  aap: {
    aap_social_stats: {
      title: "Aam Aadmi Party Social Stats",
      path: dataPath("aap-social-stats")
    }
  }
};

function dataPath(p) {
  return "india60/data/" + p;
}

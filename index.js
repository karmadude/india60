module.exports = {
  elections: [
    {
      id: "U05", 
      type: "U",
      abbr: "DL",
      title: "Delhi Election 2015",
      path: dataPath("delhi-election-2015")
    },
    {
      id: "loksabha", 
      title: "Lok Sabha Election 2014",
      path: dataPath("loksabha-election-2014")
    }
  ]
};

function dataPath(p) {
  return "india60/data/" + p;
}

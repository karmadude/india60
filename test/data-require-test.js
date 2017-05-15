let test = require("tape");

const StateInfo = {
  "assam": { id: "assam", title: "Assam" },
  "bihar": { id: "bihar", title: "Bihar" },
  "delhi": { id: "delhi", title: "NCT of Delhi" },
  "goa": { id: "goa", title: "Goa" },
  "kerala": { id: "kerala", title: "Kerala" },
  "manipur": { id: "manipur", title: "Manipur" },
  "punjab": { id: "punjab", title: "Punjab" },
  "tamil_nadu": { id: "tamil-nadu", title: "Tamil Nadu" },
  "uttar_pradesh": { id: "uttar-pradesh", title: "Uttar Pradesh" },
  "uttarakhand": { id: "uttarakhand", title: "Uttarakhand" },
  "west_bengal": { id: "west-bengal", title: "West Bengal" }
}

test("requiring data", function(t) {
  let data;
  let years = [2013, 2015, 2016, 2017];
  let statesForYear = {
    2013: [StateInfo.delhi],
    2015: [StateInfo.bihar, StateInfo.delhi],
    2016: [StateInfo.assam, StateInfo.kerala, StateInfo.tamil_nadu, StateInfo.west_bengal],
    2017: [StateInfo.goa, StateInfo.manipur, StateInfo.punjab, StateInfo.uttar_pradesh, StateInfo.uttarakhand]
  };

  for (let year of years) {
    let states = statesForYear[year];
    for (let state of states) {
      let data = require(`../elections/assembly/${state.id}-${year}`);
      t.equal(data.year, year);
      t.equal(data.title, state.title);
    }
  }

  data = require("../elections/loksabha-2014");
  t.equal(data.year, 2014);
  t.equal(data.house, "loksabha");

  data = require("../stats/overseas-indians-nri-pio");
  t.deepEqual(data[0], {
    "Country": "Afghanistan",
    "Total": 3749,
    "NRI": 3749,
    "PIO": 0
  });

  t.end();
})

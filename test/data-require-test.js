let test = require("tape");

test("requiring data", function(t) {
  let data;

  data = require("../elections/assembly/assam-2016");
  t.equal(data.year, 2016);
  t.equal(data.title, "Assam");

  data = require("../elections/assembly/bihar-2015");
  t.equal(data.year, 2015);
  t.equal(data.title, "Bihar");

  data = require("../elections/assembly/delhi-2013");
  t.equal(data.year, 2013);
  t.equal(data.title, "NCT of Delhi");

  data = require("../elections/assembly/delhi-2015");
  t.equal(data.year, 2015);
  t.equal(data.title, "NCT of Delhi");

  data = require("../elections/assembly/kerala-2016");
  t.equal(data.year, 2016);
  t.equal(data.title, "Kerala");

  data = require("../elections/assembly/tamil-nadu-2016");
  t.equal(data.year, 2016);
  t.equal(data.title, "Tamil Nadu");

  data = require("../elections/assembly/west-bengal-2016");
  t.equal(data.year, 2016);
  t.equal(data.title, "West Bengal");

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

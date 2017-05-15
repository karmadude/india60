let test = require("tape");

test("index", function(t) {
  let india60 = require("../index");

  t.equal(india60.version, "2.1.0");

  t.end();
});

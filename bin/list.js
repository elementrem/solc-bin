
var soljsonSources = [
  "soljson-v0.4.10+commit-610c4b0.js",
  "soljson-v0.4.18+commit.01dcd70"
];
var soljsonReleases = {
  "0.4.10": "soljson-v0.4.10+commit-610c4b0.js",
  "0.4.18": "soljson-v0.4.18+commit.01dcd70.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };

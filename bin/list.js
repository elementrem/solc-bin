
var soljsonSources = [
  "soljson-v0.4.10+commit-610c4b0.js",
];
var soljsonReleases = {
  "0.4.10": "soljson-v0.4.10+commit-610c4b0.js",
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };

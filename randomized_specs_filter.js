(function() {
  jasmine.addExecutionFilter(function(specsToRun) {
    function shuffle(specs){ // from http://dzone.com/snippets/array-shuffle-javascript
      for(var j, x, i = specs.length; i; j = Math.floor(Math.random() * i), x = specs[--i], specs[i] = specs[j], specs[j] = x);
          return specs;
    };

    var specs = [];

    var runnables = util.runnablesFromIds(specsToRun);
    while(runnables.length) {
      var currentRunnable = runnables.pop();
      if (/spec/.test(currentRunnable.id)) {
        specs.push(currentRunnable);
      } else {
        runnables = runnables.concat(currentRunnable.children());
      }
    }

    var randomSpecs = shuffle(specs);
    var randomSpecIds = util.idsFromRunnables(randomSpecs);

    if (!randomSpecIds.length) {
      return specsToRun;
    }

    return util.filterRunnablesFromCurrentRunnables(randomSpecIds, specsToRun);
  });
})();

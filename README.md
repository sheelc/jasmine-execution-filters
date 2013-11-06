# Jasmine Execution Filters #

This repository contains some small scripts that adds functionality in determining what order and which specs to run when jasmine executes a test suite.

Currently, it only contains functionality for focused specs and limited support for running specs in random order.

__NOTE: these scripts only work with jasmine 2.0__

## Installing the filters ##

1. Copy the `execution_filters_util.js` and add it to your project (somewhere like `spec/support` is suggested)
1. Determine which execution filters you want, for example, `focused_specs_filter.js` and copy these as well to the same directory
1. Include these files after boot.js is included. If you're using jasmine-gem, then including it in the array of boot files should be good
1. Customize your boot.js:
Replace `env.execute()` with the folowing:
    if (jasmine.customExecute) {
      jasmine.customExecute();
    } else {
      env.execute();
    }

## Focused Specs ##

If you install the focus spec filter, you should be able to only run a specific suite with any of the following: `ddescribe`, `fdescribe`, or `describe.only`
Focusing a spec similarly uses `iit`, `fit`, or `it.only`. Focusing a spec/suite will still work in conjunction with the HTML runner's interface to click a certain spec and see just that spec running. These focused specs are given preference in terms of whittling down which specs to run and then the query parameters used after clicking on a spec further filter down.

## Random Spec Order ##

This filter will take whatever specs you've chosen to run so far (can be used with or without focused specs) and randomize across all the individual specs.

The plan is to randomize with a particular seed, print that seed out, and provide some way to use query parameters to specify which seed to use in case you need to debug test pollution that shows up with a certain seed. None of this functionality is implemented yet.


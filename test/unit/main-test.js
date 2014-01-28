var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
// Defines the configuration for **require.js**, this lists all the project's
// external dependencies as well as where to find the dependency file in a
// development environment
require.config({
    paths: {
    },
    // Ensure that the dependencies are loaded in the right order
    shim: {
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start,
    baseUrl: '/base/js'
});
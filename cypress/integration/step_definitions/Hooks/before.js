const { Before, After } = require('cypress-cucumber-preprocessor/steps')

// this will get called before each scenario
Before(() => {
    //
})

// this will only get called before scenarios tagged with @foo
Before({ tags: '@foo' }, () => {
    //
})


requirejs.config({
    paths: {
        'requirejs': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min',
    }
});

var mods = ['hello_world'];
requirejs(mods);
# fis-parser-stylus

A parser plugin for fis to compile stylus file.

## usage

    $ npm install -g fis
    $ npm install -g fis-parser-stylus
    $ vi example/fis-conf.js

```javascript
//file : example/fis-conf.js
fis.config.merge({
  modules:{
    parser:{
      styl: 'stylus'
    }
  },
  roadmap:{
    ext:{
      styl: 'css'
    }
  }
});
```

## example

    $ cd example
    $ fis release -d output


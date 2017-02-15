I'm trying to figure out a way to have the `dist` folder contain

 - index.js
 - index.css
 - page1.js
 - page1.css
 - common.js
 - common.css

I'm using `ExtractTextPlugin` and `CommonsChunkPlugin` but so far have not been able to get it to generate `common.css`, despite the fact that `dist/index.css` and `dist/page1.css` both contain css from `app/base.css`

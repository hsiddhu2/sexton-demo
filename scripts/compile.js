const sass = require("node-sass");

sass.render({ file: "src/styles/app.scss" }, (err, result) => {
  if (err) throw err;
  process.stdout.write(result.css);
});

const once = sass.renderSync({ file: "src/styles/theme.scss" });
process.stdout.write(once.css);

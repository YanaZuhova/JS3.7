let articles = ["JavaScript", "Technologies", "Angular"];
articles.push("React");

console.log(articles);

let firstArticle = articles.shift();
console.log(firstArticle);
console.log(articles);

let indexOfReact = articles.indexOf("React");
console.log("React is article number", indexOfReact+1);
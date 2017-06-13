# pnut-to-markdown

Converts the output of the pnut.io API (back) to Markdown. Intention is to make editing a users profile seamless.

## Install

```shell
npm install pnut-to-markdown
```

## Usage

You basically want to feed it the output of data.content.html after fetching a user object:

```javascript
const pnutToMarkdown = require("pnut-to-markdown");
const pnut = require("pnut-butter");
const user = await pnut.user("me");


const converted = pnutToMarkdown(user.data.content.html);
console.log(converted);
```

## License

MIT &copy; [Kai Wood](https://kwd.io)

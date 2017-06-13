const pnutToMarkdown = require("./index");

test("that it generates correct output from a given input", () => {
  const apiFormatted = `<span itemscope="https://pnut.io/schemas/Post">* Author of the <a href="https://github.com/kaiwood/pnut-butter">pnut-butter library</a> [github.com]<br>* Creator of <a href="https://jellytime.net">JellyTime</a> [jellytime.net]</span>`;

  const correctOutput = `* Author of the [pnut-butter library](https://github.com/kaiwood/pnut-butter)
* Creator of [JellyTime](https://jellytime.net)
`;

  expect(pnutToMarkdown(apiFormatted)).toBe(correctOutput);
});

test("another profile with hash tags in it", () => {
  const apiFormatted = `<span itemscope="https://pnut.io/schemas/Post">I can help.<br><span data-tag-name="pnutpatreon" itemprop="tag">#pnutpatreon</span> <span data-tag-name="dachclub" itemprop="tag">#dachclub</span><br>Chats<br><a href="https://patter.chat/room.html?channel=88">Bitcoin</a> [patter.chat]<br><a href="https://patter.chat/room.html?channel=87">Politics</a> [patter.chat] - Invite only<br><a href="https://patter.chat/room.html?channel=395">Hipstamatic</a> [patter.chat]<br>Website<br><a href="http://www.updip.link">UPDIP</a> [www.updip.link]</span>
`;
  const correctOutput = `I can help.
#pnutpatreon #dachclub
Chats
[Bitcoin](https://patter.chat/room.html?channel=88)
[Politics](https://patter.chat/room.html?channel=87) - Invite only
[Hipstamatic](https://patter.chat/room.html?channel=395)
Website
[UPDIP](http://www.updip.link)
`;

  expect(pnutToMarkdown(apiFormatted)).toBe(correctOutput);
});

test("yet another profile", () => {
  const apiFormatted = `<span itemscope="https://pnut.io/schemas/Post"><span data-mention-id="6" data-mention-name="pnut" itemprop="mention">@pnut</span> developerd<br><span data-tag-name="🐝" itemprop="tag">#🐝</span> keeper</span>`;

  const correctOutput = `@pnut developerd
#🐝 keeper
`;

  expect(pnutToMarkdown(apiFormatted)).toBe(correctOutput);
});

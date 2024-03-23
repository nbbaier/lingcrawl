import { load } from "cheerio";

const html = await fetch("https://ling.auf.net/lingbuzz/");

const $ = load(await html.text());

const $links = $("a:contains('[pdf]')");

$links.each((index, element) => {
  console.log($(element).attr("href"));
});

import fs from "fs";
import path from "path";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public/index.html"),
    "utf8"
  );

  // Extract body content (strip scripts, keep everything else)
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  let bodyContent = bodyMatch ? bodyMatch[1] : "";
  bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/, "").trim();

  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}

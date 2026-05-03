import fs from "fs";
import path from "path";

export default function Home() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "src/app/body-content.html"),
    "utf8"
  );

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

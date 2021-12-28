import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0A903Afe0A1032e5dC814A4C6a51FC418afB5207"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Show Ticket",
        description: "This NFT will give you access to GrantsDAO!",
        image: readFileSync("scripts/assets/ticket.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

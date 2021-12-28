import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x7850bc6a7648E685B1829426C5CDA4718e5923a6");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "GrantDAO Membership",
      // A description for the collection.
      description: "A DAO for arts grants.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/logo.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();

// metadata: {
//     name: 'GrantDAO Membership',
//     description: 'A DAO for arts grants.',
//     image: 'https://cloudflare-ipfs.com/ipfs/bafkreieidbehyid5mrskyapxdnyyxlu54aodtq4ey4dfxc7iqmfvsnv4he',
//     primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
//     uri: 'ipfs://bafkreibcy3gzteh63z4xqs6kqdi77mknjj3vodhyrf5it35emaow643dum'
//   },
//   address: '0x0A903Afe0A1032e5dC814A4C6a51FC418afB5207',
//   type: 11

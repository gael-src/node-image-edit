const Jimp = require("jimp");
const args = process.argv.slice(2);
const bildToTransform = args[0];
const bildName = args[1];
const zufall = Math.round(Math.random() * 100);

// 0 ARGUMENT AS INPUT (DEFAULT BILD)
if (args.length === 0) {
  // open a file called "lenna.png"
  Jimp.read("final.png", (err, final) => {
    if (err) throw err;
    final
      // .resize(256, 256) // resize
      // .quality(60) // set JPEG quality
      // .greyscale() // set greyscale
      .invert() // invert the image colours
      .sepia() // apply a sepia wash to the image
      .write("final-small-bw.png"); // save
  });
  console.log(`1: Bild: final.png transformed to: final-small-bw.png`);
}

// 1 ARGUMENT AS INPUT (YOUR BILD)
if (args.length === 1) {
  // open a file called "lenna.png"
  Jimp.read(bildToTransform, (err, final) => {
    if (err) throw err;
    final
      // .resize(256, 256) // resize
      // .quality(60) // set JPEG quality
      // .greyscale() // set greyscale
      .invert() // invert the image colours
      .sepia() // apply a sepia wash to the image
      .write(`final-small-bw${zufall}.png`); // save
  });
  console.log(
    `2: Bild: ${bildToTransform} transformed to: final-small-bw${zufall}.png`
  );
}

// 2 ARGUMENT AS INPUT (YOUR BILD AND BILDNAME)
if (args.length === 2) {
  // open a file called "lenna.png"
  Jimp.read(bildToTransform, (err, final) => {
    if (err) throw err;
    final
      // .resize(256, 256) // resize
      // .quality(60) // set JPEG quality
      // .greyscale() // set greyscale
      .invert() // invert the image colours
      .sepia() // apply a sepia wash to the image
      .write(`${bildName}-small-bw.png`); // save
  });
  console.log(`3: Bild: ${bildToTransform} transformed to: ${bildName}.png`);
}

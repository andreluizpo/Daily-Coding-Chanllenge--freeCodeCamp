/*
freeCodeCamp - Daily Coding Challenges (09/21/2025) 

**Video Storage**
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

- The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
- If not given one of the video units above, return "Invalid video unit".
- The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
- If not given one of the hard drive units above, return "Invalid drive unit".
- Return the number of whole videos the drive can fit.
- Use the following conversions:
+-------+-----------+
|Unit   |Equivalent |
+-------+-----------+
|  1 B  |    1 B    |
| 1 KB  |  1000 B   |
| 1 MB  |  1000 KB  |
| 1 GB  |  1000 MB  |
| 1 TB  |  1000 GB  |
+-------+-----------+
For example, given 500, "MB", 100, and "GB as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
*/

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const validVideoUnit = new Set(["B", "KB", "MB", "GB"]);
  const validDriveUnit = new Set(["GB", "TB"]);
  let convertedVideoSize = 0;
  let convertedDriveSize = 0;

  // Verifica se as unidade do vídeo e drive são válidas
  if(!validVideoUnit.has(videoUnit)) { return "Invalid video unit"; } 
  if(!validDriveUnit.has(driveUnit)) { return "Invalid drive unit"; }

  // Convertendo vídeos para B (bytes)
  switch(videoUnit) {
    case "B":
      convertedVideoSize = videoSize; // 1B -> 1B
      break;
    case "KB":
      convertedVideoSize = (videoSize * 1000); // 1 KB -> 1000 B
      break;
    case "MB":
      convertedVideoSize = (videoSize * (1000**2)); // 1 MB -> 1000 KB -> 1000000 B
      break;
    case "GB":
      convertedVideoSize = (videoSize * (1000**3)); // 1 GB -> 1000 MB -> 1000000 KB -> 1000000000 B
      break;
  }

  //console.log(`VideoSize: ${videoSize} ${videoUnit} -> ${convertedVideoSize} B`);

  switch(driveUnit) {
    case "GB":
      convertedDriveSize = (driveSize * (1000**3)); // 1 GB -> 1000 MB -> 1000000 KB -> 1000000000 B
      break;
    case "TB":
      convertedDriveSize = (driveSize * (1000**4)); // 1 TB -> 1000 GB -> 1000000 MB -> 1000000000 KB -> 1000000000000 B
      break;
  }

  //console.log(`DriveSize: ${driveSize} ${driveUnit} -> ${convertedDriveSize} B`);

  let numberOfVideosSupported = parseInt(convertedDriveSize/ convertedVideoSize);

  //console.log(`Cabem ${numberOfVideosSupported} vídeos de ${videoSize} ${videoUnit} em um disco rígido de ${driveSize} ${driveUnit}.\n `);
 
  return numberOfVideosSupported;
}

console.log(numberOfVideos(500, "MB", 100, "GB")) // should return 200.
console.log(numberOfVideos(1, "TB", 10, "TB")) // should return "Invalid video unit".
console.log(numberOfVideos(2000, "MB", 100000, "MB")) // should return "Invalid drive unit".
console.log(numberOfVideos(500000, "KB", 2, "TB")) // should return 4000.
console.log(numberOfVideos(1.5, "GB", 2.2, "TB")) // should return 1466.
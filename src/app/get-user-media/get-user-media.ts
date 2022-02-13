export default function getUserMedia(
  canvas: HTMLCanvasElement,
  player: HTMLVideoElement,
  img: HTMLImageElement
) {
  const context = canvas.getContext('2d');

  if (context) {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
        setInterval(() => {
          context.drawImage(
            player,
            0,
            0,
            player.videoWidth,
            player.videoHeight
          );

          const newImg = canvas.toDataURL();

          /*
            #### TODO
           * Ao invés de inserir newImg envie ela para a API de Marcos e quando a API retornar a imagem em base64 insira em img.src
           */
          img.src = newImg;
        }, 1000 / 60);
      });
  }
}

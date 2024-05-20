const AnimatedVideo = () => {
  return (
    <video
      src={
        "https://s3-figma-videos-production-sig.figma.com/video/1193581437744146976/TEAM/9958/c5ff/-f9f0-4a3b-a869-d55133e3993a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syy2IsoFzkg-nx7XjqWoLaMi1K0p8fTTiqRSh1KEClXaIZGytPt8KomlwYeY1f8RuaZAENsnrJhb~fS976Q7Y3PAVLEmxRDB3nxfPcFb2CR5Qa9XAg7X5OO6rfQBgf25sEgKVkrns-ZUcRZlBoTutVdnuYefquDu10-WBLiJr8YeNCieM57O9cMC1FqjPjFzQptFNNEzbBGnUcpif6o6x2gEJfW2Xj06GQrXILfsD9pHTqOyisRTYl4d5K1IZFGIKuTkib2PMBn~aODSTXDcvIoUh-YOFpvu~22ikMViem8NvRiqvtSdoh3KA4ZVoidiYlPnTaOwWayUUCYb8X23qA__"
      }
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "auto" }}
      className="absolute top-0 z-40 opacity-95 filter   mix-blend-overlay  "
    ></video>
  );
};

export default AnimatedVideo;

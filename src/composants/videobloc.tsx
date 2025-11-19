
interface VideoBlocProps {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;   // souvent nécessite muted pour fonctionner
  loop?: boolean;
  muted?: boolean;
  title?: string;
}

function VideoBloc({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  title = 'Vidéo'
}: VideoBlocProps) {
  return (
    <div className="my-6">
      {title && <p className="mb-2 font-medium">{title}</p>}
      <video
        className="w-full max-w-3xl rounded shadow"
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
}

export default VideoBloc;

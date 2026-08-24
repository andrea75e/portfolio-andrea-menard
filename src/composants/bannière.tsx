

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-white py-12"
    style={
      {
        backgroundImage: `url("/images/covervideo/moi.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "20% 25%"
      }
    }>
      <h1 className="text-5xl font-bold mb-4 text-center">
        Bienvenue sur mon site
      </h1>
      <p className="text-2xl max-w-xl text-center">
        Découvrez ici mon univers
      </p>
      {/* Ajoute une image si tu veux */}
      {/* <img src="/images/mon-image.jpg" alt="Bannière" className="w-32 h-32 rounded-full mt-8" /> */}
    </section>
  );
}



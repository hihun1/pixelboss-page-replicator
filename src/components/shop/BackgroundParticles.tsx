
const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Small particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Larger floating elements */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-6 h-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-md animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 7}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;

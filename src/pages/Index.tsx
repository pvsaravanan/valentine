
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  const handleNoButtonHover = () => {
    // Random position within viewport
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoButtonPosition({ x: newX, y: newY });
    setYesButtonSize((prev) => prev + 0.15);
  };

  const handleYesClick = () => {
    toast({
      title: "💝 Yaay!",
      description: "We (Sarah💖+you💕) will make love forever.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-[#FFDEE2] to-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="w-48 h-48 mx-auto mb-8 animate-float">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/175.gif"
            alt="Togepi"
            className="w-full h-full object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight fade-in text-[#ea384c]">
          Will you be my Valentine?
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto fade-in-delay-1">
          I promise to make you as happy as a Togepi! 💝
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mt-8 fade-in-delay-2">
          <motion.button
            style={{ scale: yesButtonSize }}
            className="px-6 py-3 bg-[#ea384c] text-white rounded-full font-medium 
              hover:bg-[#ea384c]/90 transition-colors duration-200"
            onClick={handleYesClick}
          >
            Yes! 💖
          </motion.button>

          <motion.button
            initial={{ x: 0, y: 0 }}
            animate={{
              x: noButtonPosition.x - window.innerWidth / 2 + 50,
              y: noButtonPosition.y - window.innerHeight / 2 + 50,
            }}
            className="px-6 py-3 bg-red-500 text-white rounded-full font-medium 
              hover:bg-red-600 transition-colors duration-200 absolute"
            onMouseEnter={handleNoButtonHover}
            onClick={handleNoButtonHover}
          >
            No
          </motion.button>
        </div>

        <p className="text-sm text-[#ea384c]/60 mt-12 fade-in-delay-3">
          Made with extra love for you 💝
        </p>
      </div>
    </div>
  );
};

export default Index;

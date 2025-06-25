// components/ContactAnimation.tsx
'use client';

import { Player } from "@lottiefiles/react-lottie-player";

export default function ContactAnimation() {
  return (
    <Player
      autoplay
      loop
      src="https://assets3.lottiefiles.com/packages/lf20_kdx6cani.json"
      className="w-full h-[240px] md:h-[360px]"
    />
  );
}

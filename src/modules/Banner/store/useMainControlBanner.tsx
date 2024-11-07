import { AnimationControls } from 'framer-motion';
import { create } from 'zustand';

interface Props {
  mainControls: AnimationControls | undefined;
  intiate: (mainControl: AnimationControls) => void;
}

export const useMainControlBanner = create<Props>((set) => ({
  mainControls: undefined,
  intiate: (mainControl: AnimationControls) =>
    set(() => ({ mainControls: mainControl })),
}));

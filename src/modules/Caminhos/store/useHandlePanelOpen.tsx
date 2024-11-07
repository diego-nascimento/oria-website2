import { create } from 'zustand';

interface Props {
  panelOpen: string | false;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const useHandlePanelOpen = create<Props>((set) => ({
  panelOpen: false,
  handleChange:
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      set(() => ({ panelOpen: isExpanded ? panel : false })),
}));

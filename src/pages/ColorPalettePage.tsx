import { CodeDisplay } from "../features/codeDisplay/CodeDisplay";
import { ColorPalette } from "../features/colorPalette/ColorPalette";
import { Page } from "../components/page/Page";

export const ColorPalettePage: React.FC = () => {
  return (
    <Page title="Color Palette Generator">
      <ColorPalette />
      <CodeDisplay />
    </Page>
  );
};

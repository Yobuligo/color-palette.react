import { CodeDisplay } from "../components/codeDisplay/CodeDisplay";
import { ColorPalette } from "../components/colorPalette/ColorPalette";
import { Page } from "../components/page/Page";

export const ColorPalettePage: React.FC = () => {
  return (
    <Page title="Color Palette Generator">
      <ColorPalette />
      <CodeDisplay />
    </Page>
  );
};

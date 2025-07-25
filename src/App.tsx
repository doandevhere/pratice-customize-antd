import { Button, Switch } from "antd";
import type { AvatarSize } from "antd/es/avatar/AvatarContext";
import { useState } from "react";
import { StyledAvatar } from "./StyledAvatar";
import { ThemeWrapper } from "./ThemeWrapper";
import "./index.css";

function App() {
  const [size, setSize] = useState<AvatarSize>("large");
  const [isRed, setIsRed] = useState(false);

  return (
    <ThemeWrapper>
      <div>
        <StyledAvatar size={size} color={isRed ? "red" : "blue"}>
          A
        </StyledAvatar>
        <Switch checked={isRed} onChange={setIsRed} />
      </div>

      <Button onClick={() => setSize("large")}>Large</Button>
      <Button onClick={() => setSize("default")}>Default</Button>
      <Button onClick={() => setSize("small")}>Small</Button>
    </ThemeWrapper>
  );
}

export default App;

import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060227;
  height: 60vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="< >"
        color="#F2600C"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="( )"
        color="#044BD9"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JavaScript"
        icon="{ }"
        color="#F2C029"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;

import React from "react";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import "../App.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px 8px 8px;
  ${({ open }) => (open ? "flex-grow: 1;" : "flex-grow: 0;")}
`;

const Heading = styled(Box)`
  display: flex;
  padding: 9px 9px;
  background-color: #0d034f;
`;

const Header = styled(Box)`
  display: flex;
  background-color: #060227;
  color: white;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container open={open}>
      <Header>
        <Heading>
          <Box
            component="span"
            sx={{
              backgroundColor: color,
              width: 30,
              display: "flex",
              justifyContent: "center",
              padding: 0.5,
              borderRadius: 2,
              marginRight: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlledEditor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
};

export default Editor;

import React, { useRef, useState } from "react";
// Import motion from Framer Motion
import "animate.css";
import {
  Box,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Menu,
} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { languageVersions } from "../constants";

const IDE = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
  };

  const languages = Object.entries(languageVersions);

  const LanguageSelector = () => {
    return (
      <Box>
        <Text mb={2} fontSize="lg">
          Language
        </Text>
        <Menu>
          <MenuButton as={Button}>Select Language</MenuButton>
          <MenuList>
            {languages.map((language, version) => (
              <MenuItem
                key={language}
                // onClick={() => editorRef.current.setModel(language[1])}
              >
                &nbsp;
                <Text as="span" color="gray.500" fontSize="md">
                  {version}
                </Text>
                {language}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  return (
    <section className="bg-primary w-full flex-1" id="hero">
      <div className="flex md:flex-row item-start justify-between flex-col py-6 sm:py-16 sm:px-20">
        <Box className="w-full">
          <p className="text-white">Code Editor</p>
          <LanguageSelector />
          <div className="border border-red-500 border-2xl sm:px-16">
            <Editor
              height="90vh"
              theme="vs-dark"
              defaultLanguage="javascript"
              defaultValue="// some comment"
              className="w-full"
              value={value}
              onChange={(value) => setValue(value)}
              onMount={onMount}
            />
          </div>
        </Box>
      </div>
    </section>
  );
};

export default IDE;

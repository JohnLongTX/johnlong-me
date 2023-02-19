import { Dispatch, SetStateAction } from "react";
import { parseInput } from "./commandParser";
import { commands } from "./commands";
import { convertEmoji } from "./utility/shortCodetoUnicode";


export const handleCommand = (input: string, setPrompt: Dispatch<SetStateAction<string>>) => {
  const { command, args } = parseInput(input);
  const cmdFunc = commands[command];
  let output: string;
  if (cmdFunc) {
    if (command === 'prompt') {
      setPrompt(convertEmoji(cmdFunc(args)));
      return '';
    }
    output = cmdFunc(args);
  } else {
    output = `Command not recognized: ${command}`;
  }
  return output;
};
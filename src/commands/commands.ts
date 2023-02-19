import { echo } from '@/commands/utility/echo';
import { prompt } from '@/commands/utility/prompt';
import { help } from './utility/help';

export type CommandFunc = (args: string[]) => string;

export const commands: Record<string, CommandFunc> = {
  echo: echo,
  prompt: prompt,
  help: help,
};

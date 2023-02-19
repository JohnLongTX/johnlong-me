import { commands } from '@/commands/commands';

export function help(args: string[]) {
  if (args.length > 0) {
    return `Help does not take any arguments`;
  }

  const commandList = Object.keys(commands).join(', ');
  return `Available commands: ${commandList}`;
}
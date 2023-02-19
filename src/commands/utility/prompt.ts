export function prompt(args: string[]) {
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    return 'Usage: prompt [string ...]\n\nSets the promptfor the terminal.';
  } else {
    const output = args.join(' ');
    if (output.trim() === '') {
      return 'Error: empty argument';
    } else {
      return output;
    }
  }
}
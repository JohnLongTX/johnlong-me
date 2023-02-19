export function echo(args: string[]) {
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    return 'Usage: echo [string ...]\n\nEcho the arguments to the standard output.';
  } else {
    const output = args.join(' ');
    if (output.trim() === '') {
      return 'Error: empty argument';
    } else {
      return output;
    }
  }
}
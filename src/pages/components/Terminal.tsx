import { useState, useRef, useEffect, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import styles from '@/styles/Terminal.module.css';
import { handleCommand } from '@/commands/commandRouter';

type HistoryItem = {
  input: string;
  output: string;
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [prompt, setPrompt] = useState('$');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const motd = `Welcome to my website! Type 'help' to get started.`;
    setHistory([{ input: '', output: motd }]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = handleCommand(input, setPrompt);
    setHistory([...history, { input, output }]);
    setOutput(output);
    setInput('');
    inputRef.current?.focus();
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
  
      const maxIndex = history.length - 1;
      let nextIndex = historyIndex;
  
      if (e.key === 'ArrowUp') {
        nextIndex = historyIndex >= maxIndex ? maxIndex : historyIndex + 1;
      } else {
        nextIndex = historyIndex < 0 ? -1 : historyIndex - 1;
      }
  
      setHistoryIndex(nextIndex);
      setInput(nextIndex >= 0 ? history[maxIndex - nextIndex].input : '');
    } else if (e.key === 'c' && e.ctrlKey) {
      setInput('');
      setOutput('Command cancelled');
    } else if (e.key === 'l' && e.ctrlKey) {
      setHistory([]);
      setInput('');
      setOutput('');
    }
  };
  

  const renderHistory = () => {
    return history
      .map((item, index) => (
        <div key={index} className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>{prompt}</span> {item.input}
          <br />
          {item.output}
        </div>
      ))
      .reverse();
  };

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.terminalHistory}>{renderHistory()}</div>
        <div className={styles.terminalPromptWrapper}>
          <div className={styles.terminalPrompt}>{prompt}</div>
          <form onSubmit={handleSubmit} className={styles.terminalInputWrapper}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className={styles.terminalInput}
            />
            <div className={styles.terminalCursor}></div>
          </form>
        </div>
        <div className={styles.terminalOutput}>{output}</div>
      </div>
    </div>
  );
};

export default Terminal;

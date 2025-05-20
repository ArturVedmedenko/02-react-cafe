import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  isResetVisible: boolean;
}

const VoteOptions = ({ onVote, onReset, isResetVisible }: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote('bad')}
      >
        Bad
      </button>
      {isResetVisible && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;

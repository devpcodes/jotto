import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
    CORRECT_GRESS: "CORRECT_GRESS",
    GUESS_WORD: 'GUESS_WORD'
};

// export function correctGuess() {
//     return {
//         type: actionTypes.CORRECT_GRESS
//     };
// }

export const guessWord = (guessedWord) => {
    return function(dispatch, getState){
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord, 
                letterMatchCount
            }
        })

        if(guessedWord === secretWord){
            dispatch({
                type: actionTypes.CORRECT_GRESS
            })
        }
    }
}

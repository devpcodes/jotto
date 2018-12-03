export const actionTypes = {
    CORRECT_GRESS: "CORRECT_GRESS"
};

export function correctGuess() {
    return {
        type: actionTypes.CORRECT_GRESS
    };
}

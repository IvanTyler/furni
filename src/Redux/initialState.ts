

export interface ICodeCopied {
    codeCopied: boolean;
}

export type typeInitState = ICodeCopied

export const initialState: typeInitState = {
    codeCopied: false,
}
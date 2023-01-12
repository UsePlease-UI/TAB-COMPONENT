export interface ITabContext {
    linkRefs: React.RefObject<HTMLButtonElement>[];
}

export interface ITabProvider {
    children: React.ReactNode;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

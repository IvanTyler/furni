interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map((item, index ) => props.renderItem(item, index))}
        </>
    )
}
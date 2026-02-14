interface TransactionButtonProps {
    bgColor: string;
    label: string;
    onClick: () => void;
}

export default function transactionButton(props: TransactionButtonProps) {
    return (
        <>
            <button
                type="button"
                onClick={props.onClick}
                className="action-button"
                style={{background: props.bgColor, margin: "0.2em", padding: "0.5em"}}>
                    {props.label}
            </button>
        </>
    );
}
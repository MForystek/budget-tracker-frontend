interface TransactionButtonProps {
    bgColor: string;
    label: string;
}

export default function transactionButton(props: TransactionButtonProps) {
    return <button type="button" className="action-button" style={{background: props.bgColor, margin: "0.2em", padding: "0.5em"}}>{props.label}</button>
}
interface TransactionsAmountProps {
    value: string;
    onChange: (id: string) => void;
    error: string | null;
    onBlur: () => void;
}

export default function TransactionsAmount(props: TransactionsAmountProps) {
    // TODO add regex to check amount format to prevent for example 09.9 etc.
    return (
        <label>
            Amount:
            <input
                name="amount"
                type="text"
                inputMode="numeric"
                placeholder="0.00"
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onBlur={props.onBlur}
            />
            {props.error && <span style={{color: 'red'}}>{props.error}</span>}
        </label>
    );
}
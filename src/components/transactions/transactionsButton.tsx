import { useNavigate } from "react-router-dom";

interface TransactionButtonProps {
    bgColor: string;
    label: string;
    navigatePath: string;
}

export default function transactionButton(props: TransactionButtonProps) {
    const navigate = useNavigate();

    return <button 
                type="button"
                onClick={() => navigate(props.navigatePath)}
                className="action-button"
                style={{background: props.bgColor, margin: "0.2em", padding: "0.5em"}}>
                    {props.label}
            </button>
}